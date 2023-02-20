import {api_log} from '../models';

export function insertLog(data) {
  return api_log.create(data);
}

export function nope() {}