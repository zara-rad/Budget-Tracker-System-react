import React from 'react';

function Summary({ budget, totalExpenses, budgetLeft }) {
    return (
        <div className="summary">
            <div>Total Budget: ${budget.toFixed(2)}</div>
            <div>Total Expenses: ${totalExpenses.toFixed(2)}</div>
            <div>Budget Left: ${budgetLeft.toFixed(2)}</div>
        </div>
    );
}

export default Summary;
