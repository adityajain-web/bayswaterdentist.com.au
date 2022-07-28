import { Container, Grid, Box, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Head from "next/head";
import Image from 'next/image'
import { useEffect, useState } from "react";
import { CommonHero, PageSectionalHeading, TNC } from '../../Components/components';
import { CheckCircleOutline } from '@mui/icons-material'

import CBBS from '../../public/Child Benefit/CDBS1-compressed.jpg';
import childBenefit from '../../public/Child Benefit/child dentist-compressed.jpg';
import childB1 from '../../public/Child Benefit/Child dentistry.jpg'
import childB2 from '../../public/Child Benefit/Kids dentistry.jpg'

const ChildBenefit = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  return (
    <>
      <Head>
        <meta name="description" content="Bayswater offers the best medicare dental services for children. To receive a children's dental scheme and its benefits, schedule an appointment with us." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/child-benefits/" />
        <title>Child Dental Benefit at Bayswater Dentist | Kids Dentist</title>
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
      <CommonHero grid={true} align={width > 600 ? 'left' : 'center'} />
      <main>
        <section className="mt-3">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={2}>
                  <PageSectionalHeading title="Child Dental Benefit Schedule (CDBS)" variant="h2" align="center" />
                  <Typography className="para">The child dental benefits schedule, is a fully-fledged dental care program by the Federal government that was rolled out by the federal government in 2014. This Medicare dental scheme aims at providing exclusive coverage for basic dental care services for all children between the ages of 2 to 17. In this program, your child stands a chance to receive child dental benefits capped at $1013*. The services covered include X-rays, root canal treatment, fillings, tooth cleaning, and extraction. All these services are available over two calendar-year periods.</Typography>
                  <Box>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Box>
                          <Image src={CBBS} alt="Child showing teeth and giving thumbs up" />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box>
                          <Image src={childBenefit} alt="Dentist and Nurse treating the teeth of a girl" />
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="mt-3 bg-light">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={2}>
                  <PageSectionalHeading title="Grow up smiling with Bayswater Dentist" variant="h2" align={width > 600 ? 'left' : 'center'} />
                  <Typography className="para">Our mission of providing quality dental care across all ages has never changed. At Bayswater Dentist, we accept the CDBS card as a mode of payment for dentistry for children. This way, we aim to bridge cost gaps and ensure that your child receives proper oral hygiene.</Typography>
                  <Typography className="para">You can also check if your child is eligible by logging into your Medicare account at my.gov.au or you can give us a call. In your portal, you can get a glimpse of your balances. If you suspect anything that needs clarification, you can contact the Department of Human Services either through helpline or email. On the issue of CDBS eligibility, the Human service department reviews applications annually and sends Medicare or CDBS vouchers to those who qualified.</Typography>
                  <Typography className="para">At Bayswater Dentist, we also provide any kind of information regarding Medicare child dental that you may need to get clarified. Contact us today and learn more about how we can enhance your child’s oral health using this child dental benefits scheme.</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="mt-3">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={2}>
                  <PageSectionalHeading title="Services Offered" variant="h2" align={width > 600 ? 'left' : 'center'} />
                  <Typography className="para">Here at Bayswater dentist, we are a kid’s dental clinic. Our aim is to provide the best dental services that fit your lifestyle in a gentle way. Our kid’s dentist has specialized in a wide range of children’s dental services, so you have nothing to worry about. To ensure your child’s dental services do not blow up in prices, we work hand in hand with the CBDS program to provide affordable and quality dental services to your family. Our Grow up smiling program at Bayswater Dentist offers several kids dental services that target the needs of your child. They include;</Typography>
                  <Box mt={1}>
                    <List>
                      {
                        ["Oral examination", "X-rays", "Extraction of both wisdom and impacted teeth", "Root canal treatment", "Fissure cleaning", "Fillings", "Scaling and cleaning"].map((item, index) => <ListItem key={`child-benefit-sec3.${index}`} >
                          <ListItemIcon>
                            <CheckCircleOutline style={{ color: "#117295", marginRight: "0.5rem" }} />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>)
                      }
                    </List>
                  </Box>
                  <Box mt={1}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Box>
                          <Image src={childB1} alt="Child and dentist smiling" />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box>
                          <Image src={childB2} alt="Pediatric dentistry bayswater" />
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="mt-3 bg-light">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={2}>
                  <PageSectionalHeading title="Child dental benefit scheme Eligibility" variant="h2" align={width > 600 ? 'left' : 'center'} />
                  <Typography className="para">Before making an appointment with us, it is best to check if your child is eligible for any of our services offered under CBDS. Well, just like most families in the Australia, you do not necessarily need to apply for CBDS. Your family will be assessed by the Department of Human Services at the beginning of every calendar year.</Typography>
                  <Typography className="para">After the assessment, you will get a confirmation message from the Human Services Department confirming whether your child is eligible for the government dental scheme. They must be between the ages of 2-17 years for at least one day of the calendar year. Additionally, your child must be eligible for the Medicare program. Lastly, your family must be part of the families across Australia that receive tax benefit A or any other types of government payments such as;</Typography>
                  <Box mt={1}>
                    <List>
                      {
                        ["Carer payment", "Special benefit", "Youth allowance", "ABSTUDY", "Disability support provision", "Parenting payment", "Double orphan payment", "Veteran’s children education scheme which applies for children aged 16-years and above", "Military rehabilitation and compensation Act Education and Training Scheme, which is available for children aged 16 and more."].map((item, index) => <ListItem key={`child-benefit-sec5.${index}`} >
                          <ListItemIcon>
                            <CheckCircleOutline style={{ color: "#117295", marginRight: "0.5rem" }} />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>)
                      }
                    </List>
                  </Box>
                </Box>
                <Box mt={3} py={2}>
                  <PageSectionalHeading title="Get your child’s dental issues solved easily" variant="h2" align={width > 600 ? 'left' : 'center'} />
                  <Typography className="para">The whole process of getting your child to enjoy our services shouldn’t be daunting. However, at Bayswater Dentist, we understand that you might be confused about where to start. Our friendly team will help make the whole process as easy as ABC. Once you’ve booked an appointment with us, we will check your card and ascertain whether your child still has enough amounts in the account that qualifies him/her for the treatments available. We are here to unload the cost burden, so you can rest easy knowing that we shall not include any hidden costs. Your Medicare or CDBS voucher is just what you need to complete the process.</Typography>
                  <Typography className="para">We also take pride in our friendly receptionists who are well-versed in matters of documentation.</Typography>
                  <Typography className="para">Bayswater dentist is your safe haven for every single document you will provide. Additionally, it’s good to know that the services under the children’s dental scheme are bulk billed. You don’t have to worry about digging into your pocket unless the case is exceptional. As soon as you sign the consent form, the process begins.</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="mt-5">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={2}>
                  <PageSectionalHeading title="Schedule an appointment with us today" variant="h2" align={width > 600 ? 'left' : 'center'} />
                  <Typography className="para">At Bayswater Dentist, our child dental benefits scheme dentist is experienced, dedicated, and well-trained to provide children dental care in the most fun, gentle, friendly way. Whether it is your child’s routine dental check-up or first dental appointment, our team of specialists ensures that they are comfortable and informed.</Typography>
                  <Typography className="para">Our CDBS Program provides the best dental services for children. Even though not all services are covered by the scheme, most dental services required by a child as they grow up are covered. Besides, we use modern dental tools and equipment to enhance safety and ensure that your child is as comfortable as possible.</Typography>
                  <Typography className="para">Take advantage of this prime opportunity to help your child receive proper and friendly dental care at Bayswater Dentist. We are always committed to providing optimal services that will help your family attain oral wellness. Any active voucher is one step ahead towards achieving comprehensive, quality dental care.</Typography>
                  <Typography className="para">Schedule an appointment with us today, and we shall take care of your child’s oral needs</Typography>
                  <Box mt={1}>
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

export default ChildBenefit