import {Stack} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

interface MainFeaturedPostProps {
  description: string;
  image: string;
  imageText: string;
  linkText: string;
  title: string;

}

export default function BannerComponent({description, image, imageText, linkText, title}: MainFeaturedPostProps) {

  return (
    <Stack height={["350px", "450px", "600px"]}
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{display: 'none'}} src={image} alt={imageText} />}
      <Box
        sx={{

          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.5)',
        }} />
      <Grid container >
        <Grid item md={6} >
          <Box
            sx={{
              position: 'relative', textAlign: "start",
              p: {xs: 3, md: 6},
              pr: {md: 0},
            }}>
            <Typography fontSize={{xs: 26, md: 50}} sx={{fontWeight: '900'}} component="h1" variant="h3" color="inherit" gutterBottom>
              {title}
            </Typography>
            <Typography fontSize={{xs: 16, md: 22}} sx={{fontWeight: '600'}} variant="h5" color="inherit" paragraph>
              {description}
            </Typography>
            <Link variant="subtitle1" href="#">
              <Button variant="contained" sx={{bgcolor: "#ab47bc"}}>
                {linkText}
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}