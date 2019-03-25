const express = require("express");
const router = express.Router();

const phoneController = require("../controllers/phone");

router.get("/phonebook",phoneController.getAddPhone);
router.post("/phonebook",phoneController.PostSubmitPhone);
router.get("/edit/:id",phoneController.getEditPhone);
router.post("/edit/:id",phoneController.PostUpdatePhone);
router.get("/delete/:id",phoneController.getDeletebyId);



module.exports = router;