import { Container, Grid, Box, Typography, Paper } from "@mui/material";
import Head from "next/head";
import { useEffect, useState } from "react";
import { CommonHero, CustomCard, PageSectionalHeading, TNC } from "../../Components/components";
import { CalendarMonthOutlined, PhoneAndroidOutlined, InsertEmoticonOutlined } from '@mui/icons-material';
import { AiOutlineBarcode } from 'react-icons/ai'

import Offer1 from '../../public/Offer/offrer1.jpg'
import Offer2 from '../../public/Offer/offrer2.jpg'
import Offer3 from '../../public/Offer/offrer3.jpg'

const Offer = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  return (
    <>
      <Head>
        <meta name="description" content="Find the latest dental offer at Bayswater dentist. Fixed price dental offers on scale and clean, kids dental and teeth whitening. Visit our website to know more." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/offer/" />
        <title>Dental Offer at Bayswater Dentist | Dental Clinic in Bayswater</title>
      </Head>
      <CommonHero grid={true} align={width > 600 ? 'left' : "center"} />
      <main className="py-5">
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box>
                  <PageSectionalHeading title="Fixed Price Dental Offers" variant="h2" align="center" />
                  <Box mt={3}>
                    <Grid container spacing={3}>
                      {
                        [
                          { id: "offer-1", title: "$149 Scale and Clean & Check-up* or Gap-Free", list: ["Comprehensive Dental Examination", "Scale & Clean", "Fluoride"], para: null, image: Offer1, alt: "A smiling man showing thmbsup" },

                          { id: "offer-2", title: "$149 Kids Dental Offer or Gap-Free", list: ["Comprehensive Dental Examination", "Scale & Clean", "Fluoride"], para: null, image: Offer2, alt: "dentist with happy family" },

                          { id: "offer-3", title: "TakeHome Teeth Whitening Offer", list: ["Whitening Consultation with Dentist", "Whitening trays made to fit you", "Whitening Gel and Demonstration of how to use it"], para: "$249* or 4 equal payments of $62.25*", image: Offer3, alt: "patient and dentist smiling" }
                        ].map(item => <Grid key={item.id} item xs={12} md={6} lg={4}>
                          <CustomCard cardMedia={item.image} cardMediaAlt={item.alt} cardTitle={item.title} cardList={item.list} small={item.para} icon={true} height="31.2rem" />
                        </Grid>)
                      }
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="mt-5">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box>
                  <PageSectionalHeading title="How Afterpay works" variant="h2" align="center" />
                  <Typography className="para" align="center">Follow these 4 easy steps, It’s that simple!</Typography>
                  <Box mt={3}>
                    <Grid container spacing={3}>
                      {
                        [
                          { id: "how-to-1", text: "Book your visit", icon: <CalendarMonthOutlined style={{ color: "#fff", fontSize: "2rem" }} /> },
                          { id: "how-to-2", text: "Download the Afterpay app", icon: <PhoneAndroidOutlined style={{ color: "#fff", fontSize: "2rem" }} /> },
                          { id: "how-to-3", text: "Get your barcode in the app to scan at reception", icon: <AiOutlineBarcode style={{ color: "#fff", fontSize: "2rem" }} /> },
                          { id: "how-to-4", text: "Enjoy a healthier smile", icon: <InsertEmoticonOutlined style={{ color: "#fff", fontSize: "2rem" }} /> }
                        ].map(item => <Grid item xs={12} md={6} lg={3} key={item.id}>
                          <Box component={Paper} className="shadow howTo" py={3} px={2} >
                            <Box style={{ height: "7rem" }}>
                              <Typography className='subtitle text-white' variant="h3" gutterBottom align="center">{item.text}</Typography>
                            </Box>
                            <Box className="d-flex justify-content-center align-items-center">
                              <Box className="offerCircle">
                                {item.icon}
                              </Box>
                            </Box>
                          </Box>
                        </Grid>)
                      }
                    </Grid>
                    <Box mt={1}>
                      <a href="https://www.afterpay.com/en-AU/terms-of-service" target="_blank" rel="noreferrer" className="font-weight-bold">* Afterpay Terms and Conditions apply.</a>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="mt-5">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box className="embed-responsive embed-responsive-16by9 mb-3">
                  <iframe title="vimeo-player" src="https://player.vimeo.com/video/275962196?h=12531ce500" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
                </Box>
                <TNC />
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Offer