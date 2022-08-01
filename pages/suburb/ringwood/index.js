import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import Head from "next/head"
import { useEffect, useState } from "react"
import { CommonHero, PageSectionalHeading } from "../../../Components/components"
import { CheckCircleOutline } from '@mui/icons-material'

const Ringwood = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])
  return (
    <>
      <Head>
        <meta name="description" content="ringwood" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/suburb/ringwood/" />
        <title>ringwood</title>
      </Head>
      <CommonHero />
      <main>
        <section className="mt-md-4 mt-3">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={2}>
                  <Typography className="para">Visiting the dentist can be so intimidating and scary for some people. The big chairs, the buzzing sounds and x-ray machines can all be a little overpowering. However, the experience can be much easier to handle if you know what you are in for. Patients visit the dentist for different reasons. However, there are a few common procedures that everyone should know about. Here are the most dental treatments- all of which we can work on at Bayswater Dentist. </Typography>
                  <Typography className="para">So if you are not happy with your smile, at Bayswater Dentist, we have an array of techniques and tools at our disposal for improving the appearance of your smile. Bayswater Dentist near Ringwood offers a wide range of dental services, and our dentists are some of the finest dentists in Melbourne. </Typography>
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
                  <PageSectionalHeading title="Interesting Facts about Ringwood" variant="h2" align={width > 600 ? 'left' : 'center'} />
                  <Typography className="para">Ringwood is a suburb of Melbourne in Victoria, Australia. It has an estimated population of 19,144, according to the census done in 2021. Ringwood is the home to the Ringwood City Soccer Club, which was established back in 1953. Ringwood is also home to the Ringwood Hawks Basketball Club, which plays in the NBL 1. Ringwood is accessible through several major roads, making it easy for you to visit us at Bayswater Dentist since it is near the area.</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="mt-md-4 mt-3 bg-light">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={2}>
                  <PageSectionalHeading title="Some of the Dental Services Offered at Bayswater Dentist near Ringwood" variant="h2" align='center' />
                  <Box mt={3}>
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Teeth Whitening</Typography>
                    <Typography className="para">Teeth whitening procedures help to restore the smiles of people with dull, stained or discoloured teeth. The dentin of your teeth can become exposed when the outer layer of your teeth gets worn out by the effects of ageing or smoking.</Typography>
                  </Box>

                  <Box mt={3}>
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Toothaches</Typography>
                    <Typography className="para">In some rare cases, a toothache can be simply relieved by rinsing off your mouth to clear the debris. However, in many cases, a toothache can result from food remains stuck between the teeth. Avoid taking aspirin to relieve the pain because the dissolving aspirin can actually harm your gums. Always contact your dentist incase you experience any pain.</Typography>
                  </Box>

                  <Box mt={3}>
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Tooth Extractions</Typography>
                    <Typography className="para">Tooth extractions can sound so scary and painful. Truthfully, they are not the most pleasing of procedures. However, our dentist at Bayswater Dentist near Ringwood will do everything in their power to help you feel comfortable and safe. </Typography>
                  </Box>

                  <Box mt={3}>
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Dental Fillings</Typography>
                    <Typography className="para">Tooth cavities are patient&apos;s most common oral issue, and they are too easy to develop. For most tooth decay, a filling is the recommended treatment. Fortunately, filling cavities is a fast and easy procedure. You will be numbed, which mostly lasts for a few hours after the treatment is done. Usually, the entire procedure takes about an hour, and your tooth will be as good as new.</Typography>
                  </Box>

                  <Box mt={3}>
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Dentures</Typography>
                    <Typography className="para">In most instances, dentures are associated with ageing. Nonetheless, a lot of people may need dentures. Dentures are meant to replace one or many missing teeth in a natural way, and they are usually removable. Getting the custom-made dentures may take a bit of time. However, in the end, it is all worth it. </Typography>
                  </Box>
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
                  <PageSectionalHeading title="Bottom Line" variant="h2" align={width > 600 ? 'left' : 'center'} />
                  <Typography className="para">Your smile is an essential part of your personality. It defines you! That is why taking proper care of teeth and gums is so important. Do not wait any more time; call us to schedule an appointment at Bayswater Dentist today. We believe that everyone deserves a healthy, bright and beautiful smile.</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Ringwood