const User = require('./../../app/models/User');

describe ("Unit Tests for User class", () => {
    test('Create an User object', () => {
        //Aquí se invoca el código que se va a usar en la app:
        const user = new User(1, 'bnl75', 'Diego', 'Bio');

        //Aquí se valida el resultado del código anterior:
            //Esta es una prueba que va a igualar el valor de la izquierda (el valor setteado) con el valor de la derecha (el valor esperado)
        expect(user.id).toBe(1);
        expect(user.username).toBe("bnl75");
        expect(user.name).toBe("Diego");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).not.toBeUndefined(); //Verifica que el valor no sea undefined
        expect(user.lastUpdated).not.toBeUndefined();
    });
});