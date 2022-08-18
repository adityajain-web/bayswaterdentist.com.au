import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import Head from "next/head"
import { useEffect, useState } from "react"
import { CommonHero, PageSectionalHeading } from "../../Components/components"
import { CheckCircleOutline } from '@mui/icons-material'

const Heathmont = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  return (
    <>
      <Head>
        <meta name="description" content="Looking for dental services personalised to the needs? At Bayswater Dentist, adjacent to Heathmont, provide top-notch services designed to enhance your dental appearance." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/heathmont-dental/" />
        <title>Heathmont Family Dental Clinic | Bayswater Dentist</title>
      </Head>
      <CommonHero />
      <main>
        <section className="mt-md-4 mt-3">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid xs={12} md={10} className="mx-auto">
                <Box py={2}>
                  <Typography className="para mb-3">Do you need dental services personalised to your needs? Then you’ve come to the right place! At Bayswater Dentist, adjacent to Heathmont, we provide top-notch services designed to enhance your dental appearance, give you the smile you want, and restore your confidence. Some of these services, such as dental implants, are guaranteed to last for a long time, all at affordable prices. </Typography>
                  <Typography className="para mb-3">Heathmont is a suburb located in Melbourne, Victoria, Australia, 24 km east of Melbourne’s Central Business District. As of 2021, Heathmont has a recorded population of 9,933 people, up from 8,787 people in 2001. That said, Heathmont is only a stone-throw away from Bayswater Dentist. </Typography>
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
                  <PageSectionalHeading title="Dental Services Offered by Bayswater Dentist in Heathmont" variant="h2" align="center" />
                  <Typography className="para mb-3" align="center">At Bayswater Dentist, we offer premium dental services, which include but are not limited to;</Typography>
                  <Box className="mt-3">
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Wisdom Teeth Removal</Typography>
                    <Typography className="para mb-3">Wisdom teeth, unlike your milk teeth, don’t need to be removed. However, certain instances can prompt you to have them removed. According to the Australian Dental Association, ‘‘Wisdom teeth that are causing problems or at high risk of causing problems in the future are best removed at a younger age’’. Failure to remove them can lead to severe dental issues such as bacterial infection and the development of Fluid-filled sacs (cysts). </Typography>
                    <Typography className="para mb-3">At Bayswater Dentist, we are here to prevent such infections from occurring. Our wisdom teeth removal services will improve your oral health and alleviate any pain and discomfort initially experienced. </Typography>
                  </Box>

                  <Box className="mt-3">
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Cosmetic Treatment</Typography>
                    <Typography className="para mb-3">Cosmetic dentistry is a myriad of procedures done to improve the appearance of your teeth.</Typography>
                    <Typography className="para mb-3">The procedures include;</Typography>
                    <Box>
                      <List>
                        {
                          ["Teeth Whitening.", "Inlays and Onlays.", "Dental Bonding.", "Dental Veneers", "Dental Crown.", "Dental Implants."].map(item => <ListItem key={item}>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "#117295" }} />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>)
                        }
                      </List>
                    </Box>
                    <Typography className="para mb-3">Thanks to dental treatment advancements, these cosmetic procedures have become highly affordable, and it won’t cost you thousands to achieve your ideal smile. </Typography>
                    <Typography className="para mb-3">When you visit our Dentist, Hearhmount, we will examine your oral health, listen to your needs and requirements then take you through each procedure until you find the best one for you.</Typography>
                  </Box>

                  <Box className="mt-3">
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Invisalign</Typography>
                    <Typography className="para mb-3">Invisalign is largely gaining popularity not just in kids and teenagers but also in young adults, and there’s a good reason for this. Invisalign is the modern version of traditional braces but much better, more convenient, and effective. While not everyone qualifies for Invisalign, these clear aligners are ideal for people who want a comfortable and almost invisible option to straighten their teeth.</Typography>
                    <Typography className="para mb-3">Additionally, the average period of using the clear aligners is between 6-12 months which restores your freedom to eat whatever you want and still get the best results. Before you book an appointment for Invisalign, we recommend you have a checkup done at Bayswater Dentist to ensure you qualify for the procedure.  </Typography>
                  </Box>

                  <Box className="mt-3">
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Emergency Dental Services</Typography>
                    <Typography className="para mb-3">Cases of dental emergencies in Australia are becoming increasingly common. These emergencies range from; </Typography>
                    <Box>
                      <List>
                        {
                          ["Knocked-out teeth", "Broken orthodontics", "Toothache", "Lost filling", "Chipped teeth", "Bleeding", "Abscess"].map(item => <ListItem key={item}>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "#117295" }} />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>)
                        }
                      </List>
                    </Box>
                    <Typography className="para mb-3">What’s worse? These emergencies can happen to anyone at any time, even at night.</Typography>
                    <Typography className="para mb-3">Seeking immediate treatment is necessary to prevent future damage. As such, you need to have your to-go Emergency Dental Heathmount. At Bayswater Dentist, we are available around the clock to provide you with the urgent care you need should you find yourself in any of the above emergencies.</Typography>
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
                <PageSectionalHeading title="Conclusion" variant="h2" align={width > 600 ? 'left' : 'center'} />
                  <Typography className="para mb-3">A simple visit to your Dentist near Heathmount can help you avoid costly and unwanted dental problems such as bacterial infection. We offer quality services in emergency dental care, cosmetic treatment, Invisalign, and wisdom teeth removal, among others. In case you require services outside the ones mentioned, visit us today for further consultation. </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Heathmont