import React, { useState } from 'react';

function BudgetInput({ onAddBudget }) {
    const [amount, setAmount] = useState('');

    const handleSubmit = () => {
        onAddBudget(parseFloat(amount));
        setAmount('');
    };

    return (
        <div className="card">
            <h3>Add Budget</h3>
            <label>Budget:</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter budget" />
            <button className="btn add-btn" onClick={handleSubmit}>Add Budget</button>
        </div>
    );
}

export default BudgetInput;
