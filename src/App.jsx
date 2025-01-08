/* 
import './App.css'

function App() {

  return (
    <>

      <h1 className="app-title">Budget Tracker System</h1>
      <div className="container">
        <div className="card budget-card">
          <h3>Add Budget</h3>
          <h5>Budget:</h5>
          <input type="number" placeholder="Enter budget" />
          <button>Add Budget</button>
        </div>
        <div className="card expense-card">
          <h3>Add Expense</h3>
          <h5>Expense Title:</h5>
          <input type="text" placeholder="Enter title" />
          <h5>Amount:</h5>
          <input type="number" placeholder="Enter amount" />
          <button>Add Expense</button>
        </div>
        <button className="reset">Reset All</button>
        <div className="calculate">
          <h5 className='style-h5'>Total Budget:100.00</h5>
          <h5 className='style-h5'>Total Expenses:75.00</h5>
          <h5 className='style-h5'>Budget Left:25.00</h5>
          <h4>Expense History:</h4><hr />
         

        </div>

      </div>

    </>
  )
}

export default App
 */




import React, { useState } from 'react';
import './App.css';
import BudgetInput from "./components/BudgetInput";
import ExpenseInput from "./components/ ExpenseInput";
import Summary from "./components/ Summary";
import ExpenseHistory from './components/ExpenseHistory';

function App() {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const totalExpenses = expenses.reduce((total, item) => total + item.amount, 0);
  const budgetLeft = budget - totalExpenses;

  const handleAddBudget = (amount) => setBudget(amount);
  const handleAddExpense = (title, amount) => {
    const newExpense = { id: Date.now(), title, amount };
    setExpenses([...expenses, newExpense]);
  };
  const handleRemoveExpense = (id) => setExpenses(expenses.filter(expense => expense.id !== id));
  const handleReset = () => {
    setBudget(0);
    setExpenses([]);
  };

  return (
    <div className="app">
      <h1>Budget Tracker System</h1>
      <div className="main-container">
        <div className="left-container">
          <BudgetInput onAddBudget={handleAddBudget} />
          <ExpenseInput onAddExpense={handleAddExpense} />
          <button className="btn reset-btn" onClick={handleReset}>Reset All</button>
        </div>
        <div className="right-container">
          <Summary budget={budget} totalExpenses={totalExpenses} budgetLeft={budgetLeft} />
          <ExpenseHistory expenses={expenses} onRemoveExpense={handleRemoveExpense} />
        </div>
      </div>
    </div>
  );
}

export default App;
