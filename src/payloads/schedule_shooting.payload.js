const { v4 } = require("uuid");
const moment = require("moment");

const createScheduleShootingPayload = (params) => ({
  id: v4(),
  name: params.name,
  phone: params.phone,
  description: params.description,
  request_date: params.request_date,
  division: params.division,
  has_done: false,
  created_at: moment().toISOString(),
});

module.exports = { createScheduleShootingPayload };
