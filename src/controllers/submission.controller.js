const express = require("express");
const router = express.Router();
const Submission = require("../models/submission.model");
const crudController = require("./crud.controller");
const { route } = require("./user.controller");


router.post((''),crudController(Submission).post);
router.get((''), crudController(Submission).getAll);
router.get(('/:id'), crudController(Submission).getOne);
router.patch(('/:id'), crudController(Submission).patch);
router.delete(('/:id'), crudController(Submission).delete);

module.exports = router;