const Contacts = require('../models/contact');

exports.getPhone = (req, res, next) => {

    Contacts.getAll()
        .then((result) => {
            res.render("home", { 
                pageTitle: "Home", 
                allContacts: result[0],
                path: req.path 
            });
        })
        .catch(err => next(err));
} 