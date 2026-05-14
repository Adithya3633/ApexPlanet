class ExpenseTracker {
    constructor() {
        this.transactions = JSON.parse(localStorage.getItem('transactions')) || [];
        this.currency = localStorage.getItem('currency') || 'USD';
        this.init();
    }

    init() {
        this.form = document.getElementById('form');
        this.descriptionInput = document.getElementById('description');
        this.amountInput = document.getElementById('amount');
        this.currencySelect = document.getElementById('currency-select');
        this.transactionList = document.getElementById('transaction-list');
        this.balanceEl = document.getElementById('balance');
        this.incomeEl = document.getElementById('income');
        this.expenseEl = document.getElementById('expense');

        this.currencySelect.value = this.currency;
        this.currencySelect.addEventListener('change', this.changeCurrency.bind(this));
        this.form.addEventListener('submit', this.addTransaction.bind(this));
        this.updateDisplay();
    }

    addTransaction(e) {
        e.preventDefault();

        const description = this.descriptionInput.value.trim();
        const amount = parseFloat(this.amountInput.value);

        if (!description || isNaN(amount)) {
            alert('Please enter a valid description and amount');
            return;
        }

        const transaction = {
            id: Date.now(),
            description,
            amount
        };

        this.transactions.push(transaction);
        this.saveToLocalStorage();
        this.updateDisplay();
        this.clearForm();
    }

    deleteTransaction(id) {
        this.transactions = this.transactions.filter(transaction => transaction.id !== id);
        this.saveToLocalStorage();
        this.updateDisplay();
    }

    calculateBalance() {
        return this.transactions.reduce((total, transaction) => total + transaction.amount, 0);
    }

    calculateIncome() {
        return this.transactions
            .filter(transaction => transaction.amount > 0)
            .reduce((total, transaction) => total + transaction.amount, 0);
    }

    calculateExpense() {
        return this.transactions
            .filter(transaction => transaction.amount < 0)
            .reduce((total, transaction) => total + Math.abs(transaction.amount), 0);
    }

    changeCurrency() {
        this.currency = this.currencySelect.value;
        localStorage.setItem('currency', this.currency);
        this.updateDisplay();
    }

    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: this.currency
        }).format(amount);
    }

    createTransactionElement(transaction) {
        const li = document.createElement('li');
        li.className = `transaction-item ${transaction.amount > 0 ? 'plus' : 'minus'}`;

        const textDiv = document.createElement('div');
        textDiv.className = 'transaction-text';
        textDiv.textContent = transaction.description;

        const amountSpan = document.createElement('span');
        amountSpan.className = `transaction-amount ${transaction.amount > 0 ? 'plus' : 'minus'}`;
        amountSpan.textContent = this.formatCurrency(transaction.amount);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '×';
        deleteBtn.addEventListener('click', () => this.deleteTransaction(transaction.id));

        li.appendChild(textDiv);
        li.appendChild(amountSpan);
        li.appendChild(deleteBtn);

        return li;
    }

    updateDisplay() {
        const balance = this.calculateBalance();
        const income = this.calculateIncome();
        const expense = this.calculateExpense();

        this.balanceEl.textContent = this.formatCurrency(balance);
        this.incomeEl.textContent = this.formatCurrency(income);
        this.expenseEl.textContent = this.formatCurrency(expense);

        this.transactionList.innerHTML = '';
        this.transactions.forEach(transaction => {
            this.transactionList.appendChild(this.createTransactionElement(transaction));
        });
    }

    clearForm() {
        this.descriptionInput.value = '';
        this.amountInput.value = '';
        this.descriptionInput.focus();
    }

    saveToLocalStorage() {
        localStorage.setItem('transactions', JSON.stringify(this.transactions));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ExpenseTracker();
}); 
