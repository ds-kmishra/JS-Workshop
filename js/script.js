const balance = document.querySelector('#balance');
const money_plus = document.querySelector('#money-plus');
const money_minus = document.querySelector('#money-minus');
const list = document.querySelector('#list');
const form = document.querySelector('#form');
const text = document.querySelector('#text');
const amount = document.querySelector('#amount');

const dummyTransactions = [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }    
];

const transactions = dummyTransactions;

function addTransaction(event) {
    event.preventDefault();

    if(text.value.trim() ==='' || amount.value.trim() === '') {
        alert('Please addd a text and amount');
    } else {
        const transaction = {
            id : generateID(),
            text: text.value,
            amount: amount.value
        };

        transactions.push(transaction);

        addTransactionsDOM(transaction);

        console.log(transactions);

    }
    
}

// Generate random ID
function generateID() {
    return Math.floor(Math.random() * 100000000);
}

// Add Transactions to DOM list
function addTransactionsDOM(transaction) {
        const sign = transaction.amount < 0 ? '-' : '+';

        const item = document.createElement('li');
        item.classList.add(transaction.amount<0 ? 'minus' : 'plus');
        /*
         Cash <span>-$300</span><button class="delete-btn">x</button>        
        */

        item.innerHTML= `
            ${transaction.text} <span>${sign}$${Math.abs(transaction.amount)}</span>
            <button class="delete-btn" onclick = "removeTransaction(${transaction.id})">x</button>
        `; 

        list.appendChild(item);
}

function removeTransaction(id) {
    transactions = transactions.filter(transactions => transactions.id != id);
}


function init(){

}

init();



form.addEventListener('submit', addTransaction);

