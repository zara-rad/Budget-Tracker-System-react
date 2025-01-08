import React from 'react';

function ExpenseHistory({ expenses, onRemoveExpense }) {
    return (
        <div className="expense-history">
            <h3>Expense History:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Expense Name</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map(expense => (
                        <tr key={expense.id}>
                            <td>{expense.title}</td>
                            <td>${expense.amount.toFixed(2)}</td>
                            <td>
                                <button className="btn remove-btn" onClick={() => onRemoveExpense(expense.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ExpenseHistory;
