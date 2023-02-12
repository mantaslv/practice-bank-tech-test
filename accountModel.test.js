const AccountModel = require('./accountModel');

describe('AccountModel', () => {
    it('returns 0 balance when new account is created', () => {
        const account = new AccountModel();
        expect(account.getBalance()).toEqual(0);
    });

    it('returns correct balance after a deposit is made', () => {
        const account = new AccountModel();
        account.deposit(1000.00);
        expect(account.getBalance()).toEqual(1000.00);
        account.deposit(2000.00);
        expect(account.getBalance()).toEqual(3000.00);
        account.deposit(13.29);
        expect(account.getBalance()).toEqual(3013.29);
    });
});