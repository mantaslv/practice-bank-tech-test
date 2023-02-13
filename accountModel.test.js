const AccountModel = require('./accountModel');

describe('AccountModel', () => {
    it('returns 0 balance when new account is created', () => {
        const account = new AccountModel();
        expect(account.getBalance()).toEqual(0);
    });

    describe('deposit function: ', () => {
        it('returns correct balance after a deposit is made', () => {
            const account = new AccountModel();
            account.deposit(1000.00);
            expect(account.getBalance()).toEqual(1000.00);
            account.deposit(2000.00);
            expect(account.getBalance()).toEqual(3000.00);
            account.deposit(13.29);
            expect(account.getBalance()).toEqual(3013.29);
        });

        it('does not allow negative deposits to be made', () => {
            const account = new AccountModel();
            account.deposit(1000.00);
            expect(() => {account.deposit(-500.00)}).toThrow('ERROR: amount must be greater than zero');
        });

        it('does not allow deposits of smaller than a penny division', () => {
            const account = new AccountModel();
            expect(() => {account.deposit(0.005)}).toThrow('ERROR: amount must be in pounds and whole pence');
        });
    });

    describe('withdraw function: ', () => {
        it('returns correct balance after withdrawal is made', () => {
            const account = new AccountModel();
            account.deposit(3000.00);
            account.withdraw(500.00);
            expect(account.getBalance()).toEqual(2500.00);
            account.withdraw(0.01);
            expect(account.getBalance()).toEqual(2499.99);
        });

        it('does not allow negative withdrawals to be made', () => {
            const account = new AccountModel();
            account.deposit(1000.00);
            expect(() => {account.withdraw(-500.00)}).toThrow('ERROR: amount must be greater than zero');
        });
    });
});