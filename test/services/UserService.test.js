const UserService = require('./../../app/services/UserService');

describe("Tests for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, 'bnl75', 'Diego');

        expect(user.username).toBe("bnl75");
        expect(user.name).toBe("Diego");
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined();
    });
});