import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography, IconButton, Card, CardMedia, CardContent, Button,  } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { CommonHero, InterestFree, PageSectionalHeading, ServiceSidebar, TNC } from '../../Components/components';
import pageImage1 from '../../public/Scale-Clean/What’s-the-Deal-With-Plaque.png.webp'
import pageImage2 from '../../public/Scale-Clean/scale and clean 1.jpg'
import pageImage3 from '../../public/Scale-Clean/teeth cleaning.jpg'
import { useEffect, useState } from 'react';
import { CheckCircleOutline, Close } from '@mui/icons-material'
import { useRouter } from 'next/router'
import PopupImage from '../../public/Home/Popup/Scale & Clean.jpg';

const ScaleClean = () => {
  const router = useRouter()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (open === false) {
            document.querySelector('footer').style.display = "none"
        } else if (open === true) {
            document.querySelector('footer').style.display = "block"
        }
    }, [open])

    useEffect(() => {
        if (router.pathname === "/scale-clean") {
            let timer1 = setTimeout(setOpen(false), 30000)

            return () => {
                clearTimeout(timer1)
            }
        }
    }, [router.pathname])

    const Popup = () => {
        return (<>
            <Container maxWidth="xxl" style={{ height: "100%", backgroundColor: "rgba(0,0,0,0.7)", position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }} className="d-flex justify-content-center align-items-center">
                <Box p={3}>
                    <Box className='d-flex justify-content-end'>
                        <IconButton onClick={() => setOpen(true)}>
                            <Close style={{ color: "#fff" }} />
                        </IconButton>
                    </Box>
                    <Box mt={2}>
                        <Card className='shadow grow' style={{ width: "20rem" }}>
                            <CardMedia component="img" image={PopupImage.src} alt="scale and clean" />
                            <CardContent>
                                <Typography variant='h3' align='center' className='subtitle'>$149 Scale & Clean and Check-up Offer*</Typography>
                                <Typography className='para' align="center"><strong>*Limited time offer.</strong></Typography>
                                <Box mt={3}>
                                    <Button fullWidth className="blueBtn">
                                        <Link href="/book/">
                                            <a style={{ color: "#fff", fontWeight: "bold", textDecoration: "none" }}>BOOK NOW</a>
                                        </Link>
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Container>
        </>)
    }
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])
  return (
    <>
      <Head>
        <meta name="description" content="Scale & clean is the professional way of cleaning your teeth by removing the calculus and tartar. For professional teeth cleaning in Bayswater, visit Bayswater Dentist." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/dental-implants/" />
        <title>Scale and Clean | Teeth Cleaning | Bayswater Dentist</title>
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
      {open ? <main>
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
                        <PageSectionalHeading variant="h2" title="Scale & Clean" align="center" />
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage1} alt="Deal With Plaque" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Typography className='para'>Keeping healthy and bright teeth is a strategic process that can be tasking sometimes. Apart from flossing and brushing daily, you should visit your clean and scale dentist at least every six months for dental cleaning. Your dentist is better posed to know what you’re doing right or wrong.</Typography>
                          </Grid>
                          <Grid item xs={12} className="pt-0">
                            <Typography className='para' dangerouslySetInnerHTML={{ __html: `They can advise you on how best to take care of your teeth and keep your gums at their optimal functional state. You run the risk of developing dental issues such as gum disease if you fail to schedule an appointment for teeth cleaning for more than a year. As part of deep cleaning and scaling, the dentist will conduct a check-up for potential diseases that can compromise your <a href="/blog/everything-you-need-to-know-about-oral-health/">oral health</a>. They can track gum diseases such as periodontitis at their earlier stage and help you combat them. If you’re a smoker, regular scale and clean can help you keep up with the ever-building stains and soot that accumulate between the teeth when you smoke. These are just some of the few reasons why you need to make a reservation with the Bayswater Dentist for a professional scale and clean procedure NOW.` }} />
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className="mt-3">
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading variant="h2" title="What is a scale and clean?" align="center" />
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Typography className='para'>Scale and clean is a dental cleaning procedure that facilitates the removal of plaque and tartar that is constantly forming in your teeth. Plaque is a sticky film that forms when leftover food particles mix with your saliva in the mouth. Plaque contains bacteria that contribute to gum disease and tooth decay.</Typography>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage2} alt="scale and clean" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} className="pt-0">
                            <Typography className='para'>Regular flossing and brushing help remove food particles from your teeth. However, plaque can still form on your teeth, causing your gums to get inflamed and serious infections. Dental scaling can help you get rid of stubborn plaque allowing your teeth to stay attached to the gum, Just like any part of the body, teeth are sensitive to unwanted elements such as stains and debris. As you eat, some pieces of your meal get stuck on the teeth. Some of these particles form films in the hard-to-reach spaces in between the teeth.</Typography>
                            <Typography className='para'>With time, the accumulating films become hazardous, not only to your oral hygiene but also to your general health.</Typography>
                            <Typography className='para'>At Bayswater Dentist, we are experts in this kind of service. We take pride in quality clean and scale services and help you stay ahead of accumulating debris.</Typography>
                            <Typography className='para'>At Bayswater dentist, teeth scale and clean entails;</Typography>
                            <List>
                              {
                                ["alculus removal. Calculus is the hard yellow film that forms on the teeth.", "Plaque removal. Plaque is the white sticky substance that is constantly forming on the teeth.", "Using paste to polish the teeth after removing stains and plaque."].map(item => <ListItem key={item}>
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
                    <section className='mt-1'>
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading title="Are cleaning and scaling teeth painful?" variant="h2" align='center' />
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage3} alt="cleaning and scaling teeth" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Typography className='para'>Teeth scaling is a pain-free procedure when done by professionals using the correct equipment. Most patients who have experienced the process say that they actually enjoyed the feeling of pressure, cool mist water, and the ticking vibrations as their teeth were being scrapped. Besides, the smooth feeling of clean teeth after the procedure is relaxing.</Typography>
                          </Grid>
                          <Grid item xs={12} className="pt-0">
                            <Typography className='para'>If you feel any discomfort, then you may be having an underlying condition that should be checked before the process continues. For this reason, our scale and clean dentist advises that you report any kind of discomfort mid-session so that they can stop the procedure and recommend a further plan.</Typography>
                            <Typography className='para'>There are also several options that our facility uses to minimize discomfort and make the deep scaling dental procedure smooth and enjoyable.</Typography>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className="mt-3">
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading title="Contact Bayswater Dentist for Scale & Clean" variant="h2" align={width > 600 ? 'left' : 'center'} />
                        <Typography className='para'>If you intend to reclaim the looks of your teeth, NOW is the best time to begin your journey towards your desired glow. Make an appointment with us today, and we guarantee an amazing dental experience.</Typography>
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
                                    What does a scale and clean do?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>The process of scale and clean help remove calculus and tartar that pile in hard-to-reach areas and which you cannot remove by regular flossing and brushing.</Typography>
                                </Box>
                              </Box>
                            </Box>


                            <Box className="card">
                              <Box className="card-header" id="headingTwo">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    Do a scale and clean hurt?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>NO. During the process of scale and cleaning, the dentist scraps the piled tartar and calculus with mist-cooling water that does not cause any form of discomfort or pain. Also, the machines cause some form of tickling vibrations and scraping sensation that your teeth can handle with no pain. In case you are sensitive to even the slightest sensation, the dentist can apply a numbing gel to help ease the pain and discomfort.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingThree">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    How often should you get a scale and clean?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Under normal circumstances, we recommend a scale and clean every six months. However, if your gums and teeth are not healthy, like in the case of gum disease, you should get a scale and clean every 3-4 months.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingFour">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                    Are a scale and clean good for your teeth?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Definitely! Scale and clean is an important way to keep healthy, vibrant, and disease-free teeth and gum. As part of oral hygiene, it helps remove build-up plaque and tartar that can be a breeding ground for disease-causing microorganisms.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingFive">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                    How much do a scale and clean cost?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Teeth cleaning cost between $110 and $150 depending on the calculus deposit and your individual circumstances.</Typography>
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
      </main> : <Popup />}
    </>
  )
}

export default ScaleClean