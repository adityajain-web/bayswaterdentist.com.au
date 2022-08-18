import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import Head from "next/head"
import { useEffect, useState } from "react"
import { CommonHero, PageSectionalHeading } from "../../Components/components"
import { CheckCircleOutline } from '@mui/icons-material'

const Mooroolbark = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  return (
    <>
      <Head>
        <meta name="description" content="Bayswater Dentist in Mooroolbark provides cost-effective services to ensure you get the best services when you need them. For more Contact us at (03)-9069 3100." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/mooroolbark-dentist/" />
        <title>Family Dental Clinic In Mooroolbark | Bayswater Dentist</title>
      </Head>
      <CommonHero />
      <main>
        <section className="mt-md-3 mt-2">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={2}>
                  <Typography className="para mb-3">The cost of dental care in Australia is high leading to over 30% of the population missing out on regular dental care. This is mostly because dental services are provided by private and public dentists, and there&a
                    pos;s no standard fee for dentists. Hence, the costs charged for treatment vary across the state. </Typography>
                  <Typography className="para mb-3">Luckily, Bayswater Dentist in Mooroolbark provides cost-effective services to ensure you get the best services when you need them. </Typography>
                  <Typography className="para mb-3">Mooroolbark is a suburb located in Melbourne, Victoria, Australia, 31 km northeast of Melbourne&apos;s central business district. It is sacred territory for the Wurundjeri people but has now become home to people of all walks of life and has a recorded population of 23,059 people, according to the 2021 census. Mooroolbark is only 8.7 KM from Bayswater, equivalent to a 14 minutes’ drive. This means you can visit your dentist Wantirna anytime. </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="mt-md-3 mt-2 bg-light">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={2}>
                  <PageSectionalHeading title="Services Offered by Bayswater Dentist in Mooroolbark" align="center" variant="h2" />
                  <Typography className="para mb-3">At Bayswater Dentist, we provide quality and cost-effective services. Regardless of what you need, we are dedicated to serving you.
                    Some of our dental services include;</Typography>
                  <Box mt={3}>
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Dental Check-ups</Typography>
                    <Typography className="para mb-3">It is recommended that you get dental check-ups every six months. These check-ups ensure you get;</Typography>
                    <Box>
                      <List>
                        {
                          ["Professional teeth cleaning", "Early diagnosis and treatment of dental issues", "•	To save time and money in the long-run", "And to get professional advice on proper dental care, among others."].map(item => <ListItem key={item}>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "#117295" }} />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>)
                        }
                      </List>
                    </Box>
                    <Typography className="para mb-3">As such, if you want to avoid cases of gum disease and other oral problems, always visit your Bayswater dentist for regular check-ups and consultations.</Typography>
                  </Box>

                  <Box mt={3}>
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Dental Care for Toothaches</Typography>
                    <Typography className="para mb-3">If you have recently had dental work done, you might experience pain in the treated area. This pain will often last for a few days. However, you may also experience occasional sharp pain due to tooth decay, gum and bacterial infection, broken tooth, and repetitive motions such as clenching teeth. </Typography>
                    <Typography className="para mb-3">When this happens, visit your Emergency Dentist Wantirna for immediate care. Once the cause of the pain has been established, proper measures for treatment will be taken. </Typography>
                    <Typography className="para mb-3">In most cases, the dentist will prescribe some opioid medications to relieve the pain.</Typography>
                    <Typography className="para mb-3">For more severe pain such as that caused by a cavity, your dentist will carry out a root canal, filling, or removing the tooth if necessary.</Typography>
                  </Box>

                  <Box mt={3}>
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Dental Implants</Typography>
                    <Typography className="para mb-3">A dental implant procedure is done to place missing teeth. They involve the use of titanium to screws to support aesthetic crowns. </Typography>
                    <Typography className="para mb-3">Generally, there are three types of dental implants;</Typography>
                    <Box>
                      <List>
                        {
                          ["Endosteal- Most popular and secure", "Subperiosteal", "Zygomatic- Most complicated"].map(item => <ListItem key={item}>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "#117295" }} />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>)
                        }
                      </List>
                    </Box>
                    <Typography className="para mb-3">At Bayswater Dentist, we provide personalised dental implant procedures guaranteed to help restore your smile with a natural look. These implants are long-lasting, and you won have to worry about getting more dental work every few years. However, regular check-ups, care, and maintenance are required to avoid issues such as gum inflammation. </Typography>
                  </Box>

                  <Box mt={3}>
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Other services offered at Bayswater Dentist are</Typography>
                    <Box>
                      <List>
                        {
                          ["Cosmetic treatment", "Wisdom Teeth removal", "Invisalign", "Emergency Dental Care"].map(item => <ListItem key={item}>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "#117295" }} />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>)
                        }
                      </List>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="mt-md-3 mt-2">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={2}>
                  <PageSectionalHeading title="Conclusion" align={width > 600 ? 'left' : 'center'} variant="h2" />
                  <Typography className="para mb-3">Attempts are ongoing to make Dental care services more accessible and affordable throughout Australia. </Typography>
                  <Typography className="para mb-3">When you need a regular check-up, dental implant procedure, teeth whitening, cosmetic dentistry, or just want to treat that sharp toothache, contact Bayswater Dentist near Wantirna for professional services. </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Mooroolbark