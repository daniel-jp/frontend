import {Stack} from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import Root from '../../layout/Root';


interface PropAbout {
  description: string;
  description2: string;
  image: string;
  imageText: string;
  linkText: string;
  title: string;

}

const AboutComp: React.FC<PropAbout> = ({description, description2, image, imageText, linkText, title
}) => {


  return (
    <Stack
      sx={{
        // borderRadius: "0px 0px 0px 100%",
        position: 'relative',
        //backgroundColor: 'grey.800',
        color: '#fff',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${image})`,

      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{display: 'none', }} src={image} alt={imageText} />}
      <Box
        sx={{
          backgroundColor: 'rgba(0,0,0,0.7)',
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,

        }}
      />
      <Root>
        <Grid sx={{


          my: 6
        }}>
          <Grid item md={6} sx={{
            // backgroundColor: 'rgba(0, 0, 0, 0.5)',
            textAlign: "justify", display: {xs: "grid", md: "flex"},

          }}>
            <Box
              sx={{
                position: 'relative',
                //  pr: {md: 0}, pl: {xs: 0, md: 2},
                ml: 2, mr: {xs: 2, md: 6}, my: 2
              }}
            >
              <Typography component="h1" variant="h3" color="#2F855A"
                sx={{fontWeight: "600"}} gutterBottom>
                {title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {description}
              </Typography>
              <Link variant="subtitle1" href="#">
                {linkText}
              </Link>
            </Box>

            <Grid item sx={{

              pt: {xs: 0, md: 10}, textAlign: "justify", position: 'relative',
              color: "#fff",
              mr: 2, ml: {xs: 2, md: 6}
            }}>

              <Typography variant="h5" color={"#fff"} paragraph>
                {description2}
              </Typography>
            </Grid>
          </Grid>


        </Grid>
      </Root>
    </Stack >
  );
}

export default AboutComp;