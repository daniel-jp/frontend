import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Box, Card, Grid, Stack, Typography} from '@mui/material';

import BanerCicle from '../../Components/homeComponent/baner/BanerCicle';
import BannerComponent from '../../Components/homeComponent/baner/BannerComponent';
import HomeCardComp from '../../Components/homeComponent/card-home/HomeCardComp';
import Carousel from '../../Components/homeComponent/carousel/Carousel';
import Feature from '../../Components/homeComponent/feature/Feature';
import MainFeature from '../../Components/homeComponent/feature/MainFeature';
import Information from '../../Components/homeComponent/information/Information';
import Root from '../../layout/Root';
import BannerProps from '../../props/home/BannerProps';
import FeaturedProps from '../../props/home/FeaturedProps';
import InformationProp from '../../props/home/InformationProp';
import MainFeatureProps from '../../props/home/MainFeatureProps';
import CardProp from '../../props/home/PropsCard';

export default function index() {


  const homeCard = CardProp();
  const featureProp = FeaturedProps();
  const mainFeature = MainFeatureProps();
  const informationP = InformationProp();
  const bannerPrincipal = BannerProps();

  return (
    <>
      {/*bgcolor={"#122134"}*/}
      <Box bgcolor="#fff" sx={{
        justifyContent: "center",
      }}>

        <Stack>
          {
            bannerPrincipal.map((bannerP) => (
              <BannerComponent
                description={bannerP.description}
                image={bannerP.image}
                imageText={bannerP.imageText}
                linkText={bannerP.linkText}
                title={bannerP.title} />))
          }

        </Stack>

        { /*<BackgroundImageWithText
          imageUrl="/public/assets/homeImg/bg/baner1.jpg"
          title="Achahada votre cusine délicieuse"
          subtitle="Achahada est un organisme indépendant de contrôle et de certification de produits Halal"
        />*/}
        <Box>
          <BanerCicle />
        </Box>

        <Stack >
          {
            informationP.map((info) => (
              <Information
                description={info.description}
                image={info.image}
                imageLabel={info.imageLabel}
                title={info.title} />
            ))
          }

        </Stack>


        {/*<Box
          sx={{
            margin: 'auto',
            maxWidth: "100%",
            flexGrow: 1,
          }}>
          <Grid>

            <Grid item sx={{width: "600px", }}>
              <Img width={"100%"} height={"100%"} alt="complex"
                src="/public/assets/homeImg/baner/RectangleIm.png" />
            </Grid>

            <Grid item sm container sx={{backgroundColor: "gray", px: 2, bgcolor: "#0ED699"}}>
              <Grid item container direction="column">
                <Grid item sx={{color: "white"}} textAlign={"justify"}>

                  <Box width={"100%"} pt={1}>
                    <AcUnitIcon sx={{fontSize: 32, color: "#3182ce", fontWeight: "800"}} />
                    <Typography sx={{fontSize: 18, }} fontWeight={800} gutterBottom variant="subtitle1" component="div">
                      Boucherie en Ligne Halal et Livraison à Domicile Les Meilleurs Artisans Bouchers à votre service dans notre Boucherie et charcuterie halal en livraison.
                    </Typography>
                  </Box>

                  <Box width={"100%"}>
                    <MarkUnreadChatAltIcon sx={{fontSize: 32, color: "#3182ce", }} />
                    <Typography variant="body2" fontWeight={600} gutterBottom>
                      Viande Halal en ligne livraison partout en France en 24 h / 48 h
                      albutche.fr votre site viande halal en livraison! Découvrez les différentes viandes halal d 'exception et charcuterie halal disponibles dans notre boucherie halal en ligne.</Typography>
                  </Box>

                </Grid>
              </Grid>

            </Grid>
          </Grid>
        </Box>*/}

        <Stack>

          {
            mainFeature.map((main) => (
              <MainFeature
                Img={main.Img}
                imageText={main.imageText}
                text={main.text}
              />

            ))
          }

          <Root>
            <Grid>
              {featureProp.map((post) => (
                <Feature key={post.title} post={post} />
              ))}
            </Grid>



          </Root>
          <Card sx={{
              marginTop: {xs: -3, sm: -4, md: -6, lg: -12},
            borderRadius: '0', pb: 5, boxShadow: -0

            }}>
            <Root>
              <Typography variant="h5" component="div" mb={4}>
                PRODUITS FRAIS
              </Typography>
              <Grid container spacing={2} >
                {
                  homeCard.map((vcard) => (
                    <HomeCardComp
                      title={vcard.title}
                      content={vcard.content}
                      image={vcard.image}
                      price={vcard.price}

                    />
                  ))}
              </Grid>
            </Root>
          </Card>
        </Stack>







        <Stack sx={{
          bgcolor: "#F7FAFC", marginTop: 10, p: 6,
        }} >

          <Root>
            <Carousel />
          </Root>
        </Stack>
      </Box >
    </>
  )
}



