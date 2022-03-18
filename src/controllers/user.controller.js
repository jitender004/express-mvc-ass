const express = require("express");
const router = express.Router()
const crudController = require("./crud.controller");
const User = require("../models/user.models");

router.post("", crudController(User).post )
router.get("", crudController(User).getAll)
router.get("/:id", crudController(User).getOne);
router.patch("/:id", crudController(User).patch);
router.delete("/:id", crudController(User).delete);
module.exports = router;