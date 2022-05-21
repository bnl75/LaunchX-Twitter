const UserService = require('./../../app/services/UserService');

class UserView {
    static createUser(payload) {
        if (payload === null) {
            const objectError = {"error": "payload no existe"};
            return objectError;
        }
        // const user = UserService.create(id, username, name);
    } //createUser
} //UserView

module.exports = UserView;