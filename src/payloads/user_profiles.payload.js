import {v4 as uuidv4} from 'uuid';
import bcryptjs from 'bcryptjs';
import { base64Decrypt } from "../utils/encryptor.util";
import moment from 'moment';

export const registerCrewPayload = params => (
  {
    id: uuidv4(),
    full_name: params.full_name,
    username: params.username,
    address: params.address,
    email: params.email,
    birth_date: params.birth_date,
    kom: params.kom,
    hmc: params.hmc,
    orientasi: params.orientasi,
    baptis: params.baptis,
    password: bcryptjs.hashSync(base64Decrypt(params.password), 10),
    bank_id: params.bank,
    status: 1,
    createdAt: moment().toISOString(),
    updatedAt: moment().toISOString(),
  }
);