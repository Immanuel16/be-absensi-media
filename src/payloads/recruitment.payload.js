const { v4 } = require("uuid");
const moment = require("moment");

const createNewCandidatePayload = (params) => ({
  id: v4(),
  name: params.name,
  phone: params.phone,
  job: params.job,
  age: params.age,
  role: params.role,
  status: 0,
  created_at: moment().toISOString(),
  updated_at: moment().toISOString(),
});

module.exports = { createNewCandidatePayload };
