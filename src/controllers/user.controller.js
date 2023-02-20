import { isEmpty } from 'lodash';
import { registerCrewPayload } from '../payloads/register.payload';
import * as crewQueries from '../queries/user_profiles.query';
import { responseError, responseSuccess } from '../utils/response.util';
import { generateCreatedAttribute, generateModifiedAttribute } from '../utils/userstamp.util';
import { httpStatus } from '../variables/response.variable';

export const registerCrew = async (req, res) => {
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