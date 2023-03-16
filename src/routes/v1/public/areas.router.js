const express = require('express');
const areaController = require("../../../controllers/areas.controller");

const router = express.Router();

router.get('/provinces', areaController.getListProvince);
router.get(`/:id/city`, areaController.getListCity);
router.get(`/:id/districts`, areaController.getListDistrict);
router.get(`/:id/subdistricts`, areaController.getListSubDistrict);

module.exports = router;