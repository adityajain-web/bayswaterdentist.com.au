import { Grid, Container, Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import Head from "next/head";
import { useEffect, useState } from "react";
import { CommonHero, PageSectionalHeading } from '../../Components/components';

import smita from '../../public/Team/SmithaVincent (1).jpg'
import anita from '../../public/Team/Anita.jpg'
import nancy from '../../public/Team/Nancy.jpg'

const Team = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  },[width])

  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/team/" />
        <meta name="description" content="Meet our team of highly experienced dentists who have been practicing their skills for years and have been providing their patients an excellent results." />
        <title>Our Dental Team | Bayswater Dental Clinic</title>
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
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <PageSectionalHeading title="HELLO!" variant="h2" align="center" />
                  <Typography className="para" style={{fontSize:"1.2rem"}}>This is us – the Bayswater dentist Team.</Typography>
                  <Typography className="para" style={{fontSize:"1.2rem"}}>We pride ourselves on delivering the best cosmetic and restorative dental care possible and love getting to know our patients on a personal level. More importantly, we strive to go beyond the obvious to create a great environment in which you can feel safe and welcome.</Typography>
                  <Typography className="para" style={{fontSize:"1.2rem"}}>We’re excited to meet you!</Typography>
                  <Box mt={3}>
                    <Grid container>
                      {
                        [
                          { id: "doc-1", docName: "Dr. Smitha Vincent", degree: "(BDS)", image: smita, para: ["Dr. Smitha is a general dentist registered under the Australian Health Practitioner Regulation Agency. She has over 10 years clinical experience in dentistry. She loves all aspects of dentistry and thrives on providing exceptional care to all her patients. In her spare time, she enjoys reading and spending time with family and friends.", "Dr. Smitha is fluent in English, Hindi, and Kannada."] },

                          { id: "doc-2", docName: "Dr. Anita Babu", degree: null, image: anita, para: ["Dr. Anita graduated in 2010 as a Bachelor of Dental Science overseas before making Australia home. She enjoys all aspects of general dentistry and mainly focuses on preventive and restorative dentistry. She has been a member of Australian dental associations since 2015 and has been working in the public sector since.", "A strong believer of quality based dentistry. From the time a patient arrives she works on putting patients at ease and makes them comfortable during their visits and works on bringing their confident smile. She works on gaining knowledge through continuing professional development programs.", "Apart from dentistry, she spends most of the time with her family and young kids. She enjoys listening to music, cooking, exploring new walking trails, watching sunrise and cycling.", "Languages known: English and Malayalam"] },

                          { id: "doc-3", docName: "Dr. Nancy Jabbarnia", degree: null, image: nancy, para: ["Dr. Nancy completed her Australian qualification for Dentistry in 2015. She is a fully qualified dentist with 3 years experience back in Iran and over 7 years in Australia. She is a gentle and calm dentist, always taking the time to understand her patient’s concerns. Dr. Nancy enjoys practicing all aspects of general dentistry. She is passionate about preventive dentistry, white fillings, crowns and teeth whitening. She always strives to educate patients on their oral health. She prides herself as a champion in working with Children. She frequently attends continuing professional education courses to further her knowledge and skills in all areas of dentistry.", "Dr. Nancy is fluent in Persian (Farsi) and English.", "Outside of dentistry, she leads an active lifestyle, keeping fit with running and boot camping and also enjoys baking, watching Netflix and spending time with her family."] }
                        ].map(item => <Grid key={item.id} className="mt-5">
                          <Box>
                            <Grid container spacing={5}>
                              <Grid item xs={12} md={3}>
                                <Card className="shadow">
                                  <CardMedia component="img" image={item.image.src} />
                                  <CardContent>
                                    <Typography variant="h3">{item.docName}</Typography>
                                    {item.degree !== null ? <Typography variant="h4">{item.degree}</Typography> : null}
                                  </CardContent>
                                </Card>
                              </Grid>
                              <Grid item xs={12} md={9}>
                                <Box>
                                  {
                                    item.para.map((para, index) => <Typography key={`${item.id}.${index}`} className="para" style={{fontSize:"1.2rem"}}>{para}</Typography>)
                                  }
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>)
                      }
                    </Grid>
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

export default Team