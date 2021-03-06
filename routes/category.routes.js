//server side: need to register the route in app.js 'app.use...'
const express = require('express');
const router = express.Router();
const Category = require("../models/Category.model");
const App = require("../models/App.model");
const User = require("../models/User.model");
const ensureLogin = require('connect-ensure-login');

router.get('/', (req, res) => {
    
    Category.find()
     .then(categories => {
         res.status(200).json(categories);
     })
    .catch(err => {
        res.json(err);
    })

});
module.exports = router;