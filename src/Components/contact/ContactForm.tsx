import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import {Box, Button, Divider, Grid, Link, Stack, TextField, Typography} from '@mui/material';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import {useState} from 'react';


const containerStyle = {
  width: '100%',
  height: '300px',
};

const center = {
  lat: 31.7917,
  lng: -7.0926,
};

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e: {preventDefault: () => void;}) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para lidar com o envio do formulário
    console.log('Form submitted:', {name, email, message});
    // Por enquanto, apenas limpamos os campos após o envio
    setName('');
    setEmail('');
    setMessage('');
  };

  return (

    <Stack sx={{color: "#000", mt: "75px", }}>

      <Grid container spacing={2} sx={{mt: 8, mb: 3, borderRadius: 0, }}>
        <Grid item xs={12} md={6} sx={{borderRadius: 0, height: "100%"}}>

          <Box style={{padding: '20px', alignItems: "center"}}>
            <Typography variant="h5" gutterBottom>
              Contactez-nous
            </Typography>
            <Typography variant="body1" sx={{justifyContent: "flex-end"}} gutterBottom>
              <EmailIcon />  achahada@acha.fr & achahada@gmail.com
            </Typography>
            <Typography variant='body1' sx={{textAlign: "justify"}} gutterBottom >
              <CallIcon /> (+212) 618675431 & (+212) 518675431
            </Typography>
            <Typography variant="body1" sx={{textAlign: "justify"}} gutterBottom>
              <PersonPinCircleIcon /> Maroc 117 rue Lafayette, 76000 Rouen rive-gauche
            </Typography>
            <Typography variant='h5' sx={{mt: 4}} gutterBottom>
              Suivez-nous sur les réseaux sociaux
            </Typography>
            <Grid container spacing={2} >
              <Grid item sx={{color: "#000"}} component={Link} href="https://twitter.com/" target="_blank">
                <FacebookTwoToneIcon />
              </Grid>
              <Grid item sx={{color: "#000"}} component={Link} href="https://twitter.com/" target="_blank">
                <InstagramIcon />
              </Grid>
              <Grid item sx={{color: "#000"}} component={Link} href="https://twitter.com/" target="_blank">
                <LinkedInIcon />
              </Grid>

            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{borderRadius: '0'}}>

          <Box style={{padding: '20px'}}>
            <Typography sx={{fontSize: {xs: 16, sm: 18, md: 20}, mx: 1}} gutterBottom>
              N'hésitez pas à nous contacter en veillant à bien remplir la totalité du formulaire.
            </Typography>
            <Divider sx={{my: 2, border: "1px solid #000"}} />

            <form onSubmit={handleFormSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth sx={{
                      bgcolor: "#EDF2F7",
                      ":hover": {
                        cursor: "pointer",
                        color: "#2D3748",
                        boxShadow: 5,
                      }
                    }}
                    label="Nome"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth sx={{
                      bgcolor: "#EDF2F7",
                      ":hover": {
                        cursor: "pointer",
                        color: "#2D3748",
                        boxShadow: 5,
                      }
                    }}
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth sx={{
                      bgcolor: "#EDF2F7",
                      ":hover": {
                        cursor: "pointer",
                        color: "#2D3748",
                        boxShadow: 5,
                      }
                    }}
                    label="Mensagem"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" type="submit">
                    Enviar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>


      </Grid>


      <Grid item xs={12} md={6}>
        <Box sx={{height: 600, p: 1}}>
          <LoadScript googleMapsApiKey="YOUR_API_KEY">
            <Stack>
              <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6}>
              <Marker position={center} />
              </GoogleMap>
            </Stack>
          </LoadScript>
        </Box>
      </Grid>
    </Stack>
  );
};

export default ContactForm;
