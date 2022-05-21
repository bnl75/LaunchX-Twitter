const User = require("./../models/User");

class UserService {
    static create(id, username, name) {
        return new User(id, username, name, "Sin bio");
    } //create

    static getInfo(user) {
        const id       = user.getId;
        const username = user.getUsername;
        const name     = user.getName;
        const bio      = user.getBio;

        const userInfoList = [id, username, name, bio];

        return userInfoList;
    } //getInfo

    static updateUserUsername(user, newUsername) {
        user.setUsername = newUsername;
    } //updateUserUsername
} //UserService

module.exports = UserService;