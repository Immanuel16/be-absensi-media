const Joi = require("joi");
const { isEmpty } = require("lodash");
const { responseError } = require("../utils/response.util");
const { httpStatus } = require("../variables/response.variable");

const createAbsensi = async (req, res, next) => {
  try {
    const schema = Joi.object({
      tanggal: Joi.string().required("Tanggal wajib diisi"),
      kom1: Joi.string().required("Operator komputer 1 wajib diisi"),
      kom2: Joi.string().optional(),
      lighting: Joi.string().optional(),
      cam1: Joi.string().required("Kameraman wajib diisi"),
      cam2: Joi.string().optional(),
      cam3: Joi.string().optional(),
      switcher: Joi.string().optional(),
      photo: Joi.string().optional(),
      sound1: Joi.string().optional(),
      sound2: Joi.string().optional(),
      ir: Joi.string().optional(),
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
      kom2: Joi.string().optional(),
      lighting: Joi.string().optional(),
      cam1: Joi.string().required("Kameraman wajib diisi"),
      cam2: Joi.string().optional(),
      cam3: Joi.string().optional(),
      switcher: Joi.string().optional(),
      photo: Joi.string().optional(),
      sound1: Joi.string().optional(),
      sound2: Joi.string().optional(),
      ir: Joi.string().optional(),
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
