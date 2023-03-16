const { Op } = require("sequelize");
const { responseError, responseSuccess } = require("../utils/response.util");
const accountQueries = require("../queries/account.query");
const crewQueries = require("../queries/user_profiles.query");
const { httpStatus } = require("../variables/response.variable");
const { base64Encrypt, base64Decrypt } = require("../utils/encryptor.util");
const moment = require("moment");
const { formatRupiah } = require("../utils/format.util");

const startDate = moment().startOf("month").format("YYYY-MM-DD");
const endDate = moment().endOf("month").format("YYYY-MM-DD");

const getCrewPk = async (req, res) => {
  const username = req.user.username;
  const start_date = req.query.start_date || startDate;
  const end_date = req.query.end_date || endDate;
  try {
    const total_pelayanan = await accountQueries.count({
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
    });

    const data = {
      total_pelayanan,
      total_pk: formatRupiah(total_pelayanan * 50000 - 20000),
    };

    return data;
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

const getInfoAccount = async (req, res) => {
  try {
    const { id } = req.user;

    const response = await crewQueries.findOne({
      where: { id },
    });

    const dataPelayanan = await getCrewPk(req, res);

    response.id = base64Encrypt(response.id);
    const {
      full_name,
      username,
      birth_date,
      phone,
      province,
      city,
      district,
      subdistrict,
      address,
      kom,
      hmc,
      baptis,
      orientasi,
      photo,
    } = response;

    const data = {
      full_name,
      username,
      birth_date,
      photo,
      phone: `+62 ${base64Decrypt(phone).substring(1)}`,
      address: `${base64Decrypt(address)}, ${base64Decrypt(
        subdistrict
      )}, ${base64Decrypt(district)}, ${base64Decrypt(city)}, ${base64Decrypt(
        province
      )}`,
      kom,
      hmc,
      baptis,
      orientasi,
      total_pelayanan: dataPelayanan.total_pelayanan,
      total_pk: dataPelayanan.total_pk,
    };

    return responseSuccess(req, res, httpStatus.SUCCESS, "", data);
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

module.exports = { getCrewPk, getInfoAccount };
