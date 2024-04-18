import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Notif from './Notif';

// isLoggedIn add in props later
export default function IncomesForm({ addIncome }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [notifMsg, setNotifMsg] = useState("");
    const [notifColor, setNotifColor] = useState(null);

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (title.trim() === "") {
            setNotifMsg("Please enter a title!")
            setNotifColor("danger")
            return;
        }

        if (description.trim() === "") {
            setNotifMsg("Please enter a description!")
            setNotifColor("danger")
            return;
        }

        if (amount.trim() === "") {
            setNotifMsg("Please enter an amount!")
            setNotifColor("danger")
            return;
        }

        if (amount.trim() <= 0 ) {
            setNotifMsg("Please enter a positive amount!")
            setNotifColor("danger")
            return;
        }

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
        setNotifMsg("Please enter a valid amount!")
        setNotifColor("danger")
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
                
                    <button type="submit" className="btn btn-info btn-sm m-4">Add New Income</button>
                    <Notif msg={notifMsg} color={notifColor} setNotifMsg={setNotifMsg} />
                </form>
            </Col>
        </Row>
    );
}
