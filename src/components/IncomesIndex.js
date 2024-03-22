import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom"
import IncomesTotal from "./IncomesTotal";

export default function IncomeIndex() {
    const [incomes, setIncomes] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:4001/incomes/')
            .then(response => response.json())
            .then(json => setIncomes(json))
            .catch(error => console.error('Error fetching incomes:', error));
    }, [incomes]);
    

    return (
        <>
        <h1>Income</h1>
        <IncomesTotal incomes={incomes} />
        <Outlet />
        </>
    )
}
