const AccountModel = require('./accountModel');
const AccountView = require('./accountView');

describe('AccountModel', () => {
	it('prints statement after processing some transactions', () => {
		const account = new AccountModel();
		account.deposit(1000.00);
		account.deposit(2000.00);
		account.withdraw(499.99);
		const accountView = new AccountView(account);

		const today = new Date().toLocaleDateString('en-GB');
		const expectedStatementOutput = [
			'date || credit || debit || balance',
			`${today} || || 499.99 || 2500.01`,
			`${today} || 2000.00 || || 3000.00`,
			`${today} || 1000.00 || || 1000.00`
		]
			.join('\n');

		expect(accountView.printStatement())
			.toBe(expectedStatementOutput);
	});
});