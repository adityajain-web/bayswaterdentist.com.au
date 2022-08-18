import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { CommonHero, InterestFree, PageSectionalHeading, ServiceSidebar, TNC } from '../../Components/components';
import pageImage1 from '../../public/Root-Canal/Root Canal.jpg'
import pageImage2 from '../../public/Root-Canal/Why-root-canal.jpg'
import pageImage3 from '../../public/Root-Canal/Root Canal 1.jpg'
import { useEffect, useState } from 'react';
import { CheckCircleOutline } from '@mui/icons-material'


const RootCanal = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])
  return (
    <>
      <Head>
        <meta name="description" content="If you are about to have root canal treatment, you might be feeling apprehensive. If so, visit Bayswater Dental Clinic we will make sure you have painless treatment." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/root-canal/" />
        <title>Root Canal Treatment | Root Canal Dentist | Bayswater Dentist</title>
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
                        <PageSectionalHeading variant="h2" title="Root Canal in Bayswater" align="center" />
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage1} alt="Root Canal in Bayswater" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Typography className='para'>As a proponent of promoting dental health, we advise our patients on the benefits of root canal treatment. This treatment is an easy and simple way to treat root canal infections, damage, or decay and, most importantly, save your teeth. Helping you keep your teeth is our number one priority. As the leading root canal treatment dental clinic, we have a good number of clients who have come to us based on the positive reviews by people who have used our services and helped spread the word about our exemplary services.</Typography>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-3 bg-light' style={{ borderRadius: "0.8rem" }}>
                      <Container maxWidth="xxl" className='p-3'>
                        <Box>
                          <PageSectionalHeading title="What is the Root Canal?" variant="h2" align={width > 600 ? 'left' : 'center'} />
                          <Typography className='para'>The root canal is the space within the root of a tooth. It is comprised of the pulp chamber that contains nerves, connective tissue, and blood vessels that assist in the growth and development of the tooth roots by providing nutrients. Tooth cavities expose the tooth to bacteria causing infections and the formation of abscesses which can cause inflammation and severe root canal pain. Delaying root canal treatment can make the tooth highly sensitive, painful and increase the likelihood of bone loss. To treat this, a root canal procedure is a way to go;</Typography>
                        </Box>
                        <Box mt={4}>
                          <PageSectionalHeading title="Root Canal Treatment procedure" variant="h2" align={width > 600 ? 'left' : 'center'} />
                          <Typography className='para'>Root canal therapy comprises of three stages;</Typography>
                          <Box mt={4}>
                            <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Step 1: Removing the pulp</Typography>
                            <Typography className='para'>The first step involves removing any decay and dead nerve in your tooth. At this stage, our root canal dentist puts you under anaesthesia so that you can access the soft tissue in the middle of the tooth.</Typography>
                            <Typography className='para'>There is very little pain involved with the numbing sensation taking effect immediately so that the area with the tooth decay can be worked on. An incision is made through the tooth’s top to reach the dead pulp tissue.</Typography>
                          </Box>
                          <Box mt={4}>
                            <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Step 2: Cleaning the root canal</Typography>
                            <Typography className='para'>The root canal specialist then cleans and sterilizes the root chambers using certain chemicals that help flush out the debris. This step also involves measuring the root’s length using a root canal x-ray that has a tiny wire. The cleaning process is performed using mechanically driven files to help maximize your comfort.</Typography>
                          </Box>
                          <Box mt={4}>
                            <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Step 3: Adding the crown</Typography>
                            <Typography className='para'>After the chamber has been decontaminated, it is filled with adhesive cement to completely seal the canals. The cap covering the tooth is made of a rubber-like material that hardens and covers the tooth to prevent bacterial infection. The tooth becomes very fragile and sensitive after the filling, which is why the root canal crown is important since it prevents it from fracturing after root canal treatment.</Typography>
                          </Box>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-3'>
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading title="When Do You Need a Root Canal?" variant="h2" align='center' />
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Typography className='para' dangerouslySetInnerHTML={{ __html:`Some of the <a href="/blog/symptoms-that-you-need-a-root-canal-treatment/">root canal symptoms</a> that indicate that you are in need of root canal treatment include:`}} />;
                            <List>
                              {
                                ["Tooth paining when you chew", "Gum or facial swelling", "Teeth being too sensitive to hot or cold drinks", "Presence of puss that sips into your mouth", "The appearance of a large cavity", "Increased tenderness and swelling of lymph nodes", "Foul mouth taste that does not go away even after you brush.", "Greying or discoloration of the tooth"].map(item => <ListItem key={item}>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "#117295" }} />
                                  </ListItemIcon>
                                  <ListItemText primary={item} />
                                </ListItem>)
                              }
                            </List>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage2} alt="Five signs root canal" />
                            </Box>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-3'>
                    <Container maxWidth="xxl" className='p-3'>
                    <PageSectionalHeading title="When to Contact a Dentist" variant="h2" align='center' />
                    <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage3} alt="root canal treatment" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                          <Typography className='para'>If you experience any of the outlined symptoms above, it is advisable to make an appointment with us at Bayswater Dentist. Always remember that delaying treatment can have a negative impact on your oral health. An early diagnosis will help you avoid extensive treatment and save your tooth.</Typography>
                          </Grid>
                          <Grid item xs={12} className="pt-0">
                          <Typography className='para'>Our goal at Bayswater is to get you back on track, using advanced technology that increases the procedure’s chances of success. We make effort to make sure that you receive the value for your money by providing you with options after a root canal that you can adopt to improve your oral health.</Typography>
                          <Typography className='para'>We also provide laughing gas to help ease any anxiety you might have about the root canal process.</Typography>
                          </Grid>
                        </Grid>
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
                                  <button className="btn font-weight-bold shadow-none btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                  Do root canals hurt?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Since you are under anaesthesia, a root canal is not very painful. However, the procedure may cause some irritation around the surrounding gums and connected nerves because root canal filling is a major procedure. Any lingering pain after the process can be controlled with over-the-counter pain killers to help minimize the discomfort.</Typography>
                                </Box>
                              </Box>
                            </Box>


                            <Box className="card">
                              <Box className="card-header" id="headingTwo">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn font-weight-bold shadow-none btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                  Will a simple cracked tooth require a root canal treatment?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Possibly. A crack may appear small but may be extended into the pulp, which will become infected and inflamed. The root canal filling helps prevent further cracking that may cause severe pain and teeth sensitivity. However, if the crack extends all the way into the gum line, an extraction is necessary.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingThree">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn font-weight-bold shadow-none btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                  How much does root canal treatment cost?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>The average cost of a root canal treatment in Australia is usually from $900 to $1500. The price varies depending on the procedure’s complexity and the specific tooth.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingFour">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn font-weight-bold shadow-none btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                  How long does the root canal last?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>The amount of time taken by this procedure depends on the details of the process and the type of tooth involved. However, on average, the process may require 30 to 90 minutes to compete and either 2 or 3 visits.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingFive">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn font-weight-bold shadow-none btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                  How long before I can eat after root canal treatment?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>After a root canal, you must wait for the numbness to subside before consuming anything. And only eat soft foods for several days to avoid damaging the tooth.</Typography>
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

export default RootCanal