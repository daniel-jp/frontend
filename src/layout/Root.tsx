import {Container, CssBaseline} from '@mui/material';


function Root({children}: {children: React.ReactNode}) {
  return (
    <>

      <Container component="main" maxWidth="lg">
        <CssBaseline />
        {children}
      </Container></>
  );
}

export default Root;
