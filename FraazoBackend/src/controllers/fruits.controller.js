const express = require("express");
const fruits = require("../models/fruits.model");

const router = express.Router();

router.get("", async(req , res)=>{
    try {
        const user = await fruits.find().lean().exec();
        return res.status(200). send(user);
    } catch (error) {
        return res.status(500)
        .send({mgs : error.mgs});
        
    }
})

router.get("/:id", async (req, res) => {
    try {
        const Vegi = await fruits.findById(req.params.id);
        return res.status(200).send(Vegi);
    } catch (error) {
        return res
            .status(500)
            .send({ massage: error.massage });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const usrs = await fruits.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        return res.status(200).send(usrs);
    } catch (error) {
        return res
            .status(500)
            .send({ massage: error.massage });
    }
});



router.delete("/:id", async (req, res) => {
    try {
        const usrs = await fruits.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(usrs);
    } catch (error) {
        return res
            .status(500)
            .send({ massage: error.massage });
    }
});


module.exports = router;