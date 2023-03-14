const Location = require("../models/Location")

const locationView = (req, res) => {
    res.render("location")
}

const setLocation = (req, res) => {
    const {latitude, longitude} = req.body;
    const newLocation = new Location({latitude, longitude})
    newLocation.save().then((x) => console.log("")).catch(err => console.log(err))
}

module.exports = {
    locationView,
    setLocation
}