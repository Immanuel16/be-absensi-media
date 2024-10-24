const { isEmpty } = require("lodash");
const { Op } = require("sequelize");
const {
  createAbsensiPayload,
  updateAbsensiPayload,
} = require("../payloads/absensi.payload");
const { responseError, responseSuccess } = require("../utils/response.util");
const absensiQueries = require("../queries/absensi.query");
const crewQueries = require("../queries/user_profiles.query");
const { httpStatus } = require("../variables/response.variable");
const { base64Encrypt, base64Decrypt } = require("../utils/encryptor.util");
const moment = require("moment");

const startDate = moment().startOf("month").format("YYYY-MM-DD");
const endDate = moment().endOf("month").format("YYYY-MM-DD");

const getListAbsen = async (req, res) => {
  try {
    const keyword = `%${req.query.keyword}%` || "%";
    const offset = +req.query.offset || 0;
    const limit = +req.query.limit || 6;
    const start_date = req.query.start_date || startDate;
    const end_date = req.query.end_date || endDate;

    const response = await absensiQueries.findAndCountAll({
      where: {
        [Op.or]: [
          {
            kom1: {
              [Op.substring]: keyword,
            },
          },
          {
            kom2: {
              [Op.substring]: keyword,
            },
          },
          {
            lighting: {
              [Op.substring]: keyword,
            },
          },
          {
            cam1: {
              [Op.substring]: keyword,
            },
          },
          {
            cam2: {
              [Op.substring]: keyword,
            },
          },
          {
            cam3: {
              [Op.substring]: keyword,
            },
          },
          {
            switcher: {
              [Op.substring]: keyword,
            },
          },
          {
            photo: {
              [Op.substring]: keyword,
            },
          },
          {
            sound1: {
              [Op.substring]: keyword,
            },
          },
          {
            sound2: {
              [Op.substring]: keyword,
            },
          },
        ],
        tanggal: {
          [Op.between]: [start_date, end_date],
        },
      },
      order: [
        ["tanggal", "DESC"],
        ["ir", "ASC"],
      ],
      offset,
      limit,
    });

    let { rows, count } = response;

    if (rows.length > 0) {
      rows.forEach((absen, i) => {
        rows[i].id = base64Encrypt(absen.id);
        absen.late_person = absen.late_person
          ? absen.late_person.split(",")
          : [];
      });
    }

    const data = {
      count,
      rows: rows.length,
      absen: rows,
    };

    return responseSuccess(req, res, httpStatus.SUCCESS, "Get Absen", data);
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

const getListAllAbsen = async (req, res) => {
  try {
    const start_date = req.query.start_date || startDate;
    const end_date = req.query.end_date || endDate;
    const church = `%${req.query.church}%` || '%';

    const data = await absensiQueries.findAll({
      where: {
        tanggal: {
          [Op.between]: [start_date, end_date],
        },
        ir: {
          [Op.substring]: church
        }
      },
      order: [
        ["tanggal", "ASC"],
        ["ir", "ASC"],
      ],
    });

    return responseSuccess(req, res, httpStatus.SUCCESS, null, data);
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

const getListAllLateMember = async (req, res) => {
  try {
    const data = await absensiQueries.findAllLateMember({
      where: {
        tanggal: {
          [Op.between]: [startDate, endDate],
        },
        ir: "IR 1",
        // [Op.or]: {
        //   late_person: { [Op.not]: null },
        //   late_person: { [Op.not]: "" },
        // },
      },
      order: [["tanggal", "ASC"]],
    });
    if (data.length > 0) {
      data.forEach((absen) => {
        absen.id = base64Encrypt(absen.id);
        absen.late_person = absen.late_person
          ? absen.late_person.split(",")
          : [];
      });
      // data.forEach((absen) => {
      //   absen.late_person.sort((a, b) => {
      //     let fa = a.toLowerCase(),
      //       fb = b.toLowerCase();

      //     if (fa < fb) {
      //       return -1;
      //     }
      //     if (fa > fb) {
      //       return 1;
      //     }
      //     return 0;
      //   });
      // });
    }
    return responseSuccess(
      req,
      res,
      httpStatus.SUCCESS,
      "Get Late Member List",
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

const getTotalLateCrew = async (req, res) => {
  try {
    let response = await crewQueries.findAllUserAbsence({
      where: {
        status: 1,
        tanggal: {
          [Op.between]: [startDate, endDate],
        },
      },
    });
    response = response.map((res) => ({
      username: res.username.toLowerCase(),
    }));
    console.log(response);

    let data = [];

    await Promise.all(
      response.map(async (res) => {
        try {
          let total = await absensiQueries.count({
            where: {
              late_person: {
                [Op.substring]: res.username,
              },
              tanggal: {
                [Op.between]: [startDate, endDate],
              },
            },
          });
          data.push({
            name: res.username,
            percentage: getPercentageLate(total) * 100,
            total,
          });
        } catch (error) {
          console.log(error);
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
    return responseSuccess(
      req,
      res,
      httpStatus.SUCCESS,
      "Get Total Late Crew Success",
      data
    );
  } catch (error) {
    console.log(error);
  }
};

const getDetailAbsen = async (req, res) => {
  try {
    const id = base64Decrypt(req.params.id);

    let response = await absensiQueries.findOne({ where: { id } });

    response.id = base64Encrypt(response.id);
    response.late_person = response.late_person
      ? response.late_person.split(",")
      : [];

    for (const key in response) {
      if (response[key] === "") {
        response[key] = null;
      }
      // response["sosmed"] = response["sosmed"] || "";
      // if (key !== "sosmed") {
      // }
    }

    return responseSuccess(
      req,
      res,
      httpStatus.SUCCESS,
      "Get Absensi Detail",
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

const createAbsen = async (req, res) => {
  try {
    req.body.late_person =
      req.body.late_person.length > 0 ? req.body.late_person.join(",") : "";
    const data = {
      ...createAbsensiPayload(req.body, req.user.username),
    };

    await absensiQueries.create(data);

    return responseSuccess(
      req,
      res,
      httpStatus.SUCCESS,
      "Create Absen Success",
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

const updateAbsen = async (req, res) => {
  try {
    req.body.late_person =
      req.body.late_person.length > 0 ? req.body.late_person.join(",") : "";
    const id = base64Decrypt(req.params.id);
    const data = {
      ...updateAbsensiPayload(req.body, req.user.username),
    };

    await absensiQueries.updateById(data, id);

    return responseSuccess(
      req,
      res,
      httpStatus.SUCCESS,
      "Update Absen Success",
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

const deleteAbsen = async (req, res) => {
  const id = base64Decrypt(req.params.id);
  try {
    await absensiQueries.destroy({ where: { id } });
    return responseSuccess(
      req,
      res,
      httpStatus.SUCCESS,
      "Delete absence success",
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

const convertEmptyString = (obj) =>
  Object.keys(obj).forEach((k) => (obj[k] = obj[k] === "" ? null : obj[k]));

const getPercentageLate = (total) => {
  let start = new Date(startDate),
    finish = new Date(endDate),
    dayMilliseconds = 1000 * 60 * 60 * 24,
    totalWeeks = 0;
  while (start <= finish) {
    var day = start.getDay();
    if (day == 0) {
      totalWeeks++;
    }
    start = new Date(+start + dayMilliseconds);
  }
  return total / totalWeeks;
};

module.exports = {
  getListAbsen,
  createAbsen,
  getDetailAbsen,
  getListAllAbsen,
  getListAllLateMember,
  getTotalLateCrew,
  updateAbsen,
  deleteAbsen,
};
