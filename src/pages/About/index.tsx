import {Box, Button, Grid, Link, Stack, Typography} from '@mui/material';

import AboutComp from '../../Components/aboutComponent/AboutComp';
import AboutFeatuere from '../../Components/aboutComponent/AboutFeatuere';
import Root from '../../layout/Root';
import AboutFeatuereProp from '../../props/about/AboutFeatuereProp';
import PropAbout from '../../props/about/PropAbout';


export default function index() {
  const propAbout = PropAbout();
  const aboutFeature = AboutFeatuereProp();
  return (
    <Stack >

      <Box>
        {
          propAbout.map((about) => (

            <AboutComp
              title={about.title}
              description={about.description}
              description2={about.description2}
              image={about.image}
              imageText={about.imageText}

            />
          ))
        }
      </Box>


    <Root>
        <Grid py={2}>
          {
            aboutFeature.map((abfeature) => (

              <AboutFeatuere
                date={abfeature.date}
                description={abfeature.description}
                image={abfeature.image}
                imageLabel={abfeature.imageLabel}
                title={abfeature.title} />
            ))

          }

        </Grid>
      </Root>

      <Stack height={["350px", "450px", "500px"]}
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          width: "100%",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${"../../assets/homeImg/bg/menu.jpg"})`,
        }}
      >
        {/* Increase the priority of the hero background image */}
        {<img style={{display: 'none'}} src={`${("../../assets/homeImg/bg/menu.jpg")}`} alt="menu" />}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.5)',
          }} />
        <Grid sx={{textAlign: "center", pt: "17%"}}>
          <Grid item md={6} >
            <Box
              sx={{
                position: 'relative', textAlign: "center",
              }}>
              <Typography fontSize={{xs: 20, md: 30}} sx={{fontWeight: '900'}} component="h1" variant="h3" color="inherit" gutterBottom>
                Trouvez les meilleurs prix sur notre menu
              </Typography>

              <Link variant="subtitle1" href="#">
                <Button color="secondary"
                  sx={{
                    backgroundColor: 'rgba(10, 50, 50, 0.8)',
                    color: '#fff',
                    '&:hover': {
                      transition: 'color 0.1s linear 0s',
                      backgroundColor: 'rgba(0, 10, 10, 0.8)',
                      fontWeight: "600", color: '#fff',
                    }, px: 5
                  }}>
                  notre menu
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Stack >
  )
}
