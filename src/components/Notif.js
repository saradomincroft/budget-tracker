import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

export default function Notif({ msg, color, setNotifMsg }) {
  useEffect(() => {
    let notifTimer;
    if (msg) {
      notifTimer = setTimeout(() => {
        setNotifMsg('');
      }, 3000);
    }

    return () => clearTimeout(notifTimer);
  }, [msg, setNotifMsg]);

  return (
    <Row className="my-3">
      <Col className="d-flex justify-content-center">
        {msg && (
          <Alert variant={color} style={{ width: '20%' }}>
            {msg}
          </Alert>
        )}
      </Col>
    </Row>
  );
}
