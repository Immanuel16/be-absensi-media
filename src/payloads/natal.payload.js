const { v4 } = require("uuid");
const moment = require("moment");

const createNatalPayload = (params) => ({
  id: v4(),
  name: params.name,
  age: params.age,
  origin_church: params.originChurch,
  phone_number: params.phoneNumber,
  year: moment(moment().toISOString()).format("YYYY"),
  createdAt: moment().toISOString(),
});

module.exports = { createNatalPayload };
