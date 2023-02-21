const {isEmpty} = require("lodash");
const {registerCrewPayload} = require("../payloads/register.payload");
const crewQueries = require("../queries/user_profiles.query");
const {responseError, responseSuccess} = require("../utils/response.util");
const {generateCreatedAttribute, generateModifiedAttribute} = require("../utils/userstamp.util");
const {httpStatus} = require("../variables/response.variable");

exports.registerCrew = async (req, res) => {
  try {
    const {username} = req.body;
    const data = {
      ...registerCrewPayload(req.body),
      ...generateCreatedAttribute(req),
      ...generateModifiedAttribute(req)
    };

    const user = await crewQueries.findAll({
      where: {
        username
      }
    });

    if(!isEmpty(user)) throw new Error('Username already exists');

    await crewQueries.create(data);

    return responseSuccess(req, res, httpStatus.ERROR_GENERAL, '', null);
  } catch (error) {
    return responseError(req, res, httpStatus.ERROR_GENERAL, error.message, null);
  }
}