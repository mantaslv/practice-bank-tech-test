# Practice Bank Tech Test

This app allows a user to make deposits and withdrawals to a bank account as well as printing a statement to show a history of transactions with data including date made, the amount (whether credit or debit) and a balance. Interaction of the app is conducted through the Node REPL.

## Installation and Dependencies

* Node is required to run this program.
* To install dependencies, run `npm install`.
* To run tests and see test coverage, run `npm test`.

## Running the App

The REPL environment can be started by running `node` in the command prompt/terminal.

Try the following commands to test out the functionality:

```
const AccountModel = require('./accountModel');
const AccountView = require('./accountView');

const account = new AccountModel();
account.deposit(1000.00);
account.deposit(2000.00);
account.withdraw(499.99);

const accountView = new AccountView(account);
accountView.printStatement();
```



## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```