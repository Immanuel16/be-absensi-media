const { v4 } = require("uuid");
const bcryptjs = require("bcryptjs");
const moment = require("moment");
const { base64Decrypt } = require("../utils/encryptor.util");

exports.registerCrewPayload = (params) => ({
  id: v4(),
  full_name: params.full_name,
  birth_date: params.birth_date,
  phone: params.phone,
  bank_id: params.bank_id,
  bank_acc_num: params.bank_acc_num,
  bank_acc_name: params.bank_acc_name,
  province: params.province,
  city: params.city,
  district: params.district,
  subdistrict: params.subdistrict,
  address: params.address,
  username: params.username,
  password: bcryptjs.hashSync(base64Decrypt(params.password), 10),
  kom: params.kom,
  hmc: params.hmc,
  orientasi: params.orientasi,
  baptis: params.baptis,
  email: params.email,
  status: 1,
  role: 0,
  createdAt: moment().toISOString(),
  updatedAt: moment().toISOString(),
});
