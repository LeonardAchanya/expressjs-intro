const express = require("express");
const router = express.Router();

const phoneController = require("../controllers/phone");

router.get("/phonebook",phoneController.AddPhone);
router.post("/phonebook",phoneController.SubmitPhone);
router.get("/edit/:id",phoneController.EditPhone);
router.post("/edit/:id",phoneController.UpdatePhone);
router.get("/delete/:id",phoneController.DeletebyId);



module.exports = router;