import Joi from "joi";
import { isEmpty } from "lodash";
import { responseError } from "../utils/response.util";
import { httpStatus } from "../variables/response.variable";

export const authUser = async (req, res, next) => {
  try {
    const schema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });
    const result = schema.validate({
      ...req.body,
      ...req.params,
      ...req.query,
    });
    if (!isEmpty(result.error))
      return responseError(
        req,
        res,
        httpStatus.ERROR_MIDDLEWARE,
        result.error.message,
        null
      );
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
