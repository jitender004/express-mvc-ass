const express = require("express");
const router = express.Router();
const Evaluation = require("../models/evaluation.model");
const crudController = require("./crud.controller");

router.post((""), crudController(Evaluation).post);
router.get(("/:id"), crudController(Evaluation).getOne);
// router.get((""), crudController(Evaluation).getAll);
router.delete(("/:id"), crudController(Evaluation).delete);
router.patch(("/:id"), crudController(Evaluation).patch);


router.get("", async(req, res)=>{
    try{
        const eval = await Evaluation.find().populate({path : "Batch_id", populate:{path : "stud_id"} }).lean().exec();
        return res.send(eval);
    }catch(er){
        return res.status(500).send(er.message);
    }
})
module.exports = router;