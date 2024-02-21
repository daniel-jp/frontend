import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface FeaturedPostProps {

  date: string;
  description: string;
  image: string;
  imageLabel: string;
  title: string;

}

export default function DecouvFeatuere({date, description, image, imageLabel, title, }: FeaturedPostProps) {


  return (
    <Grid item xs={12} md={6} py={4} sx={{height: "50%"}} >
      <CardActionArea>
        <Card sx={{display: 'flex', borderRadius: 0, }}>
          <CardContent sx={{flex: 1, width: "50%", textAlign: "justify"}}>
            <Typography component="h2" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{display: {xs: 'none', sm: 'block'}, width: "50%", }}
            image={image}
            alt={imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}