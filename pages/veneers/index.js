import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { CommonHero, InterestFree, PageSectionalHeading, ServiceSidebar, TNC } from '../../Components/components';
import pageImage1 from '../../public/Veeneers/Cosmetic-Dentists-Porcelain-Veneers-700x600.jpg'
import pageImage2 from '../../public/Veeneers/teeth-veneer-before-after-1.jpg'
import pageImage3 from '../../public/Veeneers/Porcelain Veneers.jpg'
import { useEffect, useState } from 'react';
import { CheckCircleOutline } from '@mui/icons-material'

const Veneers = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])
  return (
    <>
      <Head>
        <meta name="description" content="Have you ever imagined acquiring that perfect smile? Have you accidentally damaged or chipped your tooth? If yes, then dental veneers may be a perfect option for you." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/veneers/" />
        <title>Dental Veneers Treatment | Bayswater Dentist</title>
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
                        <PageSectionalHeading variant="h2" title="Dental Veneers" align="center" />
                        <Typography className='para'>Over time your teeth might get damaged, chipped, or discoloured, which can make you self-conscious about their appearance. Dental veneers offer a long-term solution to all these cosmetic needs with proven results in restoring beautiful natural smiles.</Typography>
                      </Container>
                    </section>
                    <section className='mt-3'>
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading variant="h2" title="What are veneers?" align="center" />
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage1} alt="Cosmetic Dentists Porcelain Veneers" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Typography className='para'>Dental veneers are tooth-coloured shells mostly made from resin-composite and porcelain materials that are attached to the surface of affected teeth. Veneers are thin, allowing them to comfortably bond to your teeth and improve the overall appearance. Depending on the level of damage, you can get a single veneer to cover a chipped tooth, or you can get a number of them to create a symmetrical smile that’s also evenly coloured.</Typography>
                            <Typography className='para'>At Bayswater Dentist, we ensure that all dental veneers match your preferred colour, size. The first step of the veneers process involves planning, whereby one of our dental specialists will take you through the visualization process and come up with the best design to restore your smile. This allows you to get precisely what you want, whether it’s perfectly white teeth or a natural-looking appearance or covering up damaged teeth.</Typography>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-3'>
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading variant="h2" title="Why dental veneers?" align="center" />
                        <Grid container spacing={3}>
                          <Grid item xs={12}>
                            <Box>
                              <Image src={pageImage2} alt="teeth veneer before after" />
                            </Box>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography className='para'>Dental veneers are a less invasive alternative to dental crowns depending on the defects or damages you are dealing with. Veneers provide a more conservative approach to fixing teeth colour, size, and shape that can also be removed easily in the future if you decide to change them out. Their ability to cover up gaps between teeth and worn-out teeth makes dental veneers a lasting and cost-effective solution. Root canal procedures and the use of tetracycline medication can also permanently stain your teeth, making dental veneers a recommendable fix.</Typography>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-3'>
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading variant="h2" title="How about maintenance?" align="center" />
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage3} alt="Porcelain Veneers" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Typography className='para'>Dental veneers will take about a week or two to go through natural adjustment after the procedure due to the changes in the size and shape of your teeth. Your dentist will check your veneers before and after the process during follow-up appointments after two weeks. However, you will not require any special maintenance apart from the usual daily flossing and brushing your teeth.</Typography>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-3'>
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading variant="h2" title="Should you get dental veneers?" align={width > 600 ? 'left' : 'center'} />
                        <Typography className='para'>Dental veneers are recommendable for anyone seeking cosmetic dental improvement with healthy gyms and no pre-existing periodontal conditions. They can help you restore a natural-looking smile without any additional maintenance procedures beyond good oral hygiene.</Typography>
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
                                  What are teeth veneers?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Veneer teeth are tooth-coloured shells mostly made from resin-composite and porcelain materials that are attached to the surface of affected teeth.</Typography>
                                </Box>
                              </Box>
                            </Box>


                            <Box className="card">
                              <Box className="card-header" id="headingTwo">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                  How much do veneers cost?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>A porcelain veneer cost is approximately $1200 to $1400 per tooth while a composite veneer cost will cost between $1200 to $1400 per tooth. At Bayswater Dentist we provide the beautiful smile you are after with the best price in town.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingThree">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                  Are veneers permanent?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>No. Veneers are artificial, but if done correctly, porcelain veneers can last for up to a decade. It all depends on the maintenance routine and, of course, if the procedure is done by a well-trained professional dentist.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingFour">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                  How do veneers work?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Custom dental veneers work by covering the front surface of your teeth, thus improving their appearance.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingFive">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                  Does dental insurance cater to veneers?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Veneers are not often covered in most dental insurance covers because they are considered a cosmetic procedure.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingSeven">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                                  Are dental veneers worth getting?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Yes, dental veneers are highly recommended if you are self-conscious about the appearance of your teeth.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingSeven">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                                  Does dental insurance cover dental veneers?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>No, dental veneers are classified as cosmetic procedures and are therefore not covered by insurance.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingEight">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                                  Are veneers permanent?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>No, dental veneers are not permanent; however, they are durable and can last up to 10 to 12 years with good maintenance and dental hygiene.</Typography>
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

export default Veneers