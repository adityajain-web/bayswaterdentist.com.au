import { Container, Grid, Box, Typography } from "@mui/material";
import Head from "next/head";
import Image from 'next/image'
import { useEffect, useState } from "react";
import { CommonHero, PageSectionalHeading, TNC } from '../../Components/components';
import referralGif from '../../public/Patient Referral Program/refferral_5.gif'

const PatientReferralProgram = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])
  return (
    <>
      <Head>
        <meta name="description" content="New patient referral reward program. Refer your friends and get rewarded! You can take advantage of Bayswater dentist new patient referral programs. Visit today!" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/patient-referral-program/" />
        <title>Patient Referral Reward Program | Bayswater Dentist </title>
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
      <CommonHero grid={true} align={width > 600 ? "left" : "center"} />
      <main>
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={12} md={9} className="mx-auto">
              <section>
                <Box py={5}>
                  <PageSectionalHeading title="What to expect at Bayswater Dentist" variant="h2"  align={width > 600 ? 'left' : 'center'} />
                  <Typography className="para">Let’s agree, we know there many dental providers in the Bayswater area, and we are truly delighted that you trust us as your best dental provider in Bayswater. Your referrals and testimonials go a long way to spreading the word about the services and care we provide.</Typography>
                  <Typography className="para">To show our appreciation, we offer a patient referral reward program. We will be giving you a $25.00* credit towards your next dental visit for any successful referral. We credit your account as well as send you an SMS notification. During your next visit, just show us the referral credit and enjoy your bonus.</Typography>
                  <Typography className="para">Entering our dental patient referral program is simple. All you need is to go ahead and refer a friend or family member to your clinic. Once they show up for the initial examination, you will receive your credit.</Typography>
                  <Box mt={3}>
                    <Image src={referralGif} alt="dental refferral program"  className="img-fluid" />
                  </Box>
                  <TNC />
                </Box>
              </section>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  )
}

export default PatientReferralProgram