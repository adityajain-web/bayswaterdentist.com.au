import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import Head from "next/head"
import { useEffect, useState } from "react"
import { CommonHero, PageSectionalHeading } from "../../Components/components"
import { CheckCircleOutline } from '@mui/icons-material'

const Basin = () => {

  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])
  return (
    <>
      <Head>
        <meta name="description" content="Visit us at Bayswater Dentist near The Basin for all your dental needs. You will find some friendly faces that will give you a warm welcome. Contact us at (03)-9069 3100." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/affordable-dental-services-at-the-basin/" />
        <title>Family Dental Care Clinic In The Basin | Bayswater Dentist</title>
      </Head>
      <CommonHero />
      <main>
        <section className="mt-md-4 mt-3">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={2}>
                  <Typography className="para">With proper dental care, permanent teeth can last for a lifetime. You can reduce the risk of gum disease, tooth decay and tooth loss if you practice good dental hygiene, take a diet with low sugar and acid and use a mouth guard while engaging in sports. Also, it is important that you visit the dentist for a dental check-up after every six months. </Typography>
                  <Typography className="para">If you are in The Basin suburb and the neighbouring area, you can visit us at Bayswater Dentist. Our practice offers a number of dental specialities you and your family may require, including dental implants, braces, paediatric dental care and oral surgery. At our dental clinic, you will receive the highest level of dental care every step of the way. </Typography>
                  <Typography className="para">The Basin is a suburb in Australia, Melbourne in Victoria. It is located 31 km east of Melbourne Central Business District. According to the 2021 census, the suburb recorded a population of 4497. Before the European settlement, the suburb often was visited by Yarra Yarra as well as Bunurong people for hunting activities. Today the suburb has grown and has a number of interesting things to do, including mountain hikes and garden and flower events. Bayswater Dentist is near the suburb. </Typography>
                  <Typography className="para">Here are some of our dental services at Bayswater Dentist near The Basin</Typography>
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
                  <Box>
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Professional Teeth Cleaning</Typography>
                    <Typography className="para">It is paramount to brush and floss your teeth daily. However, no matter how you do it, there are some plaque and tartar that must be removed professionally by a dentist. The dentist will use a rotating brush and other dental instruments to clean and polish your teeth. Professional dental cleaning will help you in treating and preventing gum disease. </Typography>
                  </Box>

                  <Box mt={3}>
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Dental Check-Ups</Typography>
                    <Typography className="para">A regular dental check-up is an important part of your oral health. During a dental check-up, your dentist will have an opportunity to ask you about general health as well as medications. In some cases, general health might affect oral health. Also, some medications can affect the health of your mouth.</Typography>
                    <Typography className="para">Also, during the check-up, your dentist will use some dental instruments to look for issues such as gum disease and tooth decay. The soft tissue of the mouth, such as lips, tongue and palate, will also be examined for signs of oral cancer. Your dentist might also check on the condition of your jaws and lymph nodes. </Typography>
                    <Typography className="para">One of the major benefits of regular dental check-ups is that the dentist can arrest some dental problems before they become severe. </Typography>
                  </Box>

                  <Box mt={3}>
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Dental Emergency</Typography>
                    <Typography className="para">Dental Emergencies can occur any time of the day or night and ranges from a knocked-out tooth to agonizing toothache. If you encounter such a problem, you will require emergency services immediately to either alleviate the pain or save your tooth. It is vital to understand the difference between a dental situation that can wait until morning and one that requires emergency services. A dental emergency includes knocked out tooth, chipped or broken tooth, lost filling or crown, abscess and bleeding after tooth extraction.</Typography>
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
                  <Typography className="para">Visit us at Bayswater Dentist near The Basin for all your dental needs. You will find some friendly faces that will give you a warm welcome. We will also make sure that you are comfortable and enjoy your dental visit. Call us today!</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Basin