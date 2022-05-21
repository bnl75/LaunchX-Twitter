const UserService = require('./../../app/services/UserService');

class UserView {
    static createUser(payload) {
        if (payload === null) {
            const objectError = {error: "payload no existe"};
            return objectError;
        }
        else {
            for (const property in payload) {
                if (payload[property] === null) {
                    const objectError = {error: "necesitan tener un valor válido"};
                    return objectError;
                }
            } //for-in

            if (!payload.hasOwnProperty('id') || !payload.hasOwnProperty('username') || !payload.hasOwnProperty('name')) {
                const objectError = {error: "necesitan tener un valor válido"};
                return objectError;
            } //if !payload.hasOwnProperty
        }
    } //createUser
} //UserView

module.exports = UserView;