import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom"
import IncomesTotal from "./IncomesTotal";

export default function IncomeIndex() {
    const [incomes, setIncomes] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:4000/incomes/')
            .then(response => response.json())
            .then(json => setIncomes(json))
            .catch(error => console.error('Error fetching incomes:', error));
    }, [incomes]);
    

    return (
        <div className="text-center">       
        <h2>Total Income: $<IncomesTotal incomes={incomes} /></h2>
        <Outlet />
        </div>
    )
}
