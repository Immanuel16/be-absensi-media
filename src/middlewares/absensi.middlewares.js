const Joi = require("joi");
const { isEmpty } = require("lodash");
const { responseError } = require("../utils/response.util");
const { httpStatus } = require("../variables/response.variable");

const createAbsensi = async (req, res, next) => {
  try {
    const schema = Joi.object({
      tanggal: Joi.string().required("Tanggal pelayanan wajib diisi"),
      kom1: Joi.string().required("Operator komputer 1 wajib diisi"),
      kom2: Joi.string().allow(""),
      lighting: Joi.string().allow(""),
      cam1: Joi.string().required("Kameraman wajib diisi"),
      cam2: Joi.string().allow(""),
      cam3: Joi.string().allow(""),
      switcher: Joi.string().allow(""),
      photo: Joi.string().allow(""),
      sound1: Joi.string().required("Soundman wajib diisi"),
      sound2: Joi.string().allow(""),
      ir: Joi.string().allow(""),
      sosmed: Joi.string().allow(null),
      late_person: Joi.array(),
    });

    const result = schema.validate({
      ...req.body,
      ...req.params,
      ...req.query,
    });
    if (!isEmpty(result.error)) {
      return responseError(
        req,
        res,
        httpStatus.ERROR_MIDDLEWARE,
        result.error.message,
        null
      );
    }
    return next();
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

const updateAbsensi = async (req, res, next) => {
  try {
    const schema = Joi.object({
      tanggal: Joi.string().required("Tanggal wajib diisi"),
      kom1: Joi.string().required("Operator komputer 1 wajib diisi"),
      kom2: Joi.string().allow(""),
      lighting: Joi.string().allow(""),
      cam1: Joi.string().required("Kameraman wajib diisi"),
      cam2: Joi.string().allow(""),
      cam3: Joi.string().allow(""),
      switcher: Joi.string().allow(""),
      photo: Joi.string().allow(""),
      sound1: Joi.string().required("Soundman wajib diisi"),
      sound2: Joi.string().allow(""),
      sosmed: Joi.string().allow(null),
      late_person: Joi.array(),
      ir: Joi.string().required("Ibadah Raya wajib diisi"),
      id: Joi.string().base64().required(),
    });

    const result = schema.validate({
      ...req.body,
      ...req.params,
      ...req.query,
    });
    if (!isEmpty(result.error)) {
      return responseError(
        req,
        res,
        httpStatus.ERROR_MIDDLEWARE,
        result.error.message,
        null
      );
    }
    return next();
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

module.exports = { createAbsensi, updateAbsensi };
