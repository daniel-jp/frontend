import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Box, Divider, Grid, IconButton, Link, Stack, Typography} from '@mui/material';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#171923',
        py: 8,
        textAlign: 'center',
        marginTop: 'auto',
        color: '#F7FAFC',// Push the footer to the bottom of the page
      }}
    >

      <Stack>
        <Grid container sx={{justifyContent: "space-between", p: 2}}>
          {/* Logo */}
          <Grid item xs={12} sm={6} md={2} sx={{mb: 2}}>
            <img src="../../../public/assets/logo/log1.png" alt="Logo" height="50" />
          </Grid>

          {/* Company */}
          <Grid item xs={12} sm={6} md={2} sx={{textAlign: "initial", }}>
            <Typography variant="h6" fontWeight={'600'} sx={{mb: 1}}>
              En savoir plus
            </Typography>
            <Grid sx={{display: "grid", }}>
              <Link sx={{textDecoration: 'none', color: '#F7FAFC'}} href="/about">À propos</Link>
              <Link sx={{textDecoration: 'none', color: '#F7FAFC'}} href="/careers">Viande & Surgelés Pur Boeuf</Link>
              <Link sx={{textDecoration: 'none', color: '#F7FAFC'}} href="/press">Produits Frais</Link>
              <Link sx={{textDecoration: 'none', color: '#F7FAFC'}} href="/press">Découvrez-Nous</Link>
            </Grid>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} sm={6} md={2} sx={{textAlign: "initial", }}>
            <Typography variant="h6" fontWeight={'600'} sx={{mb: 1}}>
              Contact
            </Typography>
            <Typography>Mail: achahada@acha.fr</Typography>
            <Typography>achahada@gmail.com</Typography>
            <Typography>Tel: (+212) 618675431</Typography>
            <Typography>Fax: (+212) 518675431</Typography>
          </Grid>

          {/* Address */}
          <Grid item xs={12} sm={6} md={2} sx={{textAlign: "initial", }}>
            <Typography variant="h6" fontWeight={'600'} sx={{mb: 1}}>
              Address
            </Typography>
            <Typography>Maroc</Typography>
            <Typography>117 rue Lafayette, 76000 Rouen rive-gauche</Typography>
          </Grid>

          {/* Support */}
          <Grid item xs={12} sm={6} md={2} sx={{textAlign: "initial", }}>
            <Typography variant="h6" fontWeight={'600'} sx={{mb: 1}}>
              Support
            </Typography>
            <Link href="/help">Help Center</Link>
            <Link href="/faq">FAQs</Link>
          </Grid>

        </Grid>

      </Stack>
      <Divider sx={{my: 2, border: "1px solid #F7FAFC"}} />

      {/* Social Media Icons */}
      <IconButton sx={{color: "#2F855A"}} component={Link} href="https://github.com/" target="_blank">
        <FacebookTwoToneIcon />
      </IconButton>
      <IconButton sx={{color: "#2F855A"}} component={Link} href="https://twitter.com/" target="_blank">
        <InstagramIcon />
      </IconButton>
      <IconButton sx={{color: "#2F855A"}} component={Link} href="https://www.linkedin.com/" target="_blank">
        <LinkedInIcon />
      </IconButton>

      {/* Copyright */}
      <Typography variant="body2" color="#F7FAFC" mt={2}>
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </Typography>

    </Box>
  );
};

export default Footer;
