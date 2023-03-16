const express = require("express");
const historyCashController = require("../../../controllers/riwayat_kas.controller");

const router = express.Router();

router.get('/', historyCashController.getListHistoryCash);
router.post('/create', historyCashController.createHistoryCash);
router.delete('/:id/delete', historyCashController.deleteHistoryCash);

module.exports = router;