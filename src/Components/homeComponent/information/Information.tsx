import AcUnitIcon from '@mui/icons-material/AcUnit';
import FlatwareIcon from '@mui/icons-material/Flatware';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import {Stack} from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface FeaturedPostProps {

  description: string;
  image: string;
  imageLabel: string;
  title: string;

}

export default function Information({description, image, imageLabel, title}: FeaturedPostProps) {

  return (
    <div>
      {  /*    <Grid margin="auto">*/}
        <CardActionArea>
        <Card sx={{
          borderRadius: '0',
            display: 'flex',
            height: {xs: "100%", sm: "100%", md: 300, lg: 180}
        }}>
            <Stack>
              <CardMedia
                component="img"
                sx={{
                  display: {xs: 'none', sm: 'block', md: 'block', },
                  width: 400, height: "100%",
                  // Adicione o efeito de zoom ao passar o cursor (hover)
                  '&:hover': {
                    transform: 'scale(1.1)', // Ajuste o valor conforme necessário
                  },
                  transition: 'transform 0.3s ease', // Adiciona uma transição suave ao efeito de zoom

                }}
                image={image}
                alt={imageLabel} />
            </Stack>

            <CardContent sx={{flex: 1, textAlign: "justify", bgcolor: "#0ED699", width: "100%"}}>
              <AcUnitIcon sx={{color: "#97266D", fontWeight: "800"}} />
            <FlatwareIcon sx={{color: "#fff", fontWeight: "800"}} />

              <Typography fontWeight={600} variant="h6">
                {title}
              </Typography>

            <Typography variant="subtitle1" color={"#fff"} paragraph>
                {description}
            </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      {  /*    </Grid>*/}
    </div >
  );
}
