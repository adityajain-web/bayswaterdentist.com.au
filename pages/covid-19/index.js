import { Container, Grid, Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { CommonHero, PageSectionalHeading } from '../../Components/components'
import { CheckCircleOutline } from '@mui/icons-material'

const Covid = () => {

  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  return (
    <>
      <Head>
        <meta name="description" content="Learn how covid19 spreads and how to reduce the spread of coronavirus to keep yourself and others safe. Contact us or visit our clinic and we will be happy to help." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/covid-19/" />
        <title>Reduce the Spread of COVID-19 | Bayswater Dentist</title>
      </Head>
      <CommonHero grid={true} align={width > 600 ? 'left' : 'center'} />
      <main>
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Box mb={3}>
                    <PageSectionalHeading title="COVID-19 Precautions" variant="h2" align={width > 600 ? 'left' : 'center'} />
                    <Typography className='para'>During this COVID-19 pandemic, our dental experts deemed it fit to share with our clients some of the precautions our team takes to ensure the health and well-being of customers visiting our dental clinic.</Typography>
                    <Typography className='para'>Considering that we are in the health sector, our team is keenly monitoring updates as stipulated by the Australian Department of Health and the WHO to ensure the safety of our health personnel and that of our patients. Be sure to frequently check recommendations as soon as they are updated.</Typography>
                    <Typography className='para'>Our skilled and devoted team has undergone apposite training regarding protocol and safety measures that must be followed to enhance your safety every time you visit our dental clinic.</Typography>
                  </Box>
                  <Box mb={3}>
                    <PageSectionalHeading title="Sterilization Protocols and hygiene" variant="h2" align={width > 600 ? 'left' : 'center'} />
                    <Typography className='para'>We putour client's health first and observe the required sterilization and hygiene guidelines to prevent pathogen infections in our premises by disinfecting all our surroundings with disinfectants that are ADA-approved.</Typography>
                    <Typography className='para'>We use medical-grade disinfectants and cleaners to eliminate 100% of bacteria,viruses, and other pathogens.</Typography>
                    <Typography className='para'>We also integrate ADA-approved sterilization methods to ensure our carriers and instruments are pathogen and virus-free. In addition, we incorporate smart technology to guarantee that temperature recording is effective for eliminating pathogens</Typography>
                    <Typography className='para'>Our sterilization equipment go through regular maintenance and certification</Typography>
                    <Typography className='para'>Thorough and regular cleaning of all surfaces, such as furniture and toilets, to prevent contact infection outside the treatment room</Typography>
                    <Typography className='para'>In a case of exposure to any of our personnel or clients, we have placed safety protocols to be followed.</Typography>
                  </Box>
                  <Box mb={3}>
                    <PageSectionalHeading title="Does COVID-19 affect your dental appointment?" variant="h2" align={width > 600 ? 'left' : 'center'} />
                    <Typography className='para'>Before any appointment, the following precaution questions would be beneficial to our team:</Typography>
                    <Box mt={1}>
                      <List>
                        {
                          ["Have you beenin any chance outside the country within the last 30 days?", "Have you exhibitedany COVID-19 flu-like symptoms?", "Have you had direct contact with any individual exposed to COVID-19?"].map((item, index) => <ListItem key={`covidsec-3.${index}`}>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "#117295" }} />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>)
                        }
                      </List>
                    </Box>
                    <Typography className='para'>If any of the above situations apply to you, it will be an honour to reschedule your appointment until the next ideal time.</Typography>
                  </Box>
                  <Box>
                    <PageSectionalHeading title="How to help reduce the spread of coronavirus" variant="h2" align={width > 600 ? 'left' : 'center'} />
                    <Typography className='para'>It is only practical to observe the stated guidelines to ensure our well-being and ease the spread of the Corona Virus. Here are the recommended procedures by the WHO.</Typography>
                    <Box>
                      <List>
                        {
                          ["Thoroughly wash your hands using warm water as well as soap often for at least 20 seconds", "Sanitize your hands with 60% alcohol-based sanitizer in the absence of water and soap", "Avoid touching your face, nose, eyes, and mouth with unclean hands", "Maintain a minimum of six feet social distance every time you are in a crowded place", "When going out, make sure you cover your nose and mouth with a face mask", "Cough or sneeze into a handkerchief or tissue", "Dispose of used tissue immediately after use", "If you are sick, avoid going out", "Use not less than 70% alcohol solution as your disinfectant. Alternatively, you can improvise by mixing 1/3 cup of bleach with a gallon of water."].map((item, index) => <ListItem key={`covidsec-3.${index}`}>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "#117295" }} />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>)
                        }
                      </List>
                    </Box>

                    <Typography className='para'>Our hospital is always open to address any trepidations you may have concerning COVID-19 relative to your appointments. Just contact us or visit our clinics,and we will be honored to help you.</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Covid