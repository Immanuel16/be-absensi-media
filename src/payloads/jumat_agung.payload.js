const { v4 } = require("uuid");
const moment = require("moment");

const createJumatAgungPayload = (params) => ({
  id: v4(),
  name: params.name,
  phone_number: params.phoneNumber,
  type: 1,
  ir: param.ibadahRaya,
  year: moment(moment().toISOString()).format("YYYY"),
  createdAt: moment().toISOString(),
});

const verifyParticipantsPayload = () => ({
  status: 1,
  updatedAt: moment().toISOString(),
});

module.exports = { createJumatAgungPayload, verifyParticipantsPayload };
