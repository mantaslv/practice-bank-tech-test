const AccountModel = require('./accountModel');

describe('AccountModel', () => {
    it('returns 0 balance when new account is created', () => {
        const account = new AccountModel();
        expect(account.getBalance()).toEqual(0);
    });
});