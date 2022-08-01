import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import Head from "next/head"
import { useEffect, useState } from "react"
import { CommonHero, PageSectionalHeading } from "../../../Components/components"
import { CheckCircleOutline } from '@mui/icons-material'

const Vermont = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])
  return (
    <>
      <Head>
        <meta name="description" content="vermont" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/suburb/vermont/" />
        <title>vermont</title>
      </Head>
      <CommonHero />
      <main>
        <section className="mt-md-4 mt-3">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={2}>
                  <Typography className="para">Dental care is a very important aspect of your life, especially considering the fact that people will always judge you depending on the brightness of your smile. When judging your look, your smile is never left behind. Fortunately, there is a myriad of dental services and procedures you can enjoy today that will brighten your smile as well as make you feel confident. </Typography>
                  <Typography className="para">Our Bayswater Dentist near Vermont will help you improve the quality of your life. This is irrespective of whether you are missing some teeth, have irregularly shaped teeth, or have stained teeth. There are quite a number of dental services you can take advantage of to improve your looks and confidence in Bayswater Dentist near Vermont. </Typography>
                  <Typography className="para">Vermont is a suburb in Melbourne, Victoria in, Australia. The suburb is located 20km east of Melbourne Business District. 	The word Vermont means Green Hill. According to the census done in 2021, the suburb has a population of 10,993. Vermont was once used as the location of Vermont volunteer&apos;s roll of honour during world war 1. Today, the suburb has grown and hosts people from diverse ethnic groups, including Chinese, Hindi and Mandarin. Bayswater Dentist is a walking distance from the suburb. </Typography>
                  <Typography className="para">Here are some of them:</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={2}>
                  <Box>
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Dental Implants</Typography>
                    <Typography className="para">There are a number of reasons why you could be missing a tooth or some teeth. Some of these reasons include dental trauma, tooth decay and gum disease. However, irrespective of the reason you are missing your teeth, replacing them should be your first priority. Dental Implants are a tooth replacement option where the dentist uses a titanium post as the root and a dental crown as the tooth. Your dentist will create a strong and visually appealing replacement that will be hard for anyone to tell that you have installed a dental implant. </Typography>
                  </Box>
                  <Box mt={3}>
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Dental Veneers </Typography>
                    <Typography className="para">Dental veneers are a replacement treatment used to correct chipped, decayed or cracked teeth. They are used to correct only the front teeth. Today, dental veneers are a very popular dental procedure for people looking to brighten their smiles. They are natural looking, durable and simple to apply. Your dentist will show you various shades of brightness and choose the one that best suits you. </Typography>
                  </Box>

                  <Box mt={3}>
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Dental Bonding</Typography>
                    <Typography className="para">Dental bonding is effective for teeth with some small damages that, if not taken care of, can easily lead to extensive damage. It repairs chips, reduces the gap between your teeth or changes the colour or shape of your teeth. The procedure uses tooth-coloured composite resin to improve the appearance of your smile. </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="mt-md-4 mt-3">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={2}>
                  <PageSectionalHeading title="Bottom Line" variant="h2" align={width > 600 ? 'left' : 'center'} />
                  <Typography className="para">Many dental clinics offer different dental services, but only the best will help you achieve your desired results. Take into consideration factors such as the experience, academic qualification and training of the dentist you are looking to work with. We promise to offer you the best dental services at Bayswater Dentist near Vermont. Our dentist is well trained and has years of experience. We use state-of-the-art dental equipment to ensure that we provide unmatched services. Please make an appointment with us today!</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Vermont