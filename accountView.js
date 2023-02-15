class AccountView {
    constructor(accountModel) {
        this.accountTransactions = accountModel.getTransactions();
    }

    // .toBe('date || credit || debit || balance\n10/01/2023 || 1000.00 || || 1000.00');

    printStatement() {
        const header = 'date || credit || debit || balance';

        console.log(this.accountTransactions);
        
        const body = this.accountTransactions
            .map((el) => (
                [
                    el.date,
                    el.credit === null ? "" : el.credit.toFixed(2),
                    el.debit === null ? "" : el.debit.toFixed(2), 
                    el.balance.toFixed(2)
                ]
                .join(' || ')
                .replace(/  +/g, ' ')
            ));

        console.log(body);
        console.log(header);

        body.push(header);

        return body.reverse().join('\n');
    }
}

module.exports = AccountView;