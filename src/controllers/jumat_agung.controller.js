const { httpStatus } = require("../variables/response.variable");
const jumatAgungQueries = require("../queries/jumat_agung.query");
const { responseSuccess, responseError } = require("../utils/response.util");
const {
  createJumatAgungPayload,
  verifyParticipantsPayload,
} = require("../payloads/jumat_agung.payload");
const { Op } = require("sequelize");
const { base64Encrypt, base64Decrypt } = require("../utils/encryptor.util");

const getListParticipantGoodFriday = async (req, res) => {
  try {
    const keyword = `%${req.query.keyword}%` || "%";
    const offset = +req.query.offset || 0;
    const limit = +req.query.limit || 15;

    const response = await jumatAgungQueries.findAndCountAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.substring]: keyword,
            },
          },
          {
            ir: {
              [Op.substring]: keyword,
            },
          },
        ],
        type: 1,
      },
      order: [["createdAt", "DESC"]],
      offset,
      limit,
    });

    let { rows, count } = response;

    if (rows.length > 0) {
      rows.forEach((row, i) => {
        rows[i].id = base64Encrypt(row.id);
      });
    }

    const data = {
      count,
      rows: rows.length,
      list: rows,
    };
    return responseSuccess(
      req,
      res,
      httpStatus.SUCCESS,
      "Get List Good Friday Participant",
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

const registerJumatAgung = async (req, res) => {
  try {
    const data = {
      ...createJumatAgungPayload(req.body),
    };
    const { name } = req.body;

    const filteredUser = await jumatAgungQueries.findOne({
      where: { name, type: 1 },
    });

    if (filteredUser) {
      return responseError(
        req,
        res,
        httpStatus.ERROR_GENERAL,
        "Maaf nama anda sudah terdaftar",
        null
      );
    }

    await jumatAgungQueries.create(data);

    return responseSuccess(
      req,
      res,
      httpStatus.SUCCESS,
      "Pendaftaran Jumat Agung berhasil",
      {
        id: base64Encrypt(data.id),
        name: data.name,
      }
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

const verifyParticipant = async (req, res) => {
  try {
    const id = base64Decrypt(req.body.id);
    let data = { ...verifyParticipantsPayload() };

    const filteredUser = await jumatAgungQueries.findOne({
      where: { id, type: 1 },
    });

    if (filteredUser.status) {
      return responseError(
        req,
        res,
        httpStatus.ERROR_GENERAL,
        "Anda sudah check-in",
        null
      );
    }

    await jumatAgungQueries.verifyParticipant(data, id);

    return responseSuccess(
      req,
      res,
      httpStatus.SUCCESS,
      "Verifikasi berhasil",
      filteredUser
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

const getReportsGoodFriday = async (req, res) => {
  try {
    const response = await jumatAgungQueries.findAll({
      where: { type: 1 },
      order: [["createdAt", "DESC"]],
    });

    if (response.length > 0) {
      response.forEach((row, i) => {
        response[i].id = base64Encrypt(row.id);
      });
    }

    const data = response;
    return responseSuccess(
      req,
      res,
      httpStatus.SUCCESS,
      "Get List Christmas Participant",
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

const getOptionsIbadahRaya = async (req, res) => {
  try {
    const response = await jumatAgungQueries.findAll({
      where: { type: 1 },
      order: [["createdAt", "DESC"]],
    });

    const quota_ir_1 = response.filter((res) => res.ir === "IR 1").length;
    const quota_ir_2 = response.filter((res) => res.ir === "IR 2").length;
    const quota_ir_3 = response.filter((res) => res.ir === "IR 3").length;

    const data = [
      {
        name: "IR 1 - 08:00 WIB",
        value: "IR 1",
        quota: quota_ir_1,
      },
      {
        name: "IR 2 - 10:30 WIB",
        value: "IR 2",
        quota: quota_ir_2,
      },
      {
        name: "IR 3 - 13:00 WIB",
        value: "IR 3",
        quota: quota_ir_3,
      },
    ];

    return responseSuccess(
      req,
      res,
      httpStatus.SUCCESS,
      "Get List Ibadah Raya",
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

module.exports = {
  getListParticipantGoodFriday,
  registerJumatAgung,
  verifyParticipant,
  getReportsGoodFriday,
  getOptionsIbadahRaya,
};
