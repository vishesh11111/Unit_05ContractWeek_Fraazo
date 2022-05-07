const express = require("express");
const vegitable = require("../models/vegitable.model");

const router = express.Router();

router.get("", async(req , res)=>{
    try {
        const user = await vegitable.find().lean().exec();
        return res.status(200). send(user);
    } catch (error) {
        return res.status(500)
        .send({mgs : error.mgs});
        
    }
})


router.get("/:id", async (req, res) => {
    try {
        const Vegi = await vegitable.findById(req.params.id);
        return res.status(200).send(Vegi);
    } catch (error) {
        return res
            .status(500)
            .send({ massage: error.massage });
    }
});



router.patch("/:id", async (req, res) => {
    try {
        const usrs = await vegitable.findByIdAndUpdate(req.params.id, req.body, {
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
        const usrs = await vegitable.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(usrs);
    } catch (error) {
        return res
            .status(500)
            .send({ massage: error.massage });
    }
});

module.exports = router;