const UserService = require('./../../app/services/UserService');

describe("Tests for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, 'bnl75', 'Diego');

        expect(user.username).toBe("bnl75");
        expect(user.name).toBe("Diego");
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined();
    });


    test("2. Get info from an user using the UserService", () => {
        const user = UserService.create(1, 'bnl75', 'Diego');
        const userInfoInList = UserService.getInfo(user);

        expect(userInfoInList[0]).toBe(1);
        expect(userInfoInList[1]).toBe("bnl75");
        expect(userInfoInList[2]).toBe("Diego");
        expect(userInfoInList[3]).toBe("Sin bio");
    });
});