import React from 'react';

export default function Balance({ incomes, expenses }){
    const totalIncome = incomes.reduce((total, income) => total + income.amount, 0);
    console.log(totalIncome)
    
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    const balance = totalIncome - totalExpenses;

    return (
        <div>
            <h2>Balance: ${balance}</h2>
        </div>
    );
}

