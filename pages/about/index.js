import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Head from 'next/head'
import Image from 'next/image';
import { CommonHero, PageSectionalHeading, TNC } from "../../Components/components";
import AboutVeneers from '../../public/About/veneers.jpg'
import { CheckCircleOutline, Circle } from '@mui/icons-material'
import about1 from '../../public/About/1.jpg';
import about2 from '../../public/About/2.jpg'
import about3 from '../../public/About/3.jpg'
import about4 from '../../public/About/4.jpg'
import { useEffect, useState } from 'react';

const About = () => {
const [width, setWidth] = useState();

useEffect(()=>{
  setWidth(window.innerWidth)
}, [width])

  return (
    <>
      <Head>
        <meta name="description" content="Meet our professional team of Bayswater dentists offering dental emergency treatment using new technologies that is tried and tested and following Covid-19 protocols." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/about/" />
        <title>About Us | Bayswater Family Dental Clinic | Bayswater Dentist</title>
        <script type="application/ld+json">
          {
            JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Bayswater Dentist",
              "image": "https://bayswaterdentist.com.au/img/logo.png",
              "@id": "",
              "url": "https://bayswaterdentist.com.au",
              "telephone": "0395460011",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "664 Mountain Hwy",
                "addressLocality": "Bayswater",
                "addressRegion": "VIC",
                "postalCode": "3153",
                "addressCountry": "AU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -37.8422484,
                "longitude": 145.2629995
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "10:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/Bayswater-Dentist-102893878969691",
                "https://twitter.com/bayswaterdentst",
                "https://www.instagram.com/bayswaterdentist/",
                "https://www.pinterest.com.au/bayswaterdentist"
              ]
            })
          }
        </script>
      </Head>
      <CommonHero grid={false} align="center" />
      <main>
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={12} md={10} className='mx-auto'>
              <Box py={5}>
                <section>
                  <Container maxWidth="xxl">
                    <Box>
                      <PageSectionalHeading title="Our Mission" variant="h2" align="center" />
                      <Typography className="para">At Bayswater Dentist, we delight in providing high-quality dental care while maintaining a gentle and professional touch. Our clinic’s mission is to ensure that all residents of Bayswater get the best dental care at all times.</Typography>
                    </Box>
                  </Container>
                </section>
                <section className='mt-md-4 mt-3'>
                  <Container maxWidth="xxl">
                    <Box>
                      <Grid container spacing={3}>
                        <Grid item xs={12} lg={6}>
                          <Box>
                            <Image src={AboutVeneers} alt="veneers" className='img-fluid rounded-lg' />
                          </Box>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <Box>
                          <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>How we achieve it:</Typography>
                            <Box>
                              <List>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="We create a loyal following among our patients and their families and friends by ensuring that they are always happy and satisfied with our dental services." />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="We respect and treat our dental patients Bayswater with fairness and in the same manner we would wish to be treated." />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="All our communications with the patient are always clear from the onset. The patient is made aware of all finance and treatment options to choose the best treatment option for their cases." />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="We provide dental care in a timely and comfortable manner to maximize the outcomes of each operation." />
                                </ListItem>
                              </List>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Container>
                </section>
                <section className='mt-md-4 mt-3'>
                  <Container maxWidth="xxl">
                    <Box>
                      <PageSectionalHeading title="Why Choose Us?" align="center" variant="h2" />
                      <Box>
                        <Typography className='subtitle' variant="h3" gutterBottom>We provide safe and clean practices.</Typography>
                        <Typography className="para">At Bayswater Dentist, we abide by Australian Dental Association (ADA) standards to provide clean and safe dental practice. You can rest assured that you and your family access the most pristine and safest dental care at Bayswater Dentist. We rely on the state-of-the-art sterilization tech to disinfect every instrument before every visit.</Typography>
                        <Box my={3}>
                          <Grid container spacing={3}>
                            <Grid item xs={12} md={6} lg={3}>
                              <Box>
                                <Image src={about1} alt="Bayswater Mission" className='img-fluid' />
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6} lg={3}>
                              <Box>
                                <Image src={about2} alt="Bayswater Mission" className='img-fluid' />
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6} lg={3}>
                              <Box>
                                <Image src={about3} alt="Bayswater Mission" className='img-fluid' />
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6} lg={3}>
                              <Box>
                                <Image src={about4} alt="Bayswater Mission" className='img-fluid' />
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                      <Box className='mt-md-4 mt-3'>
                        <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Best dental experience</Typography>
                        <Typography className='para'>Our Bayswater dentist and the team are fully qualified to provide you and your family the best dental care possible. On arrival at our clinic, our receptionists will welcome you with a smile and ensure that you are comfortable before any procedures begin. Our dental services require minimal waiting time, and you can schedule an appointment with us at your comfort.</Typography>
                      </Box>
                      <Box className='mt-md-4 mt-3'>
                        <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Detailed patient consultation</Typography>
                        <Typography className='para'>We believe that empowering the patient will help them make the most informed decisions regarding their dental care. At Bayswater Dentist, we start by examining each dental condition and then consult the patient about the diagnosis before bringing up the treatment options.</Typography>
                        <Typography className='para'>At every step of the treatment plan, we endeavor to fully inform our patients and learn as much as we can about their medical history and current medications that might affect the outcomes of dental care.</Typography>
                      </Box>
                      <Box className='mt-md-4 mt-3'>
                        <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Providing training and continuous education</Typography>
                        <Typography className='para'>At Bayswater Dentist, all our members fulfill their responsibility of pursuing more training and continuing their education by attending lectures, conventions, and dental seminars. All our teams stay up-to-date on new treatment procedures and technologies in dentistry to ensure that you and your family get the best dental care.</Typography>
                      </Box>
                      <Box className='mt-md-4 mt-3'>
                        <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Insurance and payment options</Typography>
                        <List>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "var(--blue)" }} />
                            </ListItemIcon>
                            <ListItemText primary='We accept major private dental insurances in Australia.' />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "var(--blue)" }} />
                            </ListItemIcon>
                            <ListItemText primary='You can pay via major credit cards such as MasterCard and Visa.' />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "var(--blue)" }} />
                            </ListItemIcon>
                            <ListItemText primary='We support interested free payment options, including Openpay, Denticare and Afterpay.' />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "var(--blue)" }} />
                            </ListItemIcon>
                            <ListItemText className='font-weight-bold' primary='Cash and EFTPOS.' />
                          </ListItem>
                          <List className="mt-n3 pl-md-5 pl-3">
                            <ListItem alignItems='center'>
                              <ListItemIcon>
                                <Circle style={{ color: "var(--navy)", fontSize: "0.8rem" }} />
                              </ListItemIcon>
                              <ListItemText primary="Department of Veterans' Affairs Dental scheme" />
                            </ListItem>
                            <ListItem alignItems='center'>
                              <ListItemIcon>
                                <Circle style={{ color: "var(--navy)", fontSize: "0.8rem" }} />
                              </ListItemIcon>
                              <ListItemText primary="Child Dental Benefits Schedule" />
                            </ListItem>
                            <ListItem alignItems='center'>
                              <ListItemIcon>
                                <Circle style={{ color: "var(--navy)", fontSize: "0.8rem" }} />
                              </ListItemIcon>
                              <ListItemText primary="Medical financial Guarantee" />
                            </ListItem>
                          </List>
                        </List>
                      </Box>
                    </Box>
                  </Container>
                </section>
                <section className='mt-md-4 mt-3'>
                  <Container maxWidth="xxl">
                    <Box>
                      <PageSectionalHeading title="New Technologies at Bayswater dental clinic" align="center" variant="h2" />
                      <Typography className='para'>In line with our mission to improve our overall dental service delivery, Bayswater Dentist has invested in the following technologies:</Typography>
                      <Box className='mt-md-4 mt-3'>
                        <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Trios 3 Shape dental intraoral scanner</Typography>
                        <Typography className="para">To provide high-quality impressions and with impressive accuracy, our dentists at Bayswater clinic have adopted 3Shape Trios dental intraoral scanners. The result is a significant dental restoration that’s also aesthetically appealing and looks natural. On top of lowering the procedure time, the technologies also cut down on the need for frequent adjustments and repairs. The patient also feels more comfortable compared to traditional impressions.</Typography>
                      </Box>
                      <Box className='mt-md-4 mt-3'>
                        <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Intraoral camera</Typography>
                        <Typography className="para">At Bayswater Dentist, we rely on intraoral cameras to make better and more precise diagnoses. The camera takes detailed pictures of your teeth, and it’s designed to fit in the mouth without much intrusion. Dentists can then analyse the photos to identify cavities and other dental issues such as gum disease. After the procedure, your dentist will discuss the problems with you and take you through the available treatment plans. After the dental operation, the intraoral camera is used to take more photos to compare the before and after the treatment.</Typography>
                      </Box>
                      <Box className='mt-md-4 mt-3'>
                        <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Digital x-ray</Typography>
                        <Typography className="para">With the recent advances in digital x-ray technologies, you no longer have to worry about ionizing radiation from such procedures. Our Bayswater dentist rely on digital x-rays, which emit way lower radiation, and they can be stored digitally for future sharing and referencing during referrals. The digital x-rays allow our dentists to make an informed diagnosis and providing the most effective treatment plan. Another advantage of digital x-rays over traditional x-rays is that you can ask your dentist at Bayswater Dentist to share with you all your x-rays when you need to get a second opinion.</Typography>
                      </Box>
                      <Box className='mt-md-4 mt-3'>
                        <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Soft tissue laser</Typography>
                        <Typography className="para">Soft tissue laser technologies come in handy when operating on soft tissues where focusing electronic laser beams on a target area gently removes the tissue without damaging adjacent tissues. At Bayswater Dentist, we rely on soft tissue laser technology in various procedures such as gingival contouring. The dentist relies on the laser beams to shape the gum tissue as needed. The technology is less invasive, and the adjacent deep tissues heal much faster as they are not damaged during the procedure.</Typography>
                      </Box>
                      <Box className='mt-md-4 mt-3'>
                        <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Advanced Sterilization techniques</Typography>
                        <Typography className="para">All our dental offices are sterilized to observe maximum hygiene at all times. Our Bayswater dentist utilizes ultrasonic cleaning and pressure sterilization to maintain maximum hygiene during every dental procedure. The clinic has numerous hand scrubbing spots for our staff and visitors to reduce the probability of any contamination.</Typography>
                      </Box>
                      <Box className='mt-md-4 mt-3'>
                        <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Amalgam filtration system</Typography>
                        <Typography className="para">Some dental procedures utilize harmful substances such as mercury and amalgam material, resulting in the public water system if not carefully filtered out. Our clinic relies on an amalgam filtration system to filter out these dangerous substances that would otherwise cause harmful side effects on the local population if left to drain out with the rest of the wastewater from the clinic.</Typography>
                      </Box>
                      <Box className='mt-md-4 mt-3'>
                        <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Nitrous oxide for dental patients’ comfort</Typography>
                        <Typography className="para">At Bayswater Dentist, we recognize that dental anxiety can make patients compromise their dental hygiene out of fear of the dentist’s seat. To help our patients curb their dental anxiety, we provide nitrous oxide sedation with powerful sedative properties that kick in immediately. On top of relieving pain, nitrous oxide makes patients relax during the procedure. The gas is administered via a mask, and the dentist can control how much of the gas gets mixed with oxygen to maintain the ideal sedation. The laughing effect wears out pretty quickly after the mask is withdrawn, allowing patients to resume their daily activities after the dental procedure.</Typography>
                      </Box>
                      <Box mt={2}>
                        <TNC />
                      </Box>
                    </Box>
                  </Container>
                </section>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  )
}

export default About