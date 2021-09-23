const { test } = require('jest-circus');
const uppercase = require('../pos-aula/uppercase.js');

it('MACACO, MACAAAAAACO! O coitado do macaco morreu!', (done) => {
    uppercase('macaco', (result) => {
        try {
        expect(result).not.toBe('macaco');
        expect(result).toBe('MACACO');
        done();
        } catch (error) {
        done(error);
        }
    });
});