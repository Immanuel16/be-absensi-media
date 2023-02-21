const Joi = require("joi");
const {isEmpty} = require("lodash");
const {responseError} = require("../utils/response.util");
const {httpStatus} = require("../variables/response.variable");

exports.registerCrew = (req, res, next) => {
  try {
    const schema = Joi.object({
      full_name: Joi.string().min(3).required(),
      username: Joi.string().min(2).max(15).required(),
      address: Joi.string().min(5).required(),
      email: Joi.string().email().required(),
      phone: Joi.string().min(8).max(14).required(),
      birth_date: Joi.date().required(),
      password: Joi.string().base64().required(),
      bank_id: Joi.string().required(),
      kom:Joi.number().required(),
      hmc: Joi.number().required(),
      baptis: Joi.number().required(),
      orientasi: Joi.number().required(),
      status: Joi.number().required()
    })

    const result = schema.validate({...req.body, ...req.params, ...req.query});
    if(!isEmpty(result.error)){
      return responseError(req, res, httpStatus.ERROR_MIDDLEWARE, result.error.message, null)
    }
    return next();
  } catch (error) {
    return responseError(req, res, httpStatus.ERROR_GENERAL, error.message, null);
  }
}