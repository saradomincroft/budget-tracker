import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Notif from "./Notif";


// isLoggedIn add in props later
export default function ExpensesForm({ addExpense }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [notifMsg, setNotifMsg] = useState("");
    const [notifColor, setNotifColor] = useState(null);

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (title.trim() === "") {
            // alert("Please enter a title!");
            setNotifMsg("Please enter a title")
            setNotifColor("danger")
            return;
        }

        if (description.trim() === "") {
            alert("Please enter a description!");
            return;
        }

        if (amount.trim() === "") {
            alert("Please enter an amount!");
            return;
        }

        if (amount.trim() <= 0 ) {
            alert("Please enter a positive amount!");
            return;
        }

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
        <Row className="my-3 justify-content-center">
            <Col md={6}>
                <button type="button" class="btn btn-light" onClick={handleBack}>Back</button>
                <form onSubmit={handleSubmit}>
                    <label>Title:</label> <br/>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /> <br/>
                    <label>Description:</label> <br/>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} /> <br/>

                    <label>Amount:</label> <br/>
                    <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} /> <br/>
                
                    <button type="submit" className="btn btn-info btn-sm m-4">Add New Expense</button>
                    <Notif msg={notifMsg} color={notifColor} setNotifMsg={setNotifMsg} />
                </form>
            </Col>
        </Row>
    );
}
