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
    const limit = +req.query.limit || 6;

    const response = await jumatAgungQueries.findAndCountAll({
      where: {
        [Op.and]: [
          {
            [Op.or]: [
              {
                name: {
                  [Op.substring]: keyword,
                },
              },
              {
                origin_church: {
                  [Op.substring]: keyword,
                },
              },
            ],
          },
          { type: 1 },
        ],
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
      christmas: rows,
    };
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

module.exports = {
  getListParticipantGoodFriday,
  registerJumatAgung,
  verifyParticipant,
};
