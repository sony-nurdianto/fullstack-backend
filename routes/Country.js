const express = require("express");
const router = express.Router();
const Country = require("../containers/Country");

router.post("/post", Country.create);

router.get("/get", Country.getData);
router.get("/get/:countryId",Country.getDatabyId)
router.delete("/delete/:countryId",Country.deleteById)
router.put("/edit/:countryId",Country.editById)

module.exports = router;
