const { v4 } = require("uuid");
const moment = require("moment");

const createNatalPayload = (params) => ({
  id: v4(),
  name: params.name,
  address: params.address,
  birth_date: params.birth_date,
  origin_church: params.originChurch,
  phone_number: params.phoneNumber,
  year: moment(moment().toISOString()).format("YYYY"),
  createdAt: moment().toISOString(),
});

const verifyParticipantsPayload = () => ({
  status: 1,
  updatedAt: moment().toISOString(),
});

module.exports = { createNatalPayload, verifyParticipantsPayload };
