
const express = require("express");
const Cart = require("../models/cart.model");

const router = express.Router();

router.get("", async(req , res)=>{
    try {
        const user = await Cart.find();
        return res.status(200). send(user);
    } catch (error) {
        return res.status(500)
        .send({mgs : error.mgs});
        
    }
});

router.post("", async (req, res) => {
    try {
        const usrs = await Cart.create(req.body);
        return res.status(200).send(usrs);
    } catch (error) {
        return res
            .status(500)
            .send({ massage: error.massage });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const usrs = await Cart.findByIdAndUpdate(req.params.id, req.body, {
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
        const usrs = await Cart.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(usrs);
    } catch (error) {
        return res
            .status(500)
            .send({ massage: error.massage });
    }
});



module.exports = router;