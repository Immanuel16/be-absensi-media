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
const accountQueries = require("../queries/account.query");
const { apiHelperCoverage } = require("../utils/axios.util");

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
    // const { id } = req.user;
    const id = base64Decrypt(req.params.id);

    const response = await crewQueries.findOne({
      where: { id },
    });

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
    } = response;

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

    response.id = base64Encrypt(response.id);

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

const getCrewBirthdays = async (req, res) => {
  try {
    const name = `%${req.query.name}%` || "%";

    let response = req.query.name
      ? await crewQueries.findCrewBirthdays({
          where: {
            full_name: {
              [Op.substring]: name,
            },
          },
        })
      : await crewQueries.findCrewBirthdays({
          where: {
            status: 1,
          },
        });

    response = response.filter((respon) => respon.username !== "nuel");

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
  const username = req.user.username.toLocaleLowerCase();
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
      order: [
        ["tanggal", "DESC"],
        ["ir", "DESC"],
      ],
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
      where: { status: 1 },
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

const getAllCrew = async (req, res) => {
  try {
    const offset = +req.query.offset || 0;
    const limit = +req.query.limit || 50;
    const order = req.query.order_by || "username";
    let response = await crewQueries.findAndCountAll({
      order: [[order, "ASC"]],
      offset,
      limit,
      where: { status: 1 },
    });

    let { rows, count } = response;

    if (rows.length > 0) {
      rows.forEach((crew, i) => {
        rows[i].id = base64Encrypt(crew.id);
      });
    }

    // rows = rows.filter((row) => row.username !== "nuel");

    const data = {
      count,
      rows: rows.length,
      crew: rows,
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

const getTotalMinistryCrew = async (req, res) => {
  const start_date = req.query.start_date || startDate;
  const end_date = req.query.end_date || endDate;
  const church = req.query.church || 'IR';
  try {
    let response = await crewQueries.findAllUserAbsence({
      order: [["username", "ASC"]],
    });

    response = response.map((res) => ({
      ...res,
      username: res.username.toLowerCase(),
    }));

    let data = [];

    await Promise.all(
      response.map(async (res) => {
        try {
          let total = await accountQueries.count({
            where: {
              [Op.or]: [
                {
                  kom1: {
                    [Op.substring]: res.username,
                  },
                },
                {
                  kom2: {
                    [Op.substring]: res.username,
                  },
                },
                {
                  lighting: {
                    [Op.substring]: res.username,
                  },
                },
                {
                  cam1: {
                    [Op.substring]: res.username,
                  },
                },
                {
                  cam2: {
                    [Op.substring]: res.username,
                  },
                },
                {
                  cam3: {
                    [Op.substring]: res.username,
                  },
                },
                {
                  switcher: {
                    [Op.substring]: res.username,
                  },
                },
                {
                  photo: {
                    [Op.substring]: res.username,
                  },
                },
                {
                  sosmed: {
                    [Op.substring]: res.username,
                  },
                },
                {
                  sound1: {
                    [Op.substring]: res.username,
                  },
                },
                {
                  sound2: {
                    [Op.substring]: res.username,
                  },
                },
              ],
              tanggal: {
                [Op.between]: [start_date, end_date],
              },
              ir: {
                [Op.like]: church
              }
            },
          });
          data.push({
            name: res.username,
            total,
          });
        } catch (error) {
          console.log("error");
        }
      })
    );
    data.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    data = data.filter((d) => d.total);
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

module.exports = {
  registerCrew,
  getAllCrew,
  getBankCrew,
  getCrewDetail,
  getCrewBirthdays,
  getCrewMinistryHistory,
  getListUserAbsence,
  getTotalMinistryCrew,
};
