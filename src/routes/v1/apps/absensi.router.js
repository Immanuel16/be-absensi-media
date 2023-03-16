const express = require("express");
const absensiController = require("../../../controllers/absensi.controller");
const absensiMiddleware = require("../../../middlewares/absensi.middlewares");

const router = express.Router();

router.get('/', absensiController.getListAbsen);
router.post('/create', absensiMiddleware.createAbsensi, absensiController.createAbsen);
router.get('/:id/detail', absensiController.getDetailAbsen);
router.put('/:id/edit', absensiMiddleware.updateAbsensi , absensiController.updateAbsen);

module.exports = router;