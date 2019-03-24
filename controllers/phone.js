const Contacts = require('../models/contact');


exports.AddPhone = (req, res, next) => {
    res.render("phonebook", {pageTitle: "Phonebook", path: req.path });
}

exports.SubmitPhone = (req, res, next) => {
    const newContact = new Contacts(req.body.name, req.body.phone, req.body.email);
    newContact.save()
        .then(() => {
            res.redirect("/");
        })
        .catch((err) => next(err));
}

exports.EditPhone = (req, res, next) => {
    const contactId = req.params.id;
    Contacts.getById(contactId)
        .then(([rows, fields]) => {
            res.render("edit_phonebook", {pageTitle: "Edit Phonebook", path: req.path, details: rows[0]});
        })
        .catch(err => next(err));

}

exports.UpdatePhone = (req, res, next) => {
    Contacts.UpdateById(req.body.name,req.body.phone,req.body.email,req.params.id)
        .then(() => {
            res.redirect("/");
        })
        .catch((err) => next(err));
}

exports.DeletebyId = (req, res, next) => {
    const contactId = req.params.id;
    Contacts.DeleteById(contactId)
        .then(() => {
            res.redirect("/");
        })
        .catch(err => next(err));
} 