const { httpStatus } = require("../variables/response.variable");
const natalQueries = require("../queries/natal.query");
const { responseSuccess, responseError } = require("../utils/response.util");
const { createNatalPayload } = require("../payloads/natal.payload");
const { Op } = require("sequelize");
const { base64Encrypt, base64Decrypt } = require("../utils/encryptor.util");

const getListParticipantChristmas = async (req, res) => {
  try {
    const keyword = `%${req.query.keyword}%` || "%";
    const offset = +req.query.offset || 0;
    const limit = +req.query.limit || 6;

    const response = await natalQueries.findAndCountAll({
      where: {
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
      absen: rows,
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

const registerNatal = async (req, res) => {
  try {
    const data = {
      ...createNatalPayload(req.body),
    };
    const { name } = req.body;

    const filteredUser = await natalQueries.findOne({
      where: { name },
    });

    if (filteredUser) {
      return (
        responseError(
          req,
          res,
          httpStatus.ERROR_GENERAL,
          "Maaf nama anda sudah terdaftar"
        ),
        null
      );
    }

    await natalQueries.create(data);

    return responseSuccess(
      req,
      res,
      httpStatus.SUCCESS,
      "Registration Christmas Successfully",
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

module.exports = { getListParticipantChristmas, registerNatal };
