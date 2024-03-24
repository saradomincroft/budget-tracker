// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Expenses from './Expenses'
// import { useEffect, useState } from 'react'

// export default function ExpensesList( { expenses, updateStatus, deleteExpense } ) {
//     const [filter, setFilter] = useState("All")
//     const [filteredExpenses, setFilteredExpenses] = useState([])

//     useEffect( () => {
//         if (filter === "All"){
//             setFilteredExpenses( expenses )
//         } else if (filter === "Paid") {
//             const paidExpenses = expenses.filter( expense => expense.status)
//             setFilteredExpenses( paidExpenses )
//         } else if (filter === "Outstanding" ) {
//             const outstandingExpenses = expenses.filter( expense => !expense.status)
//             setFilteredExpenses( outstandingExpenses )
//         }
//     }, [filter, expenses])

//     return (
//         <>
//             <div>
//                 <h5>Status: 
//                     <select value={filter} onChange={(e) => setFilter(e.target.value)}>
//                         <option value="All">All</option>
//                         <option value="Paid">Paid</option>
//                         <option value="Outstanding">Outstanding</option>
//                     </select>
//                 </h5>
//             </div>

//             {/* my-3: y axis margin */}
//             <Row className="my-3">
//                 {
//                     filteredExpenses.length > 0
//                     ?
//                     filteredExpenses.map( expense => {
//                         return <Col sm={4} key={expense.id}><Expenses id={expense.id} title={expense.title} description={expense.description} status={expense.status} updateStatus={updateStatus} deleteExpense={deleteExpense}/></Col>
            
//                     })
//                     :
//                     <p>No expenses!</p>
//                 }
//             </Row>
//         </>
//     )

// }