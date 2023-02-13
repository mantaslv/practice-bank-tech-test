class AccountModel {
    constructor() {
        this.balance = 0;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        this.throwErrorIfNegative(amount);

        if ((amount * 100).toString().split('.').length > 1) {
            throw 'ERROR: amount must be in pounds and whole pence'
        }

        this.balance += amount;
    }

    withdraw(amount) {
        this.throwErrorIfNegative(amount);
        this.balance -= amount;
    }

    throwErrorIfNegative(amount) {
        if (amount <= 0) {
            throw 'ERROR: amount must be greater than zero';
        }
    }
}

module.exports = AccountModel;