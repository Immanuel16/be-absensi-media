const { v4 } = require("uuid");
const moment = require("moment");

const createRsvpPayload = (params) => ({
  id: v4(),
  name: params.name,
  join: params.join,
  reason: params.reason,
  created_at: moment().toISOString(),
});

module.exports = { createRsvpPayload };
