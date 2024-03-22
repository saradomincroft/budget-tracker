import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import { useEffect } from 'react'

export default function ExpensesNotif( {msg, color, setNotifMsg}) {

    useEffect( () => {
        const notifTimer = setTimeout( () => {
            setNotifMsg("")
        }, 5000)

        return () => clearTimeout(notifTimer)
    }, [])
    // the cleanup function ^ for the timeout
    return (
        <Row className="my-3">
            <Col>
 
                <Alert variant={color}>
                    {msg}
                </Alert>

            </Col>
        </Row>
    )

}