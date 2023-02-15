const AccountView = require('./accountView');
const AccountModel = require('./accountModel');

jest.mock('./accountModel');

describe(AccountView, () => {
    beforeEach(() => {
        AccountModel.mockClear();
    });

    it('prints formatted statement of one transaction', () => {
        const mockAccountModel = new AccountModel();

        mockAccountModel.getTransactions.mockImplementation(() => 
            [
                { date: '10/01/2023', credit: 1000, debit: "", balance: 1000 }
            ]
        );

        // console.log(mockAccountModel.getTransactions());
        const accountView = new AccountView(mockAccountModel);
        expect(accountView.printStatement())
            .toBe('date || credit || debit || balance\n10/01/2023 || 1000.00 || || 1000.00');
    });
});