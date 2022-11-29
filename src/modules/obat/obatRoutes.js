const express = require("express");

const Router = express.Router();

const obatController = require("./obatController");
//= ================================================================

//= ===================================================================

Router.post("/addObat", obatController.postObat);
Router.get("/dataObat", obatController.getAllObat);



module.exports = Router;
