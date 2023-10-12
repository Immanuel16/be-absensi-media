const { v4 } = require("uuid");
const moment = require("moment");

const createAbsensiPayload = (params, user) => ({
  id: v4(),
  tanggal: params.tanggal,
  ir: params.ir,
  kom1: params.kom1,
  kom2: params.kom2,
  lighting: params.lighting,
  cam1: params.cam1,
  cam2: params.cam2,
  cam3: params.cam3,
  switcher: params.switcher,
  photo: params.photo,
  sound1: params.sound1,
  sound2: params.sound2,
  sosmed: params.sosmed,
  late_person: params.late_person,
  created_by: user,
  createdAt: moment().toISOString(),
  updatedAt: moment().toISOString(),
});

const updateAbsensiPayload = (params, user) => ({
  tanggal: params.tanggal,
  ir: params.ir,
  kom1: params.kom1,
  kom2: params.kom2,
  lighting: params.lighting,
  cam1: params.cam1,
  cam2: params.cam2,
  cam3: params.cam3,
  switcher: params.switcher,
  photo: params.photo,
  sound1: params.sound1,
  sound2: params.sound2,
  sosmed: params.sosmed,
  late_person: params.late_person,
  updated_by: user,
  updatedAt: moment().toISOString(),
});

module.exports = { createAbsensiPayload, updateAbsensiPayload };
