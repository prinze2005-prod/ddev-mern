import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Alerts(props) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
       <Alert variant="success" onClose={() => setShow(false)} dismissible>
       <center> <strong>{props.message}</strong> </center>
      </Alert>
    );
  }
  return null
  }
  

export default Alerts