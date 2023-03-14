const express = require("express")

const {
    locationView,
    setLocation,
} = require("../controllers/locationController")

const {
    submitForm,
    formView
} = require("../controllers/formController")

const router = express.Router();

router.get("/form", formView)
router.post("/form", submitForm)

router.get("/location", locationView)
router.post("/location", setLocation)


module.exports = router