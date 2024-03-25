import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import ExpensesTotal from './ExpensesTotal'; 

export default function ExpensesIndex() {
    const [expenses, setExpenses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        fetch('http://localhost:4000/expenses/')
            .then(response => response.json())
            .then(json => {setExpenses(json)
            setIsLoading(false) 
        console.log(expenses)})
            .catch(error => console.error('Error fetching expenses:', error));
    }, [expenses]);

    return (
        <div className="text-center">       
        <h2>Total Expenses: ${!isLoading ? <ExpensesTotal expenses={expenses} /> : 0 }</h2>
        <Outlet />
        </div>
    );
}




// import React, { useState, useEffect } from 'react';
// import { Outlet } from 'react-router-dom';
// import ExpensesTotal from './ExpensesTotal'; 

// export default function ExpensesIndex() {
//     const [expenses, setExpenses] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
    
//     useEffect(() => {
//         fetch('http://localhost:4000/expenses/')
//             .then(response => response.json())
//             .then(json => {setExpenses(json)
//             setIsLoading(false) 
//         console.log(expenses)})
//             .catch(error => console.error('Error fetching expenses:', error));
//     }, [expenses]);

//     return (
//         <div className="text-center">       
//         <h2>Total Expenses: ${!isLoading ? <ExpensesTotal expenses={expenses} /> : 0 }</h2>
//         <Outlet />
//         </div>
//     );
// }

