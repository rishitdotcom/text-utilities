import * as React from 'react';
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack';

export default function ActionAlerts(props) {
  return (
    <>
    {props.alerts &&
      <Alert  >{props.alerts}</Alert>
      
    }
    
    </>
  );
}