import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

export default function IncomesPage() {

    const {incomeId} = useParams() 
    const [income, setIncome] = useState(null)

    useEffect( () => {
        fetch('http://localhost:4000/incomes/'+incomeId)
        .then(response => response.json())
        .then(json => setIncome(json));
    }, []);

    return (
        <>
            {
            income 
            ? 
            <>
                <h1>Title: {income.title}</h1>
                <h2>Description: </h2>
                <p>{income.description}</p>
                <h3>Amount: {income.amount}</h3>
            </>
             : 
            <p>No incomes logged!</p>
            }
        </>
    )

}