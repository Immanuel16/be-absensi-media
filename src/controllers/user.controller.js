const { isEmpty } = require("lodash");
const { registerCrewPayload } = require("../payloads/register.payload");
const crewQueries = require("../queries/user_profiles.query");
const { base64Decrypt, base64Encrypt } = require("../utils/encryptor.util");
const { responseError, responseSuccess } = require("../utils/response.util");
const {
  generateCreatedAttribute,
  generateModifiedAttribute,
} = require("../utils/userstamp.util");
const { httpStatus } = require("../variables/response.variable");

const encryptValues = (objName) => {
  Object.keys(objName).forEach((item) => {
    if (
      item === "full_name" ||
      item === "username" ||
      item === "province" ||
      item === "city" ||
      item === "district" ||
      item === "subdistrict" ||
      item === "bank_id" ||
      item === "bank_acc_num" ||
      item === "address" ||
      item === "email" ||
      item === "birth_date" ||
      item === "phone"
    ) {
      objName[item] = base64Encrypt(objName[item]);
    }
  });
};
const registerCrew = async (req, res) => {
  try {
    let { username, full_name } = req.body;
    username = username.toLowerCase();
    full_name = full_name.toLowerCase();
    encryptValues(req.body);
    const data = {
      ...registerCrewPayload(req.body),
      ...generateCreatedAttribute(req),
      ...generateModifiedAttribute(req),
    };

    const user = await crewQueries.findAll({
      where: {
        username
      }
    });

    if(!isEmpty(user)) throw new Error('Username already exists');

    await crewQueries.create(data);

    return responseSuccess(req, res, httpStatus.ERROR_GENERAL, '', null);
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

const getUserDetail = async (req, res) => {
  try {
    const { id } = req.user;
    // const id = base64Decrypt(req.user.id);

    const response = await crewQueries.findOne({
      where: { id },
    });

    response.id = base64Encrypt(response.id);

    return responseSuccess(req, res, httpStatus.SUCCESS, "", response);
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

module.exports = { registerCrew, getUserDetail };
