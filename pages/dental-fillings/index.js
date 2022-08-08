import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { BlueBtn, CommonHero, InterestFree, PageSectionalHeading, ServiceSidebar, TNC } from '../../Components/components';
import pageImage1 from '../../public/Dental-Fillings/Dental Filling1.jpg'
import pageImage2 from '../../public/Dental-Fillings/dental fillings2.jpg'
import pageImage3 from '../../public/Dental-Fillings/dentists-treat-patients-teeth.jpg'
import { useEffect, useState } from 'react';
import { CheckCircleOutline } from '@mui/icons-material'

const DentalFillings = () => {

  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  return (
    <>
      <Head>
        <meta name="description" content="What are dental fillings? understand the suitable dental filling and types including teeth, amalgam, dental cement & composite fillings. Contact us for more details." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/dental-fillings/" />
        <title>Dental Filling Treatment | Tooth Filling | Bayswater Dentist</title>
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
                        <PageSectionalHeading title="Types of Dental Fillings" variant="h2" align='center' />
                        <Typography className='para'>You are probably familiar with dental filling, such as gold fillings and dental amalgam filling (Discontinued nowadays). However, there are more types of filing options available for you. If you happen to have a tooth cavity, here are different types of cavity filling at Bayswater Dental Clinic.</Typography>
                      </Container>
                    </section>
                    <section>
                      <Container maxWidth="xxl" className='p-3' >
                        <PageSectionalHeading title="Composite Fillings" variant="h2" align='center' />
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage1} alt="Dental filling" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Typography className='para'>Composite fillings are made by mixing plastic and fine glass particles. The most interesting thing is that they are a good match for your teeth. Besides, composite tooth filling cost is lower than other options. However, they are temporary tooth filling options, and dental filling removal may be required someday.</Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section>
                      <Container maxWidth="xxl" className='p-3' >
                        <PageSectionalHeading title="Porcelain Filling" variant="h2" align='center' />
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Typography className='para'>Compared to composite fillings, Porcelain fillings can last for about seven years. However, dental pricing in this type of cavity treatment has a wide range. That being said, you can get a preferred filling at a price you can afford. Also, the filling matches your teeth’ colour and doesn’t get easily stained compared to composite fillings.</Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage2} alt="Composite Filling" />
                            </Box>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-3 bg-light' style={{ borderRadius: "0.8rem" }}>
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading title="Gold Fillings" variant="h2" align={width > 600 ? 'left' : 'center'} />
                        <Typography className="para">In terms of dental filling price, gold fillings are a bit expensive compared to other dental cement filling materials. However, they are durable as well and last up to 15 years. Besides, they suit individuals who prefer their colouring and shiny nature even though they don’t resemble the surrounding teeth.</Typography>
                      </Container>
                    </section>
                    <section>
                      <Container maxWidth="xxl" className='p-3' >
                        <PageSectionalHeading title="The Procedure and Recovery" variant="h2" align='center' />
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage3} alt="Dentist treats patients teeth" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Typography className='para'>Placing a dental filling is not a difficult task. We begin by cleaning the cavity, then we place and then secure your desired dental gap fillings material. The cavity removal process may vary according to the filling material you choose. However, this painless cavity treatment process is quick and with no discomfort, stress, or pain.</Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={12} className="pt-0">
                          <Typography className="para">Recovering from cavities and fillings requires minimal time, thanks to our doctors, who are proficient at their work. You have no complications while eating after the cavity treatment procedure though at first, you may have incidences of some temperature sensitivity. However, it only takes a few days before the sensitivity.</Typography>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-3'>
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading title="Make an Appointment" variant="h2" align={width > 600 ? 'left' : 'center'} />
                        <Typography className="para">If you have missed some dental examinations for a while or think your tooth or teeth have a cavity, please contact Bayswater Dentist and schedule an appointment. Our dental team will help you find an appropriate date and time for your visit.</Typography>
                        <Box mt={2}>
                          <BlueBtn navlink={true} link="/book/" text="BOOK NOW" />
                        </Box>
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
                                  What is Dental Filling?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Dental filling refers to fixing or repairing a cavity in a damaged tooth or teeth. The dental filling between teeth prevents your nerves from being exposed and leading to various teeth complications. As a result, your teeth are prevented from decaying further, as well as eliminating discomfort, stress, and pain.</Typography>
                                </Box>
                              </Box>
                            </Box>


                            <Box className="card">
                              <Box className="card-header" id="headingTwo">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                  How long does a dental filling last?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Depending on the type of filling, the durability of dental filling or bonding varies. Gold and Amalgam filling can vary last for about 15 years. On the other hand, Porcelain and composite filling can stay intact between 5 and 7 years.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingThree">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                  Can you get a dental filling while pregnant?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Yes. Most dental processes, including dental filling, can be safely done during pregnancy. Still, beforehand make sure you speak with your dentist.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingFour">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                  Which tooth filling is the best?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>The type of dental filling used depends on your preferences and needs, the most common and durable one being tooth-coloured composite filling. This type also improves your aesthetic. It can also be done on the same day.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingFive">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                  What material makes dental fillings?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>The dental filling comes in a myriad of selections, such as gold, composite resin, silver, and porcelain fillings.</Typography>
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

export default DentalFillings