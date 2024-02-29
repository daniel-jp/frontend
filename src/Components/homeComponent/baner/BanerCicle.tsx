import {Avatar, Grid, Stack} from '@mui/material';

const banerProps = [

  {
    id: 1,
    alt: "Chicken",
    avatar: "../../assets/homeImg/baner/banerC.png"
  }
  , {
    id: 2,
    alt: "Beaaf2",
    avatar: "../../assets/homeImg/baner/banerC1.png"
  }
  ,
  {
    id: 3,
    alt: "Beaaf3",
    avatar: "../../assets/homeImg/baner/naner3.png"
  }
];



export default function Baner() {
  return (
    <Grid sx={{flexGrow: 1, height: 145}}
      gap={2} container justifyContent={"center"} >
      {banerProps.map((value) => (
        <Grid key={value.id} item sx={{
          position: "relative",
          top: {xs: -80, md: -145},
        }}>
          <Stack 
            sx={{

              height: {xs: 100, md: 240},
              width: {xs: 100, md: 240},
              alignItems: "center", justifyContent: "center",
              borderRadius: "100%", padding: "4px",
            }}>
            <Avatar sx={{
              '&:hover': {transform: 'scale(1.1)', },
              transition: 'transform 0.5s ease',
              width: "90%", height: "90%"
            }} alt={value.alt} src={`${value.avatar}`} />
          </Stack>
        </Grid>
      ))}


    </Grid >
  )
}
