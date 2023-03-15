const Location = require("../models/Location")

const locationView = (req, res) => {
    res.render("location")
}

const setLocation = (req, res) => {
    const {latitude, longitude, accuracy} = req.body;
    console.log(req)
    console.log(latitude, longitude, accuracy)
    const newLocation = new Location({latitude, longitude, accuracy})
    newLocation.save().then((x) => console.log("")).catch(err => console.log(err))
    res.json({"message": "received"})
}

module.exports = {
    locationView,
    setLocation
}