const AccountView = require('./accountView');
const AccountModel = require('./accountModel');

jest.mock('./accountModel');

describe('AccountView unit tests', () => {
	beforeEach(() => {
		AccountModel.mockClear();
	});

	it('prints formatted statement of one deposit', () => {
		const mockAccountModel = new AccountModel();

		mockAccountModel.getTransactions.mockImplementation(() => 
			[
				{ date: '10/01/2023', credit: 1000, debit: '', balance: 1000 }
			]
		);

		const accountView = new AccountView(mockAccountModel);
		expect(accountView.printStatement())
			.toBe('date || credit || debit || balance\n10/01/2023 || 1000.00 || || 1000.00');
	});

	it('prints formatted statement of one withdrawal', () => {
		const mockAccountModel = new AccountModel();

		mockAccountModel.getTransactions.mockImplementation(() => 
			[
				{ date: '14/01/2023', credit: '', debit: 500, balance: 2500 }
			]
		);

		const accountView = new AccountView(mockAccountModel);
		expect(accountView.printStatement())
			.toBe('date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00');
	});

	it('prints formatted statement of multiple varied transactions', () => {
		const mockAccountModel = new AccountModel();

		mockAccountModel.getTransactions.mockImplementation(() => 
			[
				{ date: '10/01/2023', credit: 1000, debit: '', balance: 1000 },
				{ date: '13/01/2023', credit: 2000, debit: '', balance: 3000 },
				{ date: '14/01/2023', credit: '', debit: 500, balance: 2500 }
			]
		);

		const accountView = new AccountView(mockAccountModel);
		const expectedStatementOutput = [
			'date || credit || debit || balance',
			'14/01/2023 || || 500.00 || 2500.00',
			'13/01/2023 || 2000.00 || || 3000.00',
			'10/01/2023 || 1000.00 || || 1000.00'
		]
			.join('\n');

		expect(accountView.printStatement())
			.toBe(expectedStatementOutput);
	});

	it('prints formatted statement of multiple varied transactions with decimals', () => {
		const mockAccountModel = new AccountModel();

		mockAccountModel.getTransactions.mockImplementation(() => 
			[
				{ date: '10/01/2023', credit: 23.84, debit: '', balance: 23.84 },
				{ date: '13/01/2023', credit: 63.92, debit: '', balance: 87.76 },
				{ date: '14/01/2023', credit: '', debit: 34.82, balance: 52.94 }
			]
		);

		const accountView = new AccountView(mockAccountModel);
		const expectedStatementOutput = [
			'date || credit || debit || balance',
			'14/01/2023 || || 34.82 || 52.94',
			'13/01/2023 || 63.92 || || 87.76',
			'10/01/2023 || 23.84 || || 23.84'
		]
			.join('\n');

		expect(accountView.printStatement())
			.toBe(expectedStatementOutput);
	});
});