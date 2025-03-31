import { useState } from 'react';

interface Expense{
    name: string;
    amount: number;
}
const ExpenseTracking = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [newExpense, setNewExpense] = useState({ name: '', amount: 0 });

    const addExpense = () => {
        setExpenses([...expenses, newExpense]);
        setNewExpense({ name: '', amount: 0});
    };

    return (
        <div>
            <h2>Expense Tracking</h2>
            <input
                type="text"
                placeholder="Expense Name"
                value={newExpense.name}
                onChange={(e) => setNewExpense({ ...newExpense, name :e.target.value})}
            />
             <input
                type="number"
                placeholder="Amount"
                value={newExpense.amount}
                onChange={(e) => setNewExpense({ ...newExpense, amount:Number(e.target.value)})}
            />
            <button onClick={addExpense}>Add Expense</button>

            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>
                        {expense.name}: ${expense.amount}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseTracking;