import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Button, CardActions} from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface FeaturedPostProps {
  post: {
    description: string;
    image: string;
    imageLabel: string;
    title: string;
    btText: string;
  };
}

export default function Feature(props: FeaturedPostProps) {
  const {post} = props;
  return (
    <div>
      <Grid sx={{
        position: "relative", boxShadow: 10,
        top: {xs: -55, sm: -75, md: -100, lg: -190},
      }}>
        <CardActionArea>
          <Card sx={{display: 'flex', textAlign: 'justify'}}>

            <CardMedia
              component="img"
              sx={{
                display: {xs: 'none', sm: 'block', }, width: "50%", // Adicione o efeito de zoom ao 
              }}
              image={post.image}
              alt={post.imageLabel}
            />
            <CardContent sx={{flex: 1, width: "50%", }}>
              <Typography component="h2" fontSize={{xs: "18px", sm: "22px", md: "32px"}}
                sx={{flex: 1, fontWeight: 800}}>
                {post.title}
              </Typography>

              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <CardActions>
                <Button size="small" variant="contained" color="success" sx={{px: 4, py: 1}}>
                  {post.btText} <ArrowForwardIcon />
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </CardActionArea>

      </Grid>
    </div >
  );
}
