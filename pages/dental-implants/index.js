import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { CommonHero, InterestFree, PageSectionalHeading, ServiceSidebar, TNC } from '../../Components/components';
import pageImage1 from '../../public/Dental-Implants/R.92ff14230bc99740418e366d48218312.jpg'
import pageImage2 from '../../public/Dental-Implants/R.22bad606c7be46ce40c9f8f0a8a3bec0.jpg'
import pageImage3 from '../../public/Dental-Implants/implants-multiple-teeth-graphic.jpg'
import { useEffect, useState } from 'react';
import { CheckCircleOutline } from '@mui/icons-material'



const DentalImplants = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  return (
    <>
      <Head>
        <meta name="description" content="Visit an experienced Dentist in Bayswater that provides dental Implants to anchor replacement teeth and enhance your smile. Book an appointment now!" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/dental-implants/" />
        <title>Dental Implant in Bayswater | Bayswater Dentist</title>
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
                        <PageSectionalHeading variant="h2" title="Tooth implant in Bayswater Dentist" align="center" />
                        <Box my={2}>
                          <Typography className="para">Dental implants have helped restore the smiles of millions of people across the globe and are currently the most sought-after intervention for tooth loss. Whether the missing tooth is the result of a genetic condition, tooth decay, gum disease, or injury, dental implants offer a reliable smile makeover.</Typography>
                        </Box>
                        <Image src={pageImage1} alt="Tooth implant" />
                        <Box mt={2}>
                          <Typography className="para">They feel, look, and function like a natural tooth. Even more important, they are designed to last a lifetime under proper care and maintenance.</Typography>
                        </Box>
                      </Container>
                    </section>

                    <section className='mt-3 bg-light' style={{ borderRadius: "0.8rem" }}>
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading title="What are dental implants?" variant="h2" align={width > 600 ? 'left' : 'center'} />
                        <Box mt={2}>
                          <Typography className='para'>Dental implants were first invented by Per-Ingvar Brånemark, a Swedish Orthopaedic surgeon, to mimic the roots of the real teeth. During the tooth implant process, a surgical fixture (also called the post) is implanted deep inside the jawbone. A connector is then fixed onto the post. Then, a crown or dental bridge is fitted over the connector to cover the space left by the missing teeth. Modern-day tooth implants are made of titanium since the metals are readily accepted by the body.</Typography>
                          <Typography className='para'>Dental implants are shaped like screws and are driven inside the jawbone during dental implant surgery. After which, usually a couple of months, the area will heal, and bone deposition begins to occur around the post. It only takes one to two years for the metal screw to fuse permanently onto the jawbone and form a root-like structure.</Typography>
                          <Typography className='para'>Dental implants can effectively replace multiple missing teeth or a single tooth. They are popular because these dental solutions for missing teeth are safe and do not interfere with neighbouring teeth during installation or cause bone deterioration in the jaw. They also support dentures and bridges.</Typography>
                        </Box>
                      </Container>
                    </section>

                    <section className='mt-3'>
                      <Container maxWidth="xxl" className='p-3' >
                        <PageSectionalHeading title="Different types of dental plants" variant="h2" align={width > 600 ? 'left' : 'center'} />
                        <Typography className='para'>So far, there are only two popular types of dental implants that are ideal tooth replacement options. They include:</Typography>
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage2} alt="dental implants" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <List>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "#117295" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="Endosteal implants-this is the most popular option that is a preferred alternative for all patients with healthy gum and jaw bone. In this dental implant procedure, the dentist digs a hole inside the jawbone and fits the post or cylinder deep inside. Once the area has healed, the surgeon or dentist will fix a crown or bridge upon it." />
                                </ListItem>
                              </List>
                            </Box>
                          </Grid>
                          <Grid item xs={12} className="pt-0">
                            <Box>
                              <List>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "#117295" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="Subperiosteal implants-this type is used when the jawbone is unhealthy. If the jawbone hurts or is infected, the surgeon will not fit the implant directly. Instead, a metal frame is fixed to connect the jawbone to the post. Then, the gum is allowed to heal as the post integrates into the jawbone. Once both have healed and are stable enough, the dental specialist embeds the bridge or crown onto the crown whilst allowing it to protrude through the gum." />
                                </ListItem>
                              </List>
                            </Box>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-3 bg-light' style={{ borderRadius: "0.8rem" }}>
                      <Container maxWidth="xxl" className="p-3">
                        <PageSectionalHeading variant="h2" title="Why dental implants?" align={width > 600 ? 'left' : 'center'} />
                        <Typography className='para'>Apart from being the only viable teeth replacement option that gives patients a more natural tooth, dental implants come with a range of benefits. To begin with, full dental implants are pain-free artificial teeth designed to last a lifetime. They hardly interfere with the neighbouring teeth since you don’t have to wear them like braces. They also support dentures and bridges and can be fixed should an accident arise.</Typography>
                        <Typography className='para'>Dental implants keep the shape of the gum by preventing recession. Neither do they interfere with the structure and composition of the jawbone like bridges and dentures.</Typography>
                        <Typography className='para'>Once fully healed, you can use the artificial teeth much the same like you use other natural teeth for biting, speaking, and chewing. Visit us today at Bayswater Dentist, and you’ll be sure to recover your smile and confidence right away.</Typography>
                      </Container>
                    </section>

                    <section className='mt-3'>
                      <Container maxWidth="xxl" className="p-3">
                        <PageSectionalHeading title="Cost of dental implants" variant="h2" align={width > 600 ? 'left' : 'center'} />
                        <Box>
                          <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                              <Image src={pageImage3} alt="implants multiple teeth graphic" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Box>
                                <Typography className='para' dangerouslySetInnerHTML={{ __html: 'A full denture implant cost is relatively high. But for their irreplaceable value, getting one is a choice you’ll never regret. A full mouth dental implant cost about $4500* or more. However, should you choose Bayswater Dentist Clinic to cater to your dental needs, you’ll only part with <strong>$3700*</strong>. This offer is available for only a limited time and includes a quality crown or denture. Hurry up and make your reservation with Dental Implants Bayswater today for quality tooth implant services before the offer expires.' }} />
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-3 bg-light' align={width > 600 ? 'left' : 'center'}>
                      <Container maxWidth="xxl" className="p-3">
                        <PageSectionalHeading title="Dental implant procedure at Bayswater Dentist" variant="h2" align={width > 600 ? 'left' : 'center'} />
                        <Typography className='para' dangerouslySetInnerHTML={{ __html: 'At Bayswater Dentist, we pride ourselves on a team of highly-trained dental implant Dentist with vast years of experience in fitting and fixing dental implants. We source our implant kits from <strong>MIS implants Australia</strong>, so you can rest assured they won’t be another dreary sub-standard fixture' }} />
                        <Typography className='para'>Once you make an appointment with us, we will evaluate the level of damage caused by the missing teeth and recommend the most feasible form of a dental implant</Typography>
                        <Typography className='para'>Then we will implant the MIS titanium post into your jawbone and allow it to heal. Several appointments will follow to identify any risk of infection and put your teeth on the correct healing path.</Typography>
                        <Typography className='para'>Once finally healed, we will fix a crown into the place of the missing tooth, making sure it’s flawless and as natural as possible. The tooth implant cost in your initial reservation will cater to full mouth denture implants.</Typography>
                        <Typography className='para'>Missing teeth can make you shy away from talking or smiling. In addition, chewing irregularities due to teeth loss can cause severe dental issues. Do not wait for these adverse effects. Head over to our website before our offer runs out and make your booking today, and you’ll have every chance to smile confidently.</Typography>
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
                                    What is the cost of dental implants in Australia?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>The surgical cost for full dental implants is a bit pricey. In Australia, the tooth replacement cost for a single dental implant is $4500. It is important to note that the price varies from one dental clinic to the other. However, at Bayswater Dentist, we give you your money’s worth by offering the procedure at only $3700*.</Typography>
                                </Box>
                              </Box>
                            </Box>


                            <Box className="card">
                              <Box className="card-header" id="headingTwo">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    Can a dental implant that is loose be fixed?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Fixing a loose dental implant is not daunting. If you suspect that the tiny screw that connects the crown to the implant is loose, talk to your dentist, and it will be tightened pain-free. The crown should also not come off. Should this happen, a simple re-cement can help revert its original state.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingThree">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    After dental implant surgery, what foods can I consume?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>In the first 6-10 hours after the surgery, it’s best to eat soft foods which are pain-free to crush. Drinks such as yogurt, milkshake, and soup are the most preferred. You can also eat mashed potatoes, pudding, and smoothies.</Typography>
                                  <Typography className='para'>Even after the numbness is over, keep your diet fixed on soft foods such as vegetables, pancakes, macaroni, and eggs for another two weeks. Stay highly hydrated and include meals rich in protein in your diet to aid faster healing.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingFour">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                    Is a person who is diabetic a candidate for dental implants?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Yes. Any diabetic patient is a candidate for a dental implant unless they have other underlying conditions such as gum or jawbone infection. The only downside is that they will need several pre and post-implant cares to minimize the risk of secondary complications.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingFive">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                    Are dental implants covered by many dental plans?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Major Australian Insurances such as NIB, HCF, Bupa, Medibank cover dental implant costs under the category of “major dental.” Other insurance providers that will also cover you include CBHS,HBF and many more. At Bayswater Dentist, we accept a wide range of covers and offer interest-free rates and plans such as Openpay.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingSix">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                    Is dental implant safe?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>When done correctly, a tooth implant is generally a safe tooth replacement method with a higher success rate. A single or full dental mouth implants hardly interfere with both the chemical and physical composition of the jawbone; neither do they affect the neighbouring natural teeth.</Typography>
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

export default DentalImplants