const AccountModel = require('./accountModel');
const AccountView = require('./accountView');

const account = new AccountModel();
account.deposit(1000.00);
account.deposit(2000.00);
account.withdraw(499.99);

const accountView = new AccountView(account);
accountView.printStatement();