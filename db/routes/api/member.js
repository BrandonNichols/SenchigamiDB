const express = require("express");
const router = express.Router();
const memberController = require("../../../controller/member");

router.get("/", memberController.listMemberService);

module.exports = router;
