const router = require("express").Routes();

const adminControlller = require("../controllers/car");

router.get("/allUsers", adminControlller.getUser);

router.get("/")

module.exports = routes;