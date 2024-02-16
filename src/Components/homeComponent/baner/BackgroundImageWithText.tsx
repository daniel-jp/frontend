import {Avatar, Box, Grid, Stack, Typography} from '@mui/material';

import BanerCicle from './BanerCicle';


interface BackgroundImageWithTextProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
}

const BackgroundImageWithText: React.FC<BackgroundImageWithTextProps> = ({imageUrl, title, subtitle}) => {
  return (
    <Stack
      height={["350px", "450px", "550px"]}
      sx={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        justifyContent: "center",
        textAlign: "center", alignItems: "center",
        color: 'white', textShadow: '10px 0 20px black',
        filter: 'auto', brightness: '40%',
      }}>

      <Box paddingX={1} sx={{
        marginTop: -5, opacity: .5
      }}>
        <Typography fontSize={{xs: 30, md: 50}} sx={{fontWeight: 900}} gutterBottom>
          {title}
        </Typography>
        {subtitle && (
          <Typography sx={{fontWeight: 600, marginTop: -2, color: "#F7FAFC"}} fontSize={{xs: 20, md: 22}}>
            {subtitle}
          </Typography>
        )}
      </Box>




    </Stack>
  );
}
export default BackgroundImageWithText;