class AccountView {
    constructor(accountModel) {
        this.accountTransactions = accountModel.getTransactions();
    }
    
    printStatement() {
        const header = 'date || credit || debit || balance';
        const body = this.accountTransactions
            .map((el) => (
                [
                    el.date,
                    this.formatToTwoDP(el.credit),
                    this.formatToTwoDP(el.debit),
                    this.formatToTwoDP(el.balance)
                ]
                .join(' || ')
                .replace(/  +/g, ' ')
            ));

        body.push(header);
        return body.reverse().join('\n');
    }

    formatToTwoDP(number) {
        if (number === "") {
            return "";
        } else {
            return Number(number).toFixed(2);
        };
    }
}

module.exports = AccountView;