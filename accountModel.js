class AccountModel {
    constructor() {
        this.balance = 0;
        this.transactions = [];
    }

    getTransactions() {
        return this.transactions;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        this.throwErrorIfNegative(amount);
        this.throwErrorIfMoreThanTwoDP(amount);

        this.balance += amount;

        this.recordTransaction('credit', amount);
    }

    withdraw(amount) {
        this.throwErrorIfNegative(amount);
        this.throwErrorIfMoreThanTwoDP(amount);

        this.balance -= amount;

        this.recordTransaction('debit', amount);
    }

    recordTransaction(type, amount) {
        let credit = "";
        let debit = "";
        
        if (type === 'credit') credit = amount;
        if (type === 'debit') debit = amount;

        const transaction = {
            date: new Date().toLocaleDateString('en-GB'),
            credit: credit,
            debit: debit,
            balance: this.balance
        };
        this.transactions.push(transaction);
    }

    throwErrorIfNegative(amount) {
        if (amount <= 0) {
            throw 'ERROR: amount must be greater than zero';
        }
    }

    throwErrorIfMoreThanTwoDP(amount) {
        if ((amount * 100).toString().split('.').length > 1) {
            throw 'ERROR: amount must be in pounds and whole pence'
        }
    }
}

module.exports = AccountModel;