//importation model schema contact
const contact = require("../models/contacts");
const express = require("express");
const { Router } = require("express");

//initialisation express Router
const router = express.Router();

Router.post ("/add", async (req , res) =>{
    try {
        let newContact = new contact ({...req.body});
        let result = await newContact.save();
        res.send({result,msg : "sucsseful added"});
    } catch (error) {
        console.log(error);
    }
});
module.exports = router;