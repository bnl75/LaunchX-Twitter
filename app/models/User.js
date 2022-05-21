class User {
    constructor(id, username, name, bio) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = new Date();
        this.lastUpdated = new Date();
    }

    get getId() {
        return this.id;
    }

    get getUsername() {
        return this.username;
    }

    get getName() {
        return this.name;
    }

    get getBio() {
        return this.bio;
    }

    get getDateCreated() {
        return this.dateCreated;
    }

    get getLastUpdated() {
        return this.lastUpdated;
    }

    set setId(newId) {
        this.id = newId;
    }

    set setUsername(newUsername) {
        this.username = newUsername;
    }
    
    set setName(newName) {
        this.name = newName;
    }

    set setBio(newBio) {
        this.bio = newBio;
    }
} //User

module.exports = User;