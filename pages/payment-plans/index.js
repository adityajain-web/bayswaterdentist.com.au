import { Container, Grid, Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BlueBtn, CommonHero, InterestFree, PageSectionalHeading, TNC } from '../../Components/components';
import { CheckCircleOutline } from '@mui/icons-material'

import AfterPay from '../../public/Payment Plan/afterpay.jpg'
import DenticareBadge from '../../public/Payment Plan/Denticare-badge.jpg'
import MysmileLogo from '../../public/Payment Plan/mysmileplanlogo.jpg';
import Mysmile from '../../public/Payment Plan/mysmileplan.jpg';

function PaymentPlan() {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  return (
    <>
      <Head>
        <meta name="description" content="Bayswater Dentist give you the dental payment plan to have the dental treatment. Visit on here to get detail about a dental payment plan and discover more." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/payment-plans/" />
        <title>Dental Payment Plans For Patients By Bayswater Dentist</title>
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
      <CommonHero grid={true} align={width > 600 ? 'left' : "center"} />
      <main>
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={12} md={9} className="mx-auto">
              <Box py={5}>
                <section>
                  <PageSectionalHeading title="Payment Plans for your dental treatment" variant="h2" align="center" />
                  <Box>
                    <InterestFree />
                  </Box>
                  <Box className="text-center mt-md-4 mt-3">
                    <Box className="shadow">
                      <Image src={AfterPay} alt="payment" />
                    </Box>
                    <Typography className="para font-weight-bold mt-3" style={{ fontSize: "1.2rem" }}>*Subject to Afterpay approval and transaction limits. Late fees may apply if you fail to make a payment on time. For Afterpay Terms please visit: <a href="https://www.afterpay.com/en-AU/terms-of-service" target="_blank" rel="noreferrer">https://www.afterpay.com/en-AU/terms-of-service</a></Typography>
                  </Box>
                  <Box py={3} px={2} className="mt-md-4 mt-3 shadow rounded-lg">
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={5} className="d-flex align-items-center">
                        <Box>
                          <Image src={DenticareBadge} alt="Denticare badge" />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        <Box>
                          <PageSectionalHeading title="Your Plan For A Better You" align={width < 600 ? 'center' : 'left'} variant="h2" />
                          <Typography className="para">We care about making sure you get the best dental treatment you deserve which is why we offer DentiCare Payment Plans as a convenient and easy way to budget and pay for your dental care. DentiCare Payment Plans are simple, flexible and are tailored to suit you. There are no complicated finance contracts, no credit checks or any interest to pay.</Typography>
                          <Box mt={2}>
                            <List>
                              <ListItem>
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: "#117295" }} />
                                </ListItemIcon>
                                <ListItemText primary="A simple, interest free direct debit plan for your treatment" />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: "#117295" }} />
                                </ListItemIcon>
                                <ListItemText primary="No credit checks or complicated finance contracts" />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: "#117295" }} />
                                </ListItemIcon>
                                <ListItemText primary="Start your plan for a better you today" />
                              </ListItem>
                            </List>
                          </Box>
                          <BlueBtn anchor={true} link="https://denticarepaymentplans.com.au/" text="FIND OUT MORE" />
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box mt={2}>
                    <Typography className="para text-secondary font-weight-bold" >
                      Even if you are tight on budget, our interest free payment plans will allow you to get your Dental treatments done fast and hassle free. Your overall health is dependent on the health of your teeth, therefore it’s important that you attend to the dental needs and not have them postponed due to financial reasons. To help you with this at Bayswater Dentist accept interest free, quick set up payment plans.
                    </Typography>
                  </Box>
                </section>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <section className="mt-md-4 mt-3 bg-light">
          <Box py={3}>
            <Grid container>
              <Grid item xs={12} md={9} className="mx-auto">
                <Container maxWidth="xxl">
                  <Box>
                    <PageSectionalHeading title="Interest Free Patient Payment Plans available:" variant="h2" align="center" />
                    <Divider style={{ background: "#117295" }} />
                    <Box mt={2}>
                      <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Specifically designated for clients having Dental & Orthodontic related treatments</Typography>
                      <Typography className="para">At Bayswater Dentist we want to put the smile back on our patients and therefore would like to offer best payment plan options so you can receive the high quality dental care needed without worrying about cost. We are excited to bring you DentiCare: a completely automated payment plan system which is a convenient and affordable way to pay the cost of the dental treatment over time. And what’s more you won’t pay any interest or go through any complicated finance contracts. Now there’s no reason for you to delay your treatment. Ask our Dentist about how a no interest DentiCare payment plan can get you into treatment straight away.</Typography>
                      <Typography className="para">The DentiCare Payment Plan can be used for a wide range of general dentistry, cosmetic dentistry and orthodontic treatments. You can use a payment plan for teeth whitening, dental implants, crowns and veneers and most other dental procedures. You can also use a payment plan to cover the cost of your Orthodontic treatment (Invisalign)</Typography>
                      <Typography className="para">Speak to our friendly dental staff to help set up a <a style={{ color: "#117295" }} className="font-weight-bold" href="https://denticarepaymentplans.com.au/for-dental-practices/" rel="noreferrer" target="_blank">DentiCare Payment Plan</a>. All you pay is a minimum of 20%* of your treatment cost directly and $35* payment plan set up fees, after which you can make either weekly, fortnightly or monthly payments!</Typography>
                      <Typography className="para">We are great with kids; our dentists love working with kids. We know how to make them feel ease and make their dental experience a pleasant one. We even go the extent of playing the kid with his/her favourite channel/movie and give them gifts as an appreciation.</Typography>
                    </Box>
                    <Box mt={2}>
                      <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Advantages of DentiCare:</Typography>
                      <Box>
                        <List>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "#117295" }} />
                            </ListItemIcon>
                            <ListItemText primary="Simple one-page Direct Debit form with our Dentist. Simple, fast and easy application which allows you to do treatments on the same day." />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "#117295" }} />
                            </ListItemIcon>
                            <ListItemText primary="No credit checks and no lengthy approval process is required." />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "#117295" }} />
                            </ListItemIcon>
                            <ListItemText primary="Start your treatment straight away." />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "#117295" }} />
                            </ListItemIcon>
                            <ListItemText primary="Interest free" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "#117295" }} />
                            </ListItemIcon>
                            <ListItemText primary="Plans from 3 months to 12 months" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "#117295" }} />
                            </ListItemIcon>
                            <ListItemText primary="Finance options to suit every budget (treatment plans over of $1000*)" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "#117295" }} />
                            </ListItemIcon>
                            <ListItemText primary="Create a better smile today." />
                          </ListItem>
                        </List>
                      </Box>
                    </Box>
                    <Box mt={2}>
                      <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>DentiCare Payment Solutions 1300 633 472</Typography>
                      <Typography className="para font-weight-bold">To find out more about payment plans with Bayswater Dentist please do not hesitate to contact us.</Typography>
                    </Box>
                    <Box mt={2}>
                      <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>How It Works</Typography>
                      <Box mt={3}>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6} lg={3}>
                            <Box>
                              <Box className="d-flex justify-content-center align-items-center">
                                <Box className="paymentPlanCircle">
                                  <Typography variant="h3">1</Typography>
                                </Box>
                              </Box>
                              <Box py={2}>
                                <Typography className="para font-weight-bold text-center">When your practice presents your treatment plan ask them about a DentiCare Payment Plan to help spread the cost.</Typography>
                              </Box>
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={6} lg={3}>
                            <Box>
                              <Box className="d-flex justify-content-center align-items-center">
                                <Box className="paymentPlanCircle">
                                  <Typography variant="h3">2</Typography>
                                </Box>
                              </Box>
                              <Box py={2}>
                                <Typography className="para font-weight-bold text-center">Together with your doctor decide on the payment plan details including the deposit, amount and frequency of payments.</Typography>
                              </Box>
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={6} lg={3}>
                            <Box>
                              <Box className="d-flex justify-content-center align-items-center">
                                <Box className="paymentPlanCircle">
                                  <Typography variant="h3">3</Typography>
                                </Box>
                              </Box>
                              <Box py={2}>
                                <Typography className="para font-weight-bold text-center">Complete the simple, one-page direct debit form. There’s no need for credit checks or detailed financial information.</Typography>
                              </Box>
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={6} lg={3}>
                            <Box>
                              <Box className="d-flex justify-content-center align-items-center">
                                <Box className="paymentPlanCircle">
                                  <Typography variant="h3">4</Typography>
                                </Box>
                              </Box>
                              <Box py={2}>
                                <Typography className="para font-weight-bold text-center">You can begin your treatment straight away and your payments begin. Simple. No hassle, no fuss.</Typography>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Box>
                </Container>
              </Grid>
            </Grid>
          </Box>
        </section>
        <section className="mt-md-4 mt-3">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={9} className="mx-auto">
                <Box>
                  <Box className="shadow">
                    <Image src={MysmileLogo} alt="my smile logo" />
                    <Image src={Mysmile} alt="my smile Plan" />
                  </Box>
                  <Box py={3}>
                  <TNC />
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

export default PaymentPlan