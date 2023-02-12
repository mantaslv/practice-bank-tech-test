class AccountModel {
    constructor() {
        this.balance = 0;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw 'ERROR: Deposit made must be greater than zero';
        }
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

module.exports = AccountModel;