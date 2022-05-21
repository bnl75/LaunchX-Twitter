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


    test("3. Update  username", () => {
        const user = UserService.create(1, 'bnl75', 'Diego');
        UserService.updateUserUsername(user, 'diegobnl');

        expect(user.username).toBe('diegobnl');
    });


    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, 'bnl75_1', 'Diego');
        const user2 = UserService.create(2, 'bnl75_2', 'Diego');
        const user3 = UserService.create(3, 'bnl75_3', 'Diego');
        const usernames = UserService.getAllUsernames([user1, user2, user3]);

        expect(usernames).toContain("bnl75_1");
        expect(usernames).toContain("bnl75_2");
        expect(usernames).toContain("bnl75_3");
    });
});