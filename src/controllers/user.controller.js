const { isEmpty } = require("lodash");
const { registerCrewPayload } = require("../payloads/register.payload");
const crewQueries = require("../queries/user_profiles.query");
const absensiQueries = require("../queries/absensi.query");
const { base64Decrypt, base64Encrypt } = require("../utils/encryptor.util");
const { responseError, responseSuccess } = require("../utils/response.util");
const { httpStatus } = require("../variables/response.variable");
const { sendMailRegister } = require("../services/email.service");
const moment = require("moment");
const { Op } = require("sequelize");
const { worshipType } = require("../utils/type.util");

const startDate = moment().startOf("month").format("YYYY-MM-DD");
const endDate = moment().endOf("month").format("YYYY-MM-DD");

const encryptValues = (objName) => {
  Object.keys(objName).forEach((item) => {
    if (
      item === "province" ||
      item === "city" ||
      item === "district" ||
      item === "subdistrict" ||
      item === "bank_acc_num" ||
      item === "address" ||
      item === "email" ||
      item === "phone"
    ) {
      objName[item] = base64Encrypt(objName[item]);
    }
  });
};

const registerCrew = async (req, res) => {
  try {
    let { username, full_name, email, password } = req.body;
    username = username.toLowerCase();
    full_name = full_name.toLowerCase();
    encryptValues(req.body);
    const data = {
      ...registerCrewPayload(req.body),
    };

    const user = await crewQueries.findAll({
      where: {
        username,
      },
    });

    if (!isEmpty(user)) throw new Error("Username already exists");

    await crewQueries.create(data);

    await sendMailRegister({
      username,
      email,
      full_name,
      password: base64Decrypt(password),
    });

    return responseSuccess(req, res, httpStatus.SUCCESS, "", null);
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

const getCrewDetail = async (req, res) => {
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

const getCrewBirthdays = async (req, res) => {
  try {
    const name = `%${req.query.name}%` || "%";

    const response = req.query.name
      ? await crewQueries.findCrewBirthdays({
          where: {
            full_name: {
              [Op.substring]: name,
            },
          },
        })
      : await crewQueries.findCrewBirthdays();

    return responseSuccess(
      req,
      res,
      httpStatus.SUCCESS,
      "Get Crew Birthdays",
      response
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

const getKeyByValue = (obj, value) =>
  Object.keys(obj).find((key) => obj[key] === value);

const getCrewMinistryHistory = async (req, res) => {
  const username = req.user.username;
  try {
    const offset = +req.query.offset || 0;
    const limit = +req.query.limit || 3;
    const start_date = req.query.start_date || startDate;
    const end_date = req.query.end_date || endDate;

    const response = await absensiQueries.findAndCountAll({
      where: {
        [Op.or]: [
          {
            kom1: {
              [Op.substring]: username,
            },
          },
          {
            kom2: {
              [Op.substring]: username,
            },
          },
          {
            lighting: {
              [Op.substring]: username,
            },
          },
          {
            cam1: {
              [Op.substring]: username,
            },
          },
          {
            cam2: {
              [Op.substring]: username,
            },
          },
          {
            cam3: {
              [Op.substring]: username,
            },
          },
          {
            switcher: {
              [Op.substring]: username,
            },
          },
          {
            photo: {
              [Op.substring]: username,
            },
          },
          {
            sound1: {
              [Op.substring]: username,
            },
          },
          {
            sound2: {
              [Op.substring]: username,
            },
          },
        ],
        tanggal: {
          [Op.between]: [start_date, end_date],
        },
      },
      order: [["tanggal", "DESC"]],
      offset,
      limit,
    });

    const { rows, count } = response;

    if (rows.length > 0) {
      rows.forEach((absen, i) => {
        rows[i].id = base64Encrypt(absen.id);
      });
    }

    const history = rows.map((row) => ({
      id: row.id,
      ir: row.ir,
      tanggal: row.tanggal,
      tugas: worshipType[getKeyByValue(row, username)],
    }));

    const data = {
      count,
      rows: rows.length,
      history,
    };

    return responseSuccess(
      req,
      res,
      httpStatus.SUCCESS,
      "Get History Ministry",
      data
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

const getBankCrew = async (req, res) => {
  try {
    const offset = req.query.offset || 0;
    const limit = req.query.limit || 20;

    const data = await crewQueries.findCrewBank();
    data.forEach((d) => {
      d.id = base64Encrypt(d.id);
      d.username = d.username.toLowerCase();
      d.bank_acc_name = d.bank_acc_name.toLowerCase();
      d.bank_acc_num = base64Decrypt(d.bank_acc_num);
    });

    return responseSuccess(
      req,
      res,
      httpStatus.SUCCESS,
      "Get List Bank Crew",
      data
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

const getListUserAbsence = async (req, res) => {
  try {
    let response = await crewQueries.findAllUserAbsence({
      order: [["username", "ASC"]],
    });

    response = response.map((res) => ({
      ...res,
      username: res.username.toLowerCase(),
    }));

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

module.exports = {
  registerCrew,
  getBankCrew,
  getCrewDetail,
  getCrewBirthdays,
  getCrewMinistryHistory,
  getListUserAbsence,
};
