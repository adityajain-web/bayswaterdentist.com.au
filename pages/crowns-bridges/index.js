import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { CommonHero, InterestFree, PageSectionalHeading, ServiceSidebar, TNC } from '../../Components/components';
import pageImage1 from '../../public/CNB/dental crown and bridges.jpg'
import pageImage2 from '../../public/CNB/dental crown.jpg'
import pageImage3 from '../../public/CNB/dental crown and bridge 1.jpg'
import { useEffect, useState } from 'react';
import { CheckCircleOutline } from '@mui/icons-material'

const CrownBridges = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])
  return (
    <>
      <Head>
        <meta name="description" content="Crown and bridge for tooth replacement and missing teeth. We have the best dentist in Bayswater Dentist that provides the greatest dental services." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/crowns-bridges/" />
        <title>Crown and Bridge Treatment | Bayswater Dentist</title>
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
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading variant="h2" title="Crowns & Bridges" align="center" />
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage1} alt="dental implants" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Typography className='para'>If you are missing a tooth or a couple of them, getting a dental crown and bridge is the most affordable solution to restore your natural smile. Dentists rely upon these prosthetic devices in place of traditional removable options such as dentures which are bound to slide around or even fall out.</Typography>
                            <Typography className='para'>Dental crowns cap decaying or damaged teeth or placed on top of dental implants to replace missing teeth. On the other hand, bridges replace missing teeth with replacement teeth that rest on the gums where the missing teeth were. They have two or more crowns on each end to fuse to existing teeth or get attached to dental implants.</Typography>
                          </Grid>
                          <Grid item xs={12} className="pt-0">
                            <Typography className='para'>At Bayswater Dental, our goal is to perform restorations that feel and look natural with our custom-made crowns and bridges. Working with our dentists, we can evaluate the level of tooth damage and work on a solution that’s the best fit for your needs. All our bridges and crowns are spruced locally for quick turnaround and quality assurance. The result is undetectable dentistry with zero compromises on your comfort.</Typography>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-3'>
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading variant="h2" title="Crowns" align="center" />
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Typography className='para'>A tooth crown, also known as a tooth cap, helps repair the structure of damaged teeth by acting as a protective cap over the unsightly teeth that don’t necessarily require removal. They are convenient when dealing with decayed and broken teeth, with the cap helping in restoring functionality to the damaged teeth. The primary function of a dental crown procedure is to protect the cap of the damaged tooth.</Typography>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage2} alt="dental implants" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} className="pt-0">
                            <Typography className='para'>A dental cap can be made from various materials or a mixture of them, depending on your aesthetic preferences and functionality. There are different types of dental crowns ranging from gold and metal alloys, but these tend to get noticed as they don’t look much like your teeth. On the other hand, ceramic, acrylic, and porcelain crowns have a more natural teeth-like hue.</Typography>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-3'>
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading variant="h2" title="Benefits of dental bridges" align="center" />
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage3} alt="dental implants" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <List>
                              {
                                ["Help restore your natural smile and facial appearance.", "They can help to chew food more easily", "They prevent neighbouring teeth from naturally drifting out of position"].map(item => <ListItem key={item}>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "#117295" }} />
                                  </ListItemIcon>
                                  <ListItemText primary={item} />
                                </ListItem>)
                              }
                            </List>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-3'>
                    <Container maxWidth="xxl" className='p-3'>
                    <PageSectionalHeading variant="h2" title="Get in touch with Bayswater Dentist for Crown and Bridge Treatment." align="center" />
                    <Typography className='para'>If you need a dental crown bridge to correct your smile, call us today or schedule an appointment with us.</Typography>
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
                                  What are dental crowns and bridges?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Crowns are a suitable option to cap a damaged tooth or implant, while bridges are used to cover spaces of missing teeth.</Typography>
                                </Box>
                              </Box>
                            </Box>


                            <Box className="card">
                              <Box className="card-header" id="headingTwo">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                  Is a dental bridge suitable for the front teeth?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Yes. Bridges are ideal for the front teeth because they look just like a natural teeth. Besides, they are more affordable if you have multiple teeth missing.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingThree">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                  How much do a bridge and dental crown cost?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Cost of crown will be between $1200 to $1500 depending on the material used. The Cost of bridge will depend on the number of units and the material used. For a 3-unit bridge it normally ranges between $3400 to $3800. Every patient is different and hence the cost would vary depending on every circumstance.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingFour">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                  Which is better between a dental bridge or crown?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Dental bridges are the best option for missing teeth, while dental crowns are best for damaged teeth that can still work. Talk to our dentist at Bayswater Dentist to know which one best fits you.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingFive">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                  Are dental crowns and bridges painful?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>The procedure of putting dental crowns and bridges is almost painless because local anaesthesia is used. However, some people experience slight tenderness after the procedure, which could last for a few days.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingSix">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                  How long do dental bridges and crowns last?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>With good oral hygiene, bridges and dental crowns can last a lifetime. Be sure to see your dentist regularly for regular dental crown cleaning.</Typography>
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

export default CrownBridges