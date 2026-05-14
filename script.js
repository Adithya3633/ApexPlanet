// Transaction categories configuration
const DEFAULT_CATEGORIES = {
    income: [
        { id: 'salary', name: '💼 Salary', type: 'income' },
        { id: 'freelance', name: '🎯 Freelance', type: 'income' },
        { id: 'investment', name: '📈 Investment', type: 'income' },
        { id: 'bonus', name: '🎁 Bonus', type: 'income' },
        { id: 'other-income', name: '💵 Other Income', type: 'income' }
    ],
    expense: [
        { id: 'food', name: '🍔 Food & Dining', type: 'expense' },
        { id: 'transport', name: '🚗 Transport', type: 'expense' },
        { id: 'utilities', name: '💡 Utilities', type: 'expense' },
        { id: 'entertainment', name: '🎮 Entertainment', type: 'expense' },
        { id: 'shopping', name: '🛍️ Shopping', type: 'expense' },
        { id: 'health', name: '🏥 Health & Medical', type: 'expense' },
        { id: 'education', name: '📚 Education', type: 'expense' },
        { id: 'bills', name: '📄 Bills & Subscriptions', type: 'expense' },
        { id: 'other-expense', name: '❌ Other Expense', type: 'expense' }
    ]
};

class ExpenseTracker {
    constructor() {
        this.transactions = JSON.parse(localStorage.getItem('transactions')) || [];
        this.customCategories = JSON.parse(localStorage.getItem('customCategories')) || [];
        this.currency = localStorage.getItem('currency') || 'USD';
        this.filterType = 'all';
        this.sortBy = 'newest';
        this.searchTerm = '';
        this.init();
    }

    init() {
        // DOM Elements
        this.form = document.getElementById('form');
        this.descriptionInput = document.getElementById('description');
        this.amountInput = document.getElementById('amount');
        this.categorySelect = document.getElementById('category');
        this.dateInput = document.getElementById('date');
        this.currencySelect = document.getElementById('currency-select');
        this.transactionList = document.getElementById('transaction-list');
        this.balanceEl = document.getElementById('balance');
        this.incomeEl = document.getElementById('income');
        this.expenseEl = document.getElementById('expense');
        this.ratioEl = document.getElementById('ratio');
        this.filterTypeSelect = document.getElementById('filter-type');
        this.sortBySelect = document.getElementById('sort-by');
        this.searchInput = document.getElementById('search-input');
        this.manualIncomeInput = document.getElementById('manual-income-input');
        this.transactionCountEl = document.getElementById('transaction-count');
        this.emptyState = document.getElementById('empty-state');
        this.clearAllBtn = document.getElementById('clear-all-btn');
        this.addCategoryBtn = document.getElementById('add-category-btn');
        this.categoryModal = document.getElementById('category-modal');
        this.categoryNameInput = document.getElementById('category-name');
        this.categoryEmojiInput = document.getElementById('category-emoji');
        this.categoryTypeSelect = document.getElementById('category-type');
        this.saveCategoryBtn = document.getElementById('save-category');
        this.cancelModalBtn = document.getElementById('cancel-modal');
        this.closeModalBtn = document.getElementById('close-modal');

        const savedManualIncome = localStorage.getItem('manualIncome');
        this.manualIncome = 0;
        if (savedManualIncome !== null) {
            const parsed = parseFloat(savedManualIncome);
            if (!isNaN(parsed) && parsed >= 0) {
                this.manualIncome = parsed;
            }
        }

        this.manualIncomeInput.value = this.manualIncome > 0 ? this.manualIncome.toFixed(2) : '';

        // Set today's date as default
        this.dateInput.valueAsDate = new Date();

        // Initialize categories
        this.populateCategories();

        // Event Listeners - Form
        this.form.addEventListener('submit', this.addTransaction.bind(this));
        
        // Event Listeners - Currency
        this.currencySelect.addEventListener('change', this.changeCurrency.bind(this));
        
        // Event Listeners - Filters
        this.filterTypeSelect.addEventListener('change', (e) => {
            this.filterType = e.target.value;
            this.render();
        });
        
        this.sortBySelect.addEventListener('change', (e) => {
            this.sortBy = e.target.value;
            this.render();
        });
        
        this.searchInput.addEventListener('input', (e) => {
            this.searchTerm = e.target.value.toLowerCase();
            this.render();
        });

        this.manualIncomeInput.addEventListener('input', this.handleManualIncomeChange.bind(this));
        
        // Event Listeners - Clear All
        this.clearAllBtn.addEventListener('click', this.clearAllData.bind(this));
        
        // Event Listeners - Custom Category Modal
        this.addCategoryBtn.addEventListener('click', () => this.openCategoryModal());
        this.closeModalBtn.addEventListener('click', () => this.closeCategoryModal());
        this.cancelModalBtn.addEventListener('click', () => this.closeCategoryModal());
        this.saveCategoryBtn.addEventListener('click', () => this.saveCustomCategory());
        
        // Close modal on outside click
        this.categoryModal.addEventListener('click', (e) => {
            if (e.target === this.categoryModal) {
                this.closeCategoryModal();
            }
        });

        this.currencySelect.value = this.currency;
        this.render();
    }

    getAllCategories() {
        return {
            income: [...DEFAULT_CATEGORIES.income, ...this.customCategories.filter(c => c.type === 'income')],
            expense: [...DEFAULT_CATEGORIES.expense, ...this.customCategories.filter(c => c.type === 'expense')]
        };
    }

    populateCategories() {
        const allCats = this.getAllCategories();
        this.categorySelect.innerHTML = '<option value="">Select Category</option>';
        
        const incomeGroup = document.createElement('optgroup');
        incomeGroup.label = 'Income';
        allCats.income.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat.id;
            option.textContent = cat.name;
            option.dataset.type = 'income';
            incomeGroup.appendChild(option);
        });
        this.categorySelect.appendChild(incomeGroup);

        const expenseGroup = document.createElement('optgroup');
        expenseGroup.label = 'Expenses';
        allCats.expense.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat.id;
            option.textContent = cat.name;
            option.dataset.type = 'expense';
            expenseGroup.appendChild(option);
        });
        this.categorySelect.appendChild(expenseGroup);
    }

    openCategoryModal() {
        this.categoryModal.classList.remove('hidden');
        this.categoryNameInput.value = '';
        this.categoryEmojiInput.value = '';
        this.categoryTypeSelect.value = '';
        this.categoryNameInput.focus();
    }

    closeCategoryModal() {
        this.categoryModal.classList.add('hidden');
    }

    saveCustomCategory() {
        const name = this.categoryNameInput.value.trim();
        const emoji = this.categoryEmojiInput.value.trim();
        const type = this.categoryTypeSelect.value;

        if (!name || !emoji || !type) {
            this.showToast('Please fill all fields', 'error');
            return;
        }

        const newCategory = {
            id: `custom-${Date.now()}`,
            name: `${emoji} ${name}`,
            type: type
        };

        this.customCategories.push(newCategory);
        localStorage.setItem('customCategories', JSON.stringify(this.customCategories));
        this.populateCategories();
        this.showToast('Category added successfully!', 'success');
        this.closeCategoryModal();
    }

    getCategoryInfo(categoryId) {
        const allCats = this.getAllCategories();
        const allArray = [...allCats.income, ...allCats.expense];
        return allArray.find(cat => cat.id === categoryId);
    }

    addTransaction(e) {
        e.preventDefault();

        const description = this.descriptionInput.value.trim();
        const categoryId = this.categorySelect.value;
        const amountStr = this.amountInput.value;
        const date = this.dateInput.value;

        if (!description || !categoryId || !amountStr || !date) {
            this.showToast('Please fill all fields', 'error');
            return;
        }

        let amount = parseFloat(amountStr);
        const category = this.getCategoryInfo(categoryId);

        if (!category) {
            this.showToast('Invalid category selected', 'error');
            return;
        }

        // Ensure amount sign matches category type
        if (category.type === 'income' && amount < 0) {
            amount = Math.abs(amount);
        } else if (category.type === 'expense' && amount > 0) {
            amount = -Math.abs(amount);
        }

        const transaction = {
            id: Date.now(),
            description,
            categoryId,
            category: category.name,
            amount,
            date,
            timestamp: new Date(date).getTime()
        };

        this.transactions.push(transaction);
        this.saveToLocalStorage();
        this.showToast('Transaction added successfully!', 'success');
        this.clearForm();

        // Reset filters so the new transaction appears in history immediately
        this.filterType = 'all';
        this.filterTypeSelect.value = 'all';
        this.sortBy = 'newest';
        this.sortBySelect.value = 'newest';
        this.searchTerm = '';
        this.searchInput.value = '';

        this.render();
    }

    deleteTransaction(id) {
        this.transactions = this.transactions.filter(t => t.id !== id);
        this.saveToLocalStorage();
        this.showToast('Transaction deleted', 'success');
        this.render();
    }

    clearAllData() {
        if (this.transactions.length === 0) {
            this.showToast('No transactions to clear', 'warning');
            return;
        }

        if (confirm('Are you sure you want to delete ALL transactions? This cannot be undone.')) {
            this.transactions = [];
            this.saveToLocalStorage();
            this.showToast('All transactions cleared', 'success');
            this.render();
        }
    }

    calculateBalance() {
        return this.manualIncome - this.calculateExpense();
    }

    calculateIncome() {
        return this.manualIncome;
    }

    calculateExpense() {
        return this.transactions
            .filter(t => t.amount < 0)
            .reduce((total, t) => total + Math.abs(t.amount), 0);
    }

    calculateExpenseRatio() {
        const income = this.manualIncome;
        const expense = this.calculateExpense();
        if (income === 0) return 0;
        return Math.round((expense / income) * 100);
    }

    handleManualIncomeChange() {
        const value = parseFloat(this.manualIncomeInput.value);
        this.manualIncome = !isNaN(value) && value >= 0 ? value : 0;

        if (this.manualIncomeInput.value.trim() === '') {
            localStorage.removeItem('manualIncome');
        } else {
            localStorage.setItem('manualIncome', this.manualIncome);
        }

        this.render();
    }

    changeCurrency() {
        this.currency = this.currencySelect.value;
        localStorage.setItem('currency', this.currency);
        this.render();
    }

    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: this.currency,
            minimumFractionDigits: 2
        }).format(amount);
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
        });
    }

    getFilteredAndSortedTransactions() {
        let filtered = this.transactions.filter(t => {
            // Filter by type
            if (this.filterType === 'income' && t.amount <= 0) return false;
            if (this.filterType === 'expense' && t.amount >= 0) return false;

            // Filter by search term
            if (this.searchTerm) {
                const matchesSearch = 
                    t.description.toLowerCase().includes(this.searchTerm) ||
                    t.category.toLowerCase().includes(this.searchTerm);
                if (!matchesSearch) return false;
            }

            return true;
        });

        // Sort
        filtered.sort((a, b) => {
            switch (this.sortBy) {
                case 'oldest':
                    return a.timestamp - b.timestamp;
                case 'amount-high':
                    return Math.abs(b.amount) - Math.abs(a.amount);
                case 'amount-low':
                    return Math.abs(a.amount) - Math.abs(b.amount);
                case 'newest':
                default:
                    return b.timestamp - a.timestamp;
            }
        });

        return filtered;
    }

    createTransactionElement(transaction) {
        const li = document.createElement('li');
        li.className = `transaction-item ${transaction.amount > 0 ? 'income-item' : 'expense-item'}`;

        const categoryEmoji = transaction.category.split(' ')[0];
        const formattedAmount = this.formatCurrency(transaction.amount);
        const sign = transaction.amount > 0 ? '+' : '';
        const dateFormatted = this.formatDate(transaction.date);

        li.innerHTML = `
            <div class="transaction-left">
                <span class="category-icon">${categoryEmoji}</span>
                <div class="transaction-info">
                    <div class="transaction-description">${transaction.description}</div>
                    <div class="transaction-meta">
                        <span class="transaction-category">${transaction.category}</span>
                        <span class="transaction-date">${dateFormatted}</span>
                    </div>
                </div>
            </div>
            <div class="transaction-right">
                <span class="transaction-amount ${transaction.amount > 0 ? 'amount-positive' : 'amount-negative'}">
                    ${sign}${formattedAmount}
                </span>
                <button class="btn-delete" data-id="${transaction.id}">×</button>
            </div>
        `;

        li.querySelector('.btn-delete').addEventListener('click', () => {
            this.deleteTransaction(transaction.id);
        });

        return li;
    }

    updateDisplay() {
        const balance = this.calculateBalance();
        const income = this.manualIncome;
        const expense = this.calculateExpense();
        const ratio = this.calculateExpenseRatio();

        this.balanceEl.textContent = this.formatCurrency(balance);
        this.balanceEl.className = balance >= 0 ? 'positive' : 'negative';
        
        this.incomeEl.textContent = this.formatCurrency(income);
        this.expenseEl.textContent = this.formatCurrency(expense);
        this.ratioEl.textContent = `${ratio}%`;
    }

    updateTransactionList() {
        const filtered = this.getFilteredAndSortedTransactions();
        this.transactionList.innerHTML = '';

        if (filtered.length === 0) {
            this.emptyState.style.display = 'block';
        } else {
            this.emptyState.style.display = 'none';
            filtered.forEach(transaction => {
                this.transactionList.appendChild(this.createTransactionElement(transaction));
            });
        }

        const count = filtered.length;
        this.transactionCountEl.textContent = `${count} transaction${count !== 1 ? 's' : ''}`;
    }

    render() {
        this.updateDisplay();
        this.updateTransactionList();
    }

    clearForm() {
        this.descriptionInput.value = '';
        this.amountInput.value = '';
        this.categorySelect.value = '';
        this.dateInput.valueAsDate = new Date();
        this.descriptionInput.focus();
    }

    saveToLocalStorage() {
        localStorage.setItem('transactions', JSON.stringify(this.transactions));
    }

    showToast(message, type = 'info') {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.className = `toast toast-${type} show`;

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ExpenseTracker();
}); 