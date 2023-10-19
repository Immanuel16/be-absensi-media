const express = require("express");
const absensiController = require("../../../controllers/absensi.controller");
const absensiMiddleware = require("../../../middlewares/absensi.middlewares");

const router = express.Router();

router.get("/", absensiController.getListAbsen);
router.get("/late-member", absensiController.getListAllLateMember);
router.get("/total-late-member", absensiController.getTotalLateCrew);
router.get("/reports", absensiController.getListAllAbsen);
router.post(
  "/create",
  absensiMiddleware.createAbsensi,
  absensiController.createAbsen
);
router.get("/:id/detail", absensiController.getDetailAbsen);
router.put(
  "/:id/edit",
  absensiMiddleware.updateAbsensi,
  absensiController.updateAbsen
);
router.delete("/:id/delete", absensiController.deleteAbsen);

module.exports = router;
