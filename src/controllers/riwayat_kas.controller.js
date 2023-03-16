const { Op } = require("sequelize");
const {
  createHistoryCashPayload,
  updateHistoryCashPayload,
} = require("../payloads/riwayat_kas.payload");
const { base64Encrypt, base64Decrypt } = require("../utils/encryptor.util");
const { responseError, responseSuccess } = require("../utils/response.util");
const { httpStatus } = require("../variables/response.variable");
const historyCashQueries = require("../queries/riwayat_kas.query");
const moment = require("moment");

const startDate = moment().startOf("year").format("YYYY-MM-DD");
const endDate = moment().endOf("year").format("YYYY-MM-DD");

const getListHistoryCash = async (req, res) => {
  try {
    const offset = +req.query.offset || 0;
    const limit = +req.query.limit || 5;
    const start_date = req.query.start_date || startDate;
    const end_date = req.query.end_date || endDate;

    const response = await historyCashQueries.findAndCountAll({
      where: {
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
      rows.forEach((cash, i) => {
        rows[i].id = base64Encrypt(cash.id);
      });
    }

    const data = {
      count,
      rows: rows.length,
      history_cash: rows,
      total_cash: await getTotalCash()
    };

    return responseSuccess(
      req,
      res,
      httpStatus.SUCCESS,
      "Get History Cash",
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

const sumTotal = arr =>
  arr.reduce((sum, { totals }) => sum + totals, 0)

const getTotalCash = async (req, res) => {
  try {
    const response = await historyCashQueries.findAll();
    const totalCash = sumTotal(response);
    return totalCash;
  } catch (error) {
    return responseError(req, res, httpStatus.ERROR_GENERAL, error.message, null);
  }
}

const createHistoryCash = async (req, res) => {
  try {
    const data = {
      ...createHistoryCashPayload(req.body),
    };

    data.totals = data.price * +data.total_item * (data.type ? 1 : -1);

    await historyCashQueries.create(data);

    return responseSuccess(
      req,
      res,
      httpStatus.SUCCESS,
      "Create History Success",
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

const deleteHistoryCash = async (req, res) => {
  const id = base64Decrypt(req.params.id);
  try {
    await historyCashQueries.destroy({
      where: {
        id
      }
    });

    return responseSuccess(req, res, httpStatus.SUCCESS, "Delete history success", null);
  } catch (error) {
    return responseError(req, res, httpStatus.ERROR_GENERAL, error.message, null);
  }
}

module.exports = { createHistoryCash, getListHistoryCash, deleteHistoryCash };
