import {Avatar, Box, Grid, Stack} from '@mui/material';

const banerProps = [

  {
    id: 1,
    alt: "Chicken",
    avatar: "/public/assets/homeImg/baner/banerC.png"
  }
  , {
    id: 2,
    alt: "Beaaf2",
    avatar: "/public/assets/homeImg/baner/banerC1.png"
  }
  ,
  {
    id: 3,
    alt: "Beaaf3",
    avatar: "/public/assets/homeImg/baner/naner3.png"
  }
];



export default function Baner() {
  return (
    <Grid sx={{flexGrow: 1, height: 190}}
      gap={2} container justifyContent={"center"} >
      {banerProps.map((value) => (
        <Grid key={value.id} item sx={{
          position: "relative",
          top: {xs: -50, sm: -70, md: -95, lg: -150},
        }}>
          <Stack borderRadius={"100%"}
            sx={{
              backgroundColor: "#1A202C",
              height: {xs: 100, sm: 140, md: 190, lg: 300},
              width: {xs: 100, sm: 140, md: 190, lg: 300},
              alignItems: "center", justifyContent: "center",
              borderRadius: "100%", padding: "4px",
            }}>
            <Avatar sx={{
              width: "100%", height: "100%"
            }} alt={value.alt} src={`${value.avatar}`} />
          </Stack>
        </Grid>
      ))}


    </Grid >
  )
}
