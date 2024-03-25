import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

// isLoggedIn add in props later
export default function ExpensesForm({ addExpense }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const amountFloat = parseFloat(amount);

        if (!isNaN(amountFloat)) {
            const newExpense = {
                title: title,
                description: description,
                amount: amountFloat
            }
       
            addExpense(newExpense);
            
            setTitle("");
            setDescription("");
            setAmount("");

            navigate('/expenses')
        } else {
            alert("Please enter a valid amount!")
        }
    }   

    function handleBack() {
        navigate("..");
    }

    return (
        <>
            <button type="button" class="btn btn-warning" onClick={handleBack}>Back</button>
            <form onSubmit={handleSubmit}>
                <label>Title:</label> <br/>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /> <br/>

                <label>Description:</label> <br/>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} /> <br/>

                <label>Amount:</label> <br/>
                <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} /> <br/>
            
                <button type="submit" className="btn btn-success btn-sm m-4">Add New Expense</button>
            </form>
        </>
    );
}
