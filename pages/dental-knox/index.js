import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import Head from "next/head"
import { useEffect, useState } from "react"
import { CommonHero, PageSectionalHeading } from "../../Components/components"
import { CheckCircleOutline } from '@mui/icons-material'

const Knox = () => {

  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])
  return (
    <>
      <Head>
        <meta name="description" content="Bayswater Dentist near Knox, provides a full range of services for patients of all ages, including the elderly, adults, teens, and children. Contact us at (03)-9069 3100." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/dental-knox/" />
        <title>Professional Dental Care Clinic in Knox | Bayswater Dentist</title>
      </Head>
      <CommonHero />
      <main>
        <section className="mt-md-4 mt-3">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={2}>
                  <Typography className="para mb-3">Apart from general teeth cleaning and oral examination, there are numerous different types of dental services that Bayswater Dentist near Knox can offer- from cosmetic dentistry to wisdom teeth removal. At Bayswater Dentist, we provide a full range of services for patients of all ages, including the elderly, adults, teens, and children. We have a clinic near Knox- the Bayswater Dentist to better serve you and your entire family.</Typography>
                  <Typography className="para mb-3">Welcome to Bayswater Dentist, we are dedicated to offering the residents of the Knox suburb the highest quality of dental services for all their oral needs. We fully understand that visiting the Dentist may be a little stressful for some of our patients. Therefore, we have designed our clinic and procedures with the comfort and ease in mind of our patients. Irrespective of your reason for visiting us, you can be rest assured that every dental staff in Bayswater Dentist will make sure that your treatment is as effective, affordable, and pleasant as possible.  </Typography>
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
                  <PageSectionalHeading title="Interesting Facts about Knox" variant="h2" align="center" />
                  <Typography className="para mb-3">Knox is a local government area in Victoria in the eastern suburbs of Melbourne, Australia. It has an estimated size of 114 square kilometres and a population of about 165,147. In the early 1990s, Knox was one of the only four councils in Melbourne to survive the statewide amalgamation that occurred in Victoria. There are several bus routes that offer transport services around the suburb. The suburb also has four train stations which Metro Melbourne runs; therefore, getting to our Dental Office should not be a problem.</Typography>
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
                  <PageSectionalHeading title="Some of the Dental Services Offered by Our Dentist near Knox" variant="h2" align="center" />
                  <Box mt={3}>
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Dental Veneers</Typography>
                    <Typography className="para mb-3">Recently, most people have discovered the benefits of veneers. Dental veneers are thin covers placed over the teeth front surface. They are placed on teeth that are heavily stained, poorly shaped, or crooked. Also, they may be used to brighten teeth that have a yellow or grey cast.</Typography>
                  </Box>

                  <Box mt={3}>
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Invisalign</Typography>
                    <Typography className="para mb-3">Invisalign is a good way of straightening your crooked teeth without interfering with your day-to-day life. Invisalign helps to gradually straighten your teeth using a series of customised, removable aligners. Invisalign aligners are clear, which means they are nearly invisible and very comfortable to wear. </Typography>
                  </Box>

                  <Box mt={3}>
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Teeth Cleanings</Typography>
                    <Typography className="para mb-3">This is the most common reason that most people visit the Dentist. Our Dentist recommends getting professional teeth cleaning twice a year. Brushing your teeth will never be sufficient and efficient as the tools our dentists use to clean your teeth.</Typography>
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
                  <Typography className="para mb-3">At Bayswater Dentist, we want our patients to feel good about visiting the Dentist. By working with you to understand your unique situation, we can help you to achieve your health and appearance goals. This approach makes sure that you have enjoyed a positive experience and results. </Typography>
                  <Typography className="para mb-3">We invite you to visit us today or schedule an appointment with us to see the benefits of being part of the Bayswater Dentist patient family. We believe that the first step towards a healthy and beautiful smile starts with selecting a dentist you can rely upon. </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Knox