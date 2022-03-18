const express = require("express");
const router = express.Router();
const Student = require("../models/student.model")
const crudController = require("./crud.controller");

router.post("", crudController(Student).post)
// router.get("", crudController(Student).getAll)
router.get("/:id", crudController(Student).getOne)
router.patch("/:id", crudController(Student).patch)
router.delete("/:id", crudController(Student).delete)

router.get("", async(req, res)=>{
    try{
        const marks = await Student.find().sort({marks : -1}).limit(1).lean().exec();
        return res.send(marks);
    }catch(er){
        return res.status(500).send(er.message);
    }
})

module.exports = router;
