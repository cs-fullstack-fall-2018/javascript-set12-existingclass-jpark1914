class Account{

    constructor(accountName, accountBalance)
    {
        this.accountName = accountName;
        this.accountBalance = accountBalance;
    }

    withdrawal(amount)
    {
        this.accountBalance -= amount;
    }

    deposit(amount)
    {
        this.accountBalance += amount;
    }

    balance()
    {
        return this.accountBalance;
    }
}

function main() {

    var checking = new Account("Jordan's Checking", 100);
    checking.deposit(20);
    console.log(checking);

    var checking2 = new Account("Matt's Account", 1000);
    var checking3 = new Account("My account", 0);
    checking2.withdrawal(100);
    checking3.deposit(100);
    console.log(checking2);
    console.log(checking3);




}

main();