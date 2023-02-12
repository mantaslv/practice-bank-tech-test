class AccountModel {
    constructor() {
        this.balance = 0;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw 'ERROR: amount must be greater than zero';
        }
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw 'ERROR: amount must be greater than zero';
        }
        this.balance -= amount;
    }
}

module.exports = AccountModel;