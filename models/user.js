var db = require('../db').getPromisePool();

module.exports = {
    async getUser(username) {
        const [rows, fields] = await db.query("SELECT * FROM users WHERE username = ?", [username])
        return rows;
    },

    async createUser() {

    }
}