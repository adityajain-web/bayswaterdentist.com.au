import { Box, Container, Grid, } from '@mui/material';
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { CommonHero } from "../../Components/components";
const Book = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  return (
    <>
      <Head>
        <meta name="description" content="" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/book/" />
        <title>Dentists In and Around Bayswater - Online Dental Appointment Booking</title>
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
      <CommonHero align={width > 600 ? 'left' : 'center'} grid={true} />
      <main>
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <div id="he-webplugin-89445">
                    <iframe src="https://healthengine.com.au/webplugin/?id=89445&amp;source=webplugin" width="100%" height="500" className="he-webplugin" name="open-appointments-widget-89445" frameBorder="0" style={{ border: "2px solid #045475" }}></iframe>
                    <p style={{ fontSize: "14px", fontFamily: "Helvetica, Arial, sans-serif", marginLeft: "10px", color: "#666 !important", margin: "20px 0 0 0" }}>View our profile on <a style={{ color: "#008ec7 !important" }} href="https://healthengine.com.au/service/89445?source=webplugin" target="_blank" rel="noreferrer">Healthengine.com.au</a></p>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Book