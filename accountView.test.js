const AccountView = require('./accountView');
const AccountModel = require('./accountModel');

jest.mock('./accountModel');

describe(AccountView, () => {
    beforeEach(() => {
        AccountModel.mockClear();
    });

    it('prints formatted statement of one deposit', () => {
        const mockAccountModel = new AccountModel();

        mockAccountModel.getTransactions.mockImplementation(() => 
            [
                { date: '10/01/2023', credit: 1000, debit: null, balance: 1000 }
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
                { date: '14/01/2023', credit: null, debit: 500, balance: 2500 }
            ]
        );  // 14/01/2023 || || 500.00 || 2500.00

        const accountView = new AccountView(mockAccountModel);
        expect(accountView.printStatement())
            .toBe('date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00');
    });
});