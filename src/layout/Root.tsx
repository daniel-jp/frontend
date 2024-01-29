import {Container, CssBaseline, Paper} from '@mui/material';
import React from 'react';


function Root({children}: {children: React.ReactNode}) {
  return (
    <>

      <Container component="main" maxWidth="lg" >
        <CssBaseline />

        {children}

      </Container></>
  );
}

export default Root;
