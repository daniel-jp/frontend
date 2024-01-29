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
  };
}

export default function Feature(props: FeaturedPostProps) {
  const {post} = props;
  return (
    <div>
      <Grid sx={{
        position: "relative",
        top: {xs: -55, sm: -75, md: -100, lg: -190},
      }}>
        <CardActionArea component="a" href="#" >
          <Card sx={{display: 'flex', height: 400}}>
            <CardMedia
              component="img"
              sx={{display: {xs: 'none', sm: 'block', }, width: "50%", }}
              image={post.image}
              alt={post.imageLabel}
            />
            <CardContent sx={{flex: 1, width: "50%", }}>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>

              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>

            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>
    </div >
  );
}
