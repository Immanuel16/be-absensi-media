const express = require("express");
const accountController = require("../../../controllers/account.controller");

const router = express.Router();

router.get("/total-pk", accountController.getCrewPk);
router.get("/", accountController.getInfoAccount);
router.put("/edit/bank-account", accountController.updateBankCrew);

module.exports = router;
