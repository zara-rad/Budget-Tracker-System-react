import React, { useState } from 'react';

function ExpenseInput({ onAddExpense }) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = () => {
        if (title && amount) {
            onAddExpense(title, parseFloat(amount));
            setTitle('');
            setAmount('');
        }
    };

    return (
        <div className="card">
            <h3>Add Expense</h3>
            <label>Expense Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
            <label>Amount:</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" />
            <button className="btn add-btn" onClick={handleSubmit}>Add Expense</button>
        </div>
    );
}

export default ExpenseInput;
