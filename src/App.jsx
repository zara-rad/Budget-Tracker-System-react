


import React, { useState, useEffect } from 'react';
import './App.css';
import BudgetInput from "./components/BudgetInput";
import ExpenseInput from "./components/ ExpenseInput";
import Summary from "./components/ Summary";
import ExpenseHistory from './components/ExpenseHistory';

/* function App() {
  const [budget, setBudget] = useState(0);
  //TEST

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
          <Summary budget={budget} totalExpenses={totalExpenses} budgetLeft={budgetLeft} /><hr />
          <ExpenseHistory expenses={expenses} onRemoveExpense={handleRemoveExpense} />
        </div>
      </div>
    </div>
  );
}

export default App;
 */




function App() {
  const [budget, setBudget] = useState(() => {
    const savedBudget = localStorage.getItem('budget');
    return savedBudget ? parseFloat(savedBudget) : 0;
  });
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const totalExpenses = expenses.reduce((total, item) => total + item.amount, 0);
  const budgetLeft = budget - totalExpenses;

  // Save budget to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('budget', budget);
  }, [budget]);

  // Save expenses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleAddBudget = (amount) => {
    setBudget(amount);
  };

  const handleAddExpense = (title, amount) => {
    const newExpense = { id: Date.now(), title, amount };
    setExpenses([...expenses, newExpense]);
  };

  const handleRemoveExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleReset = () => {
    setBudget(0);
    setExpenses([]);
    localStorage.clear(); // Clear localStorage when resetting
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
          <Summary budget={budget} totalExpenses={totalExpenses} budgetLeft={budgetLeft} /><hr />
          <ExpenseHistory expenses={expenses} onRemoveExpense={handleRemoveExpense} />
        </div>
      </div>
    </div>
  );
}

export default App;