const { isEmpty } = require("lodash");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../configs/env.config");
const crewQueries = require("../queries/user_profiles.query");
const { base64Decrypt, base64Encrypt } = require("../utils/encryptor.util");
const { responseError, responseSuccess } = require("../utils/response.util");
const { httpStatus } = require("../variables/response.variable");
const { Op } = require("sequelize");
const { sendMailChangePassword } = require("../services/email.service");

const authUser = async (req, res) => {
  try {
    let { username, password } = req.body;
    // username = base64Encrypt(username);
    const user = await crewQueries.authUser({
      where: {
        [Op.or]: [
          {
            username: username.toLowerCase(),
          },
          {
            email: base64Encrypt(username),
          },
        ],
        status: 1,
      },
    });

    if (!user) throw new Error("User not found");

    const plainPassword = base64Decrypt(password);

    const isPassValid = bcryptjs.compareSync(plainPassword, user.password);
    console.log(isPassValid);

    if (!isPassValid) throw new Error("Password doesn't match");

    const encryptedUserId = base64Encrypt(user.id);

    const jwtSign = jwt.sign(
      {
        id: encryptedUserId,
        username: user.username,
        full_name: user.full_name,
        role: user.role,
      },
      config.app.secretKey,
      { expiresIn: "7d" }
    );

    const data = {
      id: user.id,
      username: user.username,
      full_name: user.full_name,
      role: user.role,
      token: jwtSign,
    };

    return responseSuccess(req, res, httpStatus.SUCCESS, "Login success", data);
  } catch (err) {
    return responseError(req, res, httpStatus.ERROR_GENERAL, err.message, null);
  }
};

const changePassword = async (req, res) => {
  try {
    let { email, password } = req.body;
    const user = await crewQueries.authUser({
      where: {
        email: base64Encrypt(email),
        status: 1,
      },
    });

    if (isEmpty(user)) throw new Error("Akun email anda belum terdaftar");

    const data = {
      password: bcryptjs.hashSync(base64Decrypt(password), 10),
    };

    const payloadEmail = {
      password: base64Decrypt(password),
      full_name: user.full_name,
      email,
    };

    // await crewQueries.changePassword(data, base64Encrypt(email));

    await sendMailChangePassword(payloadEmail);

    return responseSuccess(
      req,
      res,
      httpStatus.SUCCESS,
      "Change Password Success",
      null
    );
  } catch (error) {
    return responseError(
      req,
      res,
      httpStatus.ERROR_GENERAL,
      error.message,
      null
    );
  }
};

module.exports = { authUser, changePassword };
