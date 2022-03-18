const express = require("express");
const router = express.Router();
const Batch = require("../models/batch.model");
const crudController = require("../controllers/crud.controller");

router.post((""), crudController(Batch).post);
// router.get((""), crudController(Batch).getAll);
router.get(("/:id"), crudController(Batch).getOne);
router.patch("/:id", crudController(Batch).patch);
router.delete("/:id", crudController(Batch).delete);

router.get("", async (req, res) => {
    try {
        const eval = await Batch.find().populate({ path: "stud_id" }).lean().exec();
        console.log("found")
        return res.send(eval);
    } catch (er) {
        return res.status(500).send(er.message);
    }
})

module.exports = router