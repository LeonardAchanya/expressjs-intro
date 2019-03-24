const db = require("../utils/database");

class Contact {
    constructor(full_name, phone,email) {
        this.full_name = full_name;
        this.phone = phone;
        this.email = email;
    }

    save() {
        return db.execute(
            "INSERT INTO contact (full_name , phone,email) VALUES (?, ?,?)",
            [this.full_name, this.phone, this.email]);
    }

    static getAll() {
        return db.execute("SELECT * FROM contact ORDER BY full_name");
    }

    static getById(id) {
        return db.execute("SELECT * FROM contact WHERE id=?", [id])
    }

    static UpdateById(full_name,phone,email,id) {
        return db.execute("UPDATE contact SET full_name = ?, phone = ?, email = ? WHERE id=?",[full_name,phone,email,id])
    }

    static DeleteById(id) {
        return db.execute("DELETE FROM contact WHERE id=?", [id])
    }
}

module.exports = Contact; 
