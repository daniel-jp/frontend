import {Box, Grid, Stack} from '@mui/material';

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
      </Root></Stack >
  )
}
