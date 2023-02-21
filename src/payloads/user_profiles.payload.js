const {v4} = require("uuid");
const bcryptjs = require("bcryptjs");
const moment = require("moment");
const { base64Decrypt } = require("../utils/encryptor.util");

exports.registerCrewPayload = params => (
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