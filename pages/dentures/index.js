import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image'
import { CommonHero, InterestFree, PageSectionalHeading, ServiceSidebar, TNC } from '../../Components/components'
import pageImage1 from '../../public/Denture/pageImage1.jpg'
import pageImage2 from '../../public/Denture/Partial Denture.jpg'
import pageImage3 from '../../public/Denture/denture-cleaning.jpeg'
import { useEffect, useState } from 'react';
import { CheckCircleOutline } from '@mui/icons-material'


const Denture = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])
  return (
    <>
      <Head>
        <meta name="description" content="At Bayswater Dentist, we use the latest technology to make Dentures for your missing teeth. Offering full and partial dentures. Book an appointment now!" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/dentures/" />
        <title>Dentures Care Treatment & Services | Bayswater Dentist</title>
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
                        <PageSectionalHeading variant="h2" title="Dentures in Bayswater Dentist" align="center" />
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage2} alt="dental implants" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Typography className='para'>Could you be experiencing tooth loss? You are in luck because Bayswater Dentist has a solution for you. Our facility offers dentures, both partial and full, to address this problem. For the longest time, dentures have been the most popular tooth replacement option. At Bayswater Dentist, we use the latest technology to customize your dentures so that they are comfortable to wear and look natural. Interested in learning more about dentures at Bayswater? Here is everything that you must know.</Typography>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-3 bg-light' style={{ borderRadius: "0.8rem" }}>
                      <Container maxWidth="xxl" className="p-3">
                        <PageSectionalHeading title="What are dentures?" variant="h2" align={width > 600 ? 'left' : 'center'} />
                        <Typography className='para'>Dentures are normally used to address the problem of missing teeth.</Typography>
                        <Typography className='para'>It involves wearing an artificial custom-fitted prosthetic tooth in the space where the teeth are missing. They are usually temporary tooth replacement options because they are removable. However, with the advancement in technology, their functionality and aesthetics are becoming more enhanced.</Typography>
                        <Typography className='para'>At Bayswater Dentist, we use high-quality materials from Melbourne’s renowned laboratories to custom-fit our dentures so that they are durable and can last a long time without requiring replacement. We also educate you on proper hygienic ways to properly and effectively take care of your dentures.</Typography>
                      </Container>
                    </section>
                    <section className='mt-3'>
                      <Container maxWidth="xxl" className="p-3">
                        <PageSectionalHeading title="Types of dentures" variant="h2" align={width > 600 ? 'left' : 'center'} />
                        <Typography className='para'>In terms of variety, dentures are of two main types; full dentures and partial dentures. However, they are available in different sizes, colours, and shapes.</Typography>
                        <Box mb={3}>
                          <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Partial dentures</Typography>
                          <Typography className='para'>Partial dentures are an ideal replacement option for patients who have lost some of their missing teeth. This type of denture can provide you with a functional smile if you are missing a few teeth in your oral cavity. Removable partial dentures come with a metal frame that clamps them to the adjacent teeth. In addition, for easier relining and cleaning, they are removable.</Typography>
                        </Box>
                        <Box>
                          <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Full dentures</Typography>
                          <Typography className='para'>Full dentures apply to patients who have lost all their teeth. This can be as a result of accidents or oral conditions such as periodontics, gingivitis, and tooth cavity. Additionally, as we grow old, the gums begin to recede, and the jawbone deteriorates, causing the teeth to lose their strength, become wobbly, and start to fall out.</Typography>
                          <Typography className='para'>Teeth loss can have a negative effect on a person’s psychological and physical wellbeing. In such situations, full dentures can help restore teeth and smile functionality.</Typography>
                          <Typography className='para'>Our dentists may recommend the removal of the few weak teeth that are unable to support bridges and replace them with full dentures. These dentures are fitted directly to the jaws and avoid denture slippage through suction.</Typography>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-3'>
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading variant="h2" title="What is the process of fitting a denture?" align="center" />
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage3} alt="Partial Denture" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Typography className='para'>Once you have booked an appointment at Bayswater Dentist, our trained experts will assess your teeth and recommend the best treatment plan. In the next stage, we will capture the impression of your teeth and take the reports to our lab to initialize the process of modelling. This ensures that the dentures fit you</Typography>
                          </Grid>
                          <Grid item xs={12} className="pt-0">
                            <Typography className='para'>perfectly. By the end of the modelling, we will have created a custom-fit trial denture and test it on your gums to determine areas that require modification. We are also keen to ensure they remain as natural as possible and align perfectly with the remaining natural teeth or oral orientation.</Typography>
                            <Typography className='para'>However, that’s not all. You will still have to make several check-up visits to help us assess your progress. During these routine visits, our dentists examine your mouth’s compatibility with the fitted dentures and make the necessary adjustments.</Typography>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-3 bg-light' style={{ borderRadius: "0.8rem" }}>
                      <Container maxWidth="xxl" className='p-3'>
                        <Box>
                          <PageSectionalHeading title="Who is an ideal candidate for a denture?" variant="h2" align={width > 600 ? 'left' : 'center'} />
                          <Typography className='para'>Fortunately, dentures are no longer associated with old people. Nowadays, dentures can be used by anyone.</Typography>
                          <Typography className='para'>Regardless of age, you may require this tooth replacement option if;</Typography>
                          <List>
                            {
                              ["A denture is the only tooth replacement intervention left for you", "You have teeth that are shifting due to gaps left by missing teeth", "You are missing a few or all teeth", "You are self-conscious about the consequences of missing teeth and the reasons."].map(item => <ListItem key={item}>
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: "#117295" }} />
                                </ListItemIcon>
                                <ListItemText primary={item} />
                              </ListItem>)
                            }
                          </List>
                        </Box>
                        <Box mt={3}>
                          <PageSectionalHeading title="Advantages of dentures" variant="h2" align={width > 600 ? 'left' : 'center'} />
                          <Typography className='para'>Dentures are not only the most affordable teeth replacement option you can ever find but there are also flexible dentures that are completely safe. Some other advantages you are likely to enjoy include:</Typography>
                          <List>
                            {
                              ["Longer shelf life that spans years when well kept.", "They look and feel more natural than other tooth replacement options", "Lower price tags compared to other choices such as dental implants.", "Dentures guarantee vibrant smiles that can make you look younger.", "When used correctly, they can help keep your remaining teeth in position and enhance your bite."].map(item => <ListItem key={item}>
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: "#117295" }} />
                                </ListItemIcon>
                                <ListItemText primary={item} />
                              </ListItem>)
                            }
                          </List>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-3'>
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading title="How to care for dentures?" variant="h2" align={width > 600 ? 'left' : 'center'} />
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage3} alt="denture cleaning" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Typography className='para'>To keep your new artificial teeth in their best working condition and ensure their lifespan, you must incorporate near-perfect denture care and maintenance. Lucky for you, caring for dentures is not an uphill task. Using denture paste, a soft brush, and water, ensure that you clean your dentures before you sleep.</Typography>
                          </Grid>
                          <Grid item xs={12} className="pt-0">
                            <Typography className='para'>Make sure to clean your natural gum and remaining teeth using a soft brush, water, and toothpaste before fitting your dentures. You can also use a denture cleaner to keep the temporary dentures sparkling.</Typography>
                            <Typography className='para'>Our dentures are highly feasible for eating. However, we recommend that you clean them properly and regularly, especially after taking sticky snacks to prevent plaque and bacteria from forming, as this could cause oral infections. And should the dentures fall down and chip or crack accidentally, putting them back can result in pain, misalignment, and even infection. Contact us immediately and make an appointment to see our specialists.</Typography>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-3'>
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading title="Get your dentures at Bayswater Dentist today" variant="h2" align={width > 600 ? 'left' : 'center'} />
                        <Typography className='para'>When dentures are your only option to replace missing teeth, you want patient-focused care from skilled experts with good years’ experience. You would also wish to use modern technology and treatment plans that promise better success rates. Well, at Bayswater Dentist, that is exactly what you will get. What’s more, we individualize your treatment plan and assign you one of our top brains to take you through your denture installation path. We use the newest technology in the country to test and determine the level of damage the missing teeth have caused to your gum. We also help you choose a custom-fit denture—either partial dentures or full dentures that won’t compromise the quality of your smile. So, what are you waiting for? Make an appointment with us today and restore your smile and confidence.</Typography>
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
                                    How much do dentures cost?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>The cost of denture is relative to the number of teeth missing. In Australia, the most affordable dentures have a price tag of about $1500*. At the highest, you may be required to part with $3700* for full dentures. These costs include teeth removal, modelling, and fitting. </Typography>
                                </Box>
                              </Box>
                            </Box>


                            <Box className="card">
                              <Box className="card-header" id="headingTwo">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    How to clean dentures properly?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Denture care is very easy. To keep your dentures spotless and infection-free, brush them at least once a day with a soft brush, denture paste, and water. Rinse the resultant globs with water properly. When done properly and regularly, this maintenance process is enough to keep oral infections and plaque build-up at bay.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingThree">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    Can one fix cracked dentures?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Yes. Denture repair services are available and highly successful. The services cater to flexible dentures and full dental dentures. Our skilled dentist at Bayswater Dentist can give your cracked denture a new look.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingFour">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                    Home remedies for denture repair?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>You can also fix a cracked denture at home using a superglue. The trick here is to rest the denture until you’re certain it has dried thoroughly before putting it on. However, this should only be a temporary solution. Contact your dentist after for further intervention.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingFive">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                    How do I know if I need dentures?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>You are an ideal candidate for denture prosthesis if you are missing a few teeth. If you’re experiencing pain when chewing or any discomfort due to shifted teeth, dentures can help remedy the situation. You also need dentures if you’re uncomfortable about the consequences of missing teeth.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingSix">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                    How long do dentures last?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>If you maintain a perfect denture care routine, dentures can last more than a decade without the need for replacement. However, dentists recommend that dentures be replaced every 6-8 years</Typography>
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

export default Denture