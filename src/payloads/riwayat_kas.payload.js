const { v4 } = require("uuid");
const moment = require("moment");

const createHistoryCashPayload = (params) => ({
  id: v4(),
  tanggal: params.tanggal,
  item: params.item,
  total_item: params.total_item,
  price: params.price,
  totals: 0,
  type: params.type,
  attachment: params.attachment,
  createdAt: moment().toISOString(),
});

const updateHistoryCashPayload = (params) => ({
  tanggal: params.tanggal,
  item: params.item,
  total_item: params.total_item,
  price: params.price,
  totals: 0,
  type: params.type,
  attachment: params.attachment,
  updatedAt: moment().toISOString(),
});

module.exports = { createHistoryCashPayload, updateHistoryCashPayload };
