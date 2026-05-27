// 1. Initialize transactions array. 
// It tries to grab data from localStorage; if empty, initializes an empty array.
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// 2. Function to add a transaction from the DOM form
function addTransaction() {
    const textInput = document.getElementById('text');
    const amountInput = document.getElementById('amount');
    const typeInput = document.getElementById('type');

    // Validation: Check if inputs are empty
    if (textInput.value.trim() === '' || amountInput.value.trim() === '') {
        alert('Please add a description and amount');
        return;
    }

    // Create a transaction object
    const transaction = {
        id: generateID(),
        text: textInput.value,
        amount: parseFloat(amountInput.value),
        type: typeInput.value
    };

    // Push to our data array
    transactions.push(transaction);

    // Update everything
    updateDOM();
    updateLocalStorage();

    // Clear input fields for next entry
    textInput.value = '';
    amountInput.value = '';
}

// Helper to generate a random ID for deletion tracking
function generateID() {
    return Math.floor(Math.random() * 100000000);
}

// 3. Function to update the HTML interface
function updateDOM() {
    const list = document.getElementById('list');
    const balanceEl = document.getElementById('balance');
    const incomeEl = document.getElementById('income-total');
    const expenseEl = document.getElementById('expense-total');

    // Clear the list before re-rendering
    list.innerHTML = '';

    let totalIncome = 0;
    let totalExpense = 0;

    // Loop through transactions to build the list and calculate totals
    transactions.forEach(transaction => {
        const sign = transaction.type === 'income' ? '+' : '-';
        const item = document.createElement('li');

        // Add class based on type for green/red border styling
        item.classList.add(transaction.type);

        // Construct the list item HTML structure
        item.innerHTML = `
            ${transaction.text} <span>${sign}₹${transaction.amount}</span>
            <button class="delete-btn" onclick="deleteTransaction(${transaction.id})">x</button>
        `;

        list.appendChild(item);

        // Calculate running totals
        if (transaction.type === 'income') {
            totalIncome += transaction.amount;
        } else {
            totalExpense += transaction.amount;
        }
    });

    // Calculate net balance
    const netBalance = totalIncome - totalExpense;

    // Display values in the HTML elements
    balanceEl.innerText = `₹${netBalance.toFixed(2)}`;
    incomeEl.innerText = `+₹${totalIncome.toFixed(2)}`;
    expenseEl.innerText = `-₹${totalExpense.toFixed(2)}`;
}

// 4. Function to delete a transaction by its ID
function deleteTransaction(id) {
    // Filter out the transaction with the matching ID
    transactions = transactions.filter(t => t.id !== id);
    
    updateLocalStorage();
    updateDOM();
}

// 5. Sync data with LocalStorage
function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Run this immediately when the script loads to show saved data
updateDOM();