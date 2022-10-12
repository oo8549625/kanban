var db = require('../db').getPromisePool();
var crypto = require('crypto');

module.exports = {
    async getUser(username) {
        const [rows, fields] = await db.query("SELECT * FROM users WHERE username = ?", [username])
        return rows;
    },

    async createUser(username, email, password) {
        let salt = crypto.randomBytes(16).toString('hex');
        const [rows, fields] = await db.query(
            "INSERT INTO users (username, email, password, salt, hash) VALUES (?, ?, ?, ?, ?)",
            [username, email, password, salt, has])
        return rows;
    }
}