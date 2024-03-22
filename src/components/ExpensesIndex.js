import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import ExpensesTotal from './ExpensesTotal'; 

export default function ExpensesIndex() {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/expenses/')
            .then(response => response.json())
            .then(json => setExpenses(json))
            .catch(error => console.error('Error fetching expenses:', error));
    }, [expenses]);

    return (
        <>
            <h2>Expenses</h2>
            <ExpensesTotal expenses={expenses} />
            <Outlet />
        </>
    );
}
