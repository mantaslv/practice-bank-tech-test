const AccountModel = require('./accountModel');

describe('AccountModel', () => {
    let account;

    beforeEach(() => {
        account = new AccountModel();
    });

    it('returns 0 balance when new account is created', () => {
        expect(account.getBalance()).toEqual(0);
    });

    describe('deposit function: ', () => {
        it('returns correct balance after a deposit is made', () => {
            account.deposit(1000.00);
            expect(account.getBalance()).toEqual(1000.00);
            account.deposit(2000.00);
            expect(account.getBalance()).toEqual(3000.00);
            account.deposit(13.29);
            expect(account.getBalance()).toEqual(3013.29);
        });

        it('does not allow negative deposits to be made', () => {
            account.deposit(1000.00);
            expect(() => {account.deposit(-500.00)}).toThrow('ERROR: amount must be greater than zero');
        });

        it('does not allow deposits of smaller than a penny division', () => {
            expect(() => {account.deposit(0.005)}).toThrow('ERROR: amount must be in pounds and whole pence');
        });
    });

    describe('withdraw function: ', () => {
        it('returns correct balance after withdrawal is made', () => {
            account.deposit(3000.00);
            account.withdraw(500.00);
            expect(account.getBalance()).toEqual(2500.00);
            account.withdraw(0.01);
            expect(account.getBalance()).toEqual(2499.99);
        });

        it('does not allow negative withdrawals to be made', () => {
            account.deposit(1000.00);
            expect(() => {account.withdraw(-500.00)}).toThrow('ERROR: amount must be greater than zero');
        });

        it('does not allow withrawals of smaller than a penny division', () => {
            account.deposit(1000.00);
            expect(() => {account.withdraw(0.005)}).toThrow('ERROR: amount must be in pounds and whole pence');
        });
    });

    describe('gets transactions', () => {
        it('records date', () => {
            jest.useFakeTimers();
            jest.setSystemTime(new Date("2020-03-01"));
            account.deposit(1000.00);
            expect(account.getTransactions().map((e) => e.date)).toEqual(['01/03/2020']);
            jest.setSystemTime(new Date("2020-04-06"));
            account.deposit(2000.00);
            expect(account.getTransactions().map((e) => e.date)).toEqual(['01/03/2020', '06/04/2020']);
            jest.setSystemTime(new Date("2020-05-23"));
            account.withdraw(500.00);
            expect(account.getTransactions().map((e) => e.date)).toEqual(['01/03/2020', '06/04/2020', '23/05/2020']);
            jest.useRealTimers();
        });

        it('records credit and debit amounts in correct columns', () => {
            account.deposit(1000.00);
            expect(account.getTransactions().map((e) => e.credit)).toEqual([1000.00]);
            account.deposit(2000.00);
            expect(account.getTransactions().map((e) => e.credit)).toEqual([1000.00, 2000.00]);
            account.withdraw(500.00);
            expect(account.getTransactions().map((e) => e.credit)).toEqual([1000.00, 2000.00, ""]);
            account.withdraw(11.11);
            expect(account.getTransactions().map((e) => e.debit)).toEqual(["", "", 500.00, 11.11]);
        });

        it('records correct balance total', () => {
            account.deposit(1000.00);
            account.deposit(2000.00);
            account.withdraw(500.00);
            account.withdraw(11.11);
            expect(account.getTransactions().map((e) => e.balance)).toEqual([1000.00, 3000.00, 2500.00, 2488.89]);
        });
    });
});