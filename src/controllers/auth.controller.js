import bcryptjs from "bcryptjs";
import * as jwt from "jsonwebtoken";
import config from "../configs/env.config";
import * as crewQueries from "../queries/user_profiles.query";
import { base64Decrypt, base64Encrypt } from "../utils/encryptor.util";
import { responseError, responseSuccess } from "../utils/response.util";
import { httpStatus } from "../variables/response.variable";

export async function authUser(req, res) {
  try {
    const { username, password } = req.body;

    const user = await crewQueries.authUser({
      where: {
        username,
        status: 1,
      },
    });
    console.log(user)

    if (!user) throw new Error("User not found");

    const plainPassword = base64Decrypt(password);

    const isPassValid = bcryptjs.compareSync(plainPassword, user.password);
    console.log(isPassValid)

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
}
