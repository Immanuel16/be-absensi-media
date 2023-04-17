const { Op } = require("sequelize");
const { responseError, responseSuccess } = require("../utils/response.util");
const accountQueries = require("../queries/account.query");
const crewQueries = require("../queries/user_profiles.query");
const { httpStatus } = require("../variables/response.variable");
const { base64Encrypt, base64Decrypt } = require("../utils/encryptor.util");
const moment = require("moment");
const { formatRupiah } = require("../utils/format.util");
const { apiHelperCoverage } = require("../utils/axios.util");

const startDate = moment().startOf("month").format("YYYY-MM-DD");
const endDate = moment().endOf("month").format("YYYY-MM-DD");

const getCrewPk = async (req, res) => {
  const username = req.user.username.toLocaleLowerCase();
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
    let {
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
      bank_acc_num,
      bank_acc_name,
      bank_id,
    } = response;

    const bank_name = await accountQueries.findBankCrew(bank_id);

    let provinceName = "";
    let cityName = "";
    let districtName = "";
    let subdistrictName = "";
    /* convert province */
    const provinces = await apiHelperCoverage.get("provinces.json");
    provinces.data.forEach((prov) => {
      if (base64Decrypt(province) === prov.id) {
        provinceName = prov.name;
      }
    });

    /* convert city */
    const cities = await apiHelperCoverage.get(
      `regencies/${base64Decrypt(response.province)}.json`
    );
    cities.data.forEach((cty) => {
      if (base64Decrypt(city) === cty.id) {
        cityName = cty.name;
      }
    });

    /* convert district */
    const districts = await apiHelperCoverage.get(
      `districts/${base64Decrypt(response.city)}.json`
    );
    districts.data.forEach((dist) => {
      if (base64Decrypt(district) === dist.id) {
        districtName = dist.name;
      }
    });

    /* convert district */
    const subdistricts = await apiHelperCoverage.get(
      `villages/${base64Decrypt(response.district)}.json`
    );
    subdistricts.data.forEach((sub) => {
      if (base64Decrypt(subdistrict) === sub.id) {
        subdistrictName = sub.name;
      }
    });

    province = provinceName.toLocaleLowerCase();
    city = cityName.toLocaleLowerCase();
    district = districtName.toLocaleLowerCase();
    subdistrict = subdistrictName.toLocaleLowerCase();
    const data = {
      full_name,
      username,
      birth_date,
      photo,
      phone: `+62 ${base64Decrypt(phone).substring(1)}`,
      address: `${base64Decrypt(
        address
      )}, ${subdistrict}, ${district}, ${city}, ${province}`,
      kom,
      hmc,
      baptis,
      orientasi,
      total_pelayanan: dataPelayanan.total_pelayanan,
      total_pk: dataPelayanan.total_pk,
      bank_acc_num: base64Decrypt(bank_acc_num),
      bank_acc_name,
      bank_id,
      bank_name: bank_name[0].bank_name,
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
