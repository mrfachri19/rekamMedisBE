const express = require("express");

const Router = express.Router();
const pasienRoutes = require("./src/modules/pasien/pasienRoutes");
const appointmentRoutes = require("./src/modules/appointment/appointmentRoutes");
const dokterRoutes = require("./src/modules/dokter/dokterRoutes");
const authRoutes  = require("./src/modules/auth/authRoutes");
const authPasienRoutes  = require("./src/modules/authPasien/authPasienRoutes");
const obatRoutes  = require("./src/modules/obat/obatRoutes");
const preceptionRoutes  = require("./src/modules/preception/preceptionRoutes");


// Router.use("/hello", helloRoutes);
Router.use("/pasien", pasienRoutes);
Router.use("/appointment", appointmentRoutes);
Router.use("/dokter", dokterRoutes);
Router.use("/auth", authRoutes);
Router.use("/authpasien", authPasienRoutes);
Router.use("/obat", obatRoutes);
Router.use("/preception", preceptionRoutes);

module.exports = Router;
