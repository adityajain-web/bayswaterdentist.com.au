import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { CommonHero, InterestFree, PageSectionalHeading, ServiceSidebar, TNC } from '../../Components/components';
import pageImage1 from '../../public/Dental-Emergency/dental emergency 1.jpg'
import pageImage2 from '../../public/Dental-Emergency/dental emergency 2.jpg'
import pageImage3 from '../../public/Dental-Emergency/dental emergency (1).jpg'
import { useEffect, useState } from 'react';
import { CheckCircleOutline } from '@mui/icons-material'

const DentalEmergency = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])
  return (
    <>
      <Head>
        <meta name="description" content="For all type of dental emergency, you can visit Bayswater Dentist. We offer emergency dental care, dental implants, wisdom teeth and other dental treatments." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/dental-emergency/" />
        <title>Emergency Dentist At Bayswater - Dental Emergency | Bayswater Dentist</title>
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
      <CommonHero align="center" />
      <main>
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Box py={5}>
                <Grid container spacing={10}>
                  <Grid item xs={12} lg={4} className="order-1 order-xl-0" style={{ height: "inherit" }}>
                    <ServiceSidebar />
                  </Grid>
                  <Grid item xs={12} lg={8} className="order-0 order-xl-1">
                    <section>
                      <Container maxWidth="xxl" className='p-3' >
                        <PageSectionalHeading title="Dental Emergency in Bayswater Dentist" variant="h2" align='center' />
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage1} alt="Dental emergency" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Typography className='para'>What counts as a dental emergency? What do you do when you experience one? At Bayswater Dentist, we are cognizant of the fact that providing immediate attention to dental emergencies can not only prevent further damage to your oral health but can even save a tooth.</Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-3 bg-light' style={{ borderRadius: "0.8rem" }}>
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading title="What is a dental emergency?" variant="h2" align={width > 600 ? 'left' : 'center'} />
                        <Typography className="para">A dental emergency is any situation where a dental problem needs immediate intervention to either save a tooth that’s at risk of falling out, stop dental infection, or relieve dental pain. You will need to immediately visit an emergency dental hospital or seek the services of an emergency dentist if:</Typography>
                      </Container>
                    </section>
                    <section className='mt-3'>
                      <Container maxWidth="xxl" className="p-3" >
                        <PageSectionalHeading title="Your tooth is cracked or broken." variant="h2" align='center' />
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Typography className='para'>Physical trauma on your teeth caused by a hard impact can crack or break them, especially if you are involved in vigorous activities, including sports. Before you or your loved ones seek emergency dental services, you will need to take immediate safety measures depending on how extensive the crack or break is. Use a cold compress to relieve the pain on your way to an emergency dental clinic. At Bayswater Dentist, we offer emergency dental services even after regular business hours to cater to all your emergency dental care needs.</Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage2} alt="Broken tooth dental emergency" />
                            </Box>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-3'>
                      <Container maxWidth="xxl" className='p-3' >
                        <PageSectionalHeading title="You knocked out a tooth." variant="h2" align='center' />
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage3} alt="Dental emergency" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Typography className='para'>Direct impact or trauma can entirely or partially knock out your teeth from their sockets. In such a scenario, seeking emergency dental attention can help save your teeth. You can gently put the teeth back into their sockets on your way to the dentist. However, the same doesn’t apply to milk teeth, as this can cause additional dental problems.</Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-3 bg-light' style={{ borderRadius: "0.8rem" }}>
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading title="Physical impact on wisdom teeth" variant="h2" align={width > 600 ? 'left' : 'center'} />
                        <Typography className="para">Physical impact on wisdom teeth is more likely to impact a major nerve resulting in extreme pain and discomfort. You should seek emergency dental services immediately if you have experienced a blunt impact on your wisdom teeth.</Typography>
                        <Box className="mt-4">
                          <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Pain in the gum,jaw, or teeth</Typography>
                          <Typography className="para">Any kind of pain you experience in the oral cavity is part of a dental emergency because it could signal an underlying problem or possible infection. It’s recommended that you seek immediate dental attention to diagnose the issue, reduce tooth pain, gum pain, or jaw pain.</Typography>
                        </Box>
                        <Box className="mt-4">
                          <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>You lose a filling, crown, or bridge</Typography>
                          <Typography className="para">In the case of a crown, filling, or dental bridge falling out, your tooth is exposed to infections and needs urgent medical attention. You should see a dentist as soon as possible if you face any of these situations.</Typography>
                        </Box>
                        <Box className="mt-4">
                          <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Swelling on the jaw and gums</Typography>
                          <Typography className="para">If you have a swelling in the jaw or gum, it could be a sign of underlying infection and other dental problems that may warrant an emergency visit to the dentist to rule out risks.</Typography>
                        </Box>
                        <Box className="mt-4">
                          <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Dental emergency at Bayswater Dentist</Typography>
                          <Typography className="para">Failure to seek an immediate dental emergency can lead to teeth loss and severe dental problems. In case your tooth breaks due to disease or injury, our dentists will help you alleviate the pain and suggest the right option to save the tooth. Similarly, knocked-out teeth can be embedded back into the gap to have your teeth looking and functioning normally once the treatment is done. In case the gums develop pain in the teeth, there’s a risk of tooth abscess, which can become severe if left unchecked. You should let your dentist know as soon as you can to reduce the risk of irreparable tooth damage.</Typography>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-4'>
                      <Container maxWidth="xxl">
                        <PageSectionalHeading title="What to expect at Bayswater Dentist" variant="h2" align={width > 600 ? 'left' : 'center'} />
                        <List>
                          {
                            ["Cost effective/Affordable consultation and treatment", "Friendly professional experts", "Modern treatment options", "Flexible appointments according to your needs", "No hidden charges"].map(item => <ListItem key={item}>
                              <ListItemIcon>
                                <CheckCircleOutline style={{ color: "#117295" }} />
                              </ListItemIcon>
                              <ListItemText primary={item} />
                            </ListItem>)
                          }
                        </List>
                        <Typography className="para">Call us today at Bayswater Dental for all your dental emergencies. Our team consists of expert professional dentists who will take proper care of you so you can smile again without pain. Affordable rates are guaranteed.</Typography>
                        <Typography className="para">We also provide emergency dental bulk bill services to patients aged 0 – 18 years who are Medicare Child Dental Benefits Scheme members.</Typography>
                      </Container>
                    </section>
                    <section className="mt-3">
                      <Container maxWidth="xxl" className="p-3">
                        <PageSectionalHeading title="Frequently Asked Questions (FAQ)" variant="h2" align='center' />
                        <Box mt={1}>
                          <Box className="accordion" id="accordionExample">
                            <Box className="card">
                              <Box className="card-header" id="headingOne">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                  When is it a dental emergency?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Dental emergencies can be of several types, including a broken or cracked tooth, knocked out teeth, in case of impacted wisdom teeth, or if your jaw or gum is in pain.</Typography>
                                </Box>
                              </Box>
                            </Box>


                            <Box className="card">
                              <Box className="card-header" id="headingTwo">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                  Where can I find emergency dental care in Victoria?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>You can reach us at Bayswater Dentist, and we will help you ease your pain and offer the right treatment. Our dental emergency care is more affordable.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingThree">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                  Can Emergency Departments help with a dental emergency?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Emergency roomshave limitedtraining in handling dental problems. However, they can help you relieve pain by providing pain killers or antibiotics as you wait for dental emergency services.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingFour">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                  How can I relieve unbearable tooth pain?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Over-the-counter medications and a saltwater rinse can reduce pain if you can’t see a dentist right away.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingFive">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                  How can I numb my tooth pain?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>A cold compress is a good pain reliever before accessing dental clinic services. Try rubbing the ice on the space for a few minutes to numb the area.</Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-3'>
                      <Container maxWidth="xxl" className="p-3">
                        <InterestFree />
                        <TNC />
                      </Container>
                    </section>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  )
}

export default DentalEmergency