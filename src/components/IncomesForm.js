import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

// isLoggedIn add in props later
export default function IncomesForm({ addIncome }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const amountFloat = parseFloat(amount);

        if (!isNaN(amountFloat)) {
            const newIncome = {
                title: title,
                description: description,
                amount: amountFloat
            }
       
            addIncome(newIncome);
            
            setTitle("");
            setDescription("");
            setAmount("");

            navigate('/incomes')
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
            
                <button type="submit" className="btn btn-success btn-sm m-4">Add New Income</button>
            </form>
        </>
    );
}
