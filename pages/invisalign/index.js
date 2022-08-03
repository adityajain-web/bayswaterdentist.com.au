import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { CommonHero, InterestFree, PageSectionalHeading, ServiceSidebar, TNC } from '../../Components/components';
import pageImage1 from '../../public/Invisalign/Invisalign 1.jpg';
import pageImage2 from '../../public/Invisalign/Invisalign 2.jpg'
import pageImage3 from '../../public/Invisalign/Invisalign.jpg'
import { useEffect, useState } from 'react';
import { CheckCircleOutline } from '@mui/icons-material'

const Invisalign = () => {

  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  return (
    <>
      <Head>
        <meta name="description" content="Wishing to have straight teeth without having metal braces? Try Invisalign. Bayswater Dentist uses the latest technologies. Contact for more information." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/dental-implants/" />
        <title>Complete Invisalign Treatment in Bayswater | Bayswater Dentist</title>
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
                      <Container maxWidth="xxl" className='p-3' >
                        <PageSectionalHeading title="Invisalign" variant="h2" align='center' />
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage1} alt="Invisalign" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Typography className='para'>A beautiful smile can have a major impact on your confidence level and social life. When you lack straight teeth, everything along your oral cavity suffers. You can’t have a good bite without chewing on your tongue. Some words become hard to pronounce. And even worse, you won’t be able to reach out to the deep spaces between the crooked or</Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={12} className="pt-0">
                            <Box>
                              <Typography className="para">misaligned teeth that act as breeding grounds for bacteria. But these are just a few reasons why various people across the globe splurge on teeth aligners such as braces. However, having strings of wire and metal brackets clutching your teeth for a long duration can give a bizarre first impression, especially if you’re an adult. Invisalign is probably the greatest invention in the dentistry field, whose primary aim is to correct crooked or misaligned teeth.</Typography>
                              <Typography className="para">However, just like any advanced corrective measures, understanding invisible braces may mean processing a lot of information at once. You may have probably asked yourself a series of questions—like how does Invisalign look, how long does it take to install Invisalign, what is the cost, and should you use Invisalign or braces?</Typography>
                              <Typography className="para">At Bayswater Dentist, we are here to make you understand everything before booking an appointment. By the time you are done reading this piece, you shall have known whether it is invisible, the duration of time it takes to get the desired results and everything you need to get covered.</Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-3 bg-light' style={{ borderRadius: "0.8rem" }}>
                      <Container maxWidth="xxl" className='p-3'>
                        <Box>
                          <PageSectionalHeading title="What is Invisalign?" variant="h2" align={width > 600 ? 'left' : 'center'} />
                          <Typography className="para">Invisalign is a teeth alignment technique that corrects crooked or misaligned teeth. It functions the same as the traditional metal bracket. However, unlike traditional braces, these clear braces are virtually invisible. They make an excellent alternative should you be looking for teeth aligners that are incrementally clear to give your teeth more natural appeal.</Typography>
                          <Typography className="para">At Bayswater Dentist, we are experts at Invisalign modelling and installation. Book a reservation with us, and you can rest assured to achieve brighter, straighter teeth that guarantee a million worth of smiles.</Typography>
                        </Box>
                        <Box mt={3}>
                          <PageSectionalHeading title="How does Invisalign work?" variant="h2" align={width > 600 ? 'left' : 'center'} />
                          <Typography className="para">Not everyone is a candidate for Invisalign. To get one, you must contact a certified specialist in straightening teeth. This step should come after you have confirmed with your Dentist that you are an ideal candidate. The Dentist will assess your teeth to identify any underlying conditions such as tooth cavity or dental decay. Such dental issues must be addressed first to avoid interfering with the treatment. If you have severe malocclusions, this treatment is not for you, instead of conventional braces can help you rectify the misalignment.</Typography>
                          <Typography className="para">Once you’ve been confirmed as an ideal candidate for complete Invisalign treatment, our Invisalign dentist will use digital imaging to capture a virtual image of your crooked teeth. A copy of the image will be presented to you for a preview to help you get a glimpse of what to expect next. Invisalign trays are custom-fit. The image captured helps the dentist significantly in the next process of modelling.</Typography>
                          <Typography className="para">In the last stage, you will be given a custom tray that fits your oral cavity. You should wear this tray for at least 20-22 hours every day. After every two weeks, you will have another appointment with your Invisalign dentist for regular dental check-ups and replacement of the tray.</Typography>
                        </Box>
                      </Container>
                    </section>

                    <section className='mt-3'>
                      <Container maxWidth="xxl" className='p-3' >
                        <PageSectionalHeading title="What is it like having an Invisalign?" variant="h2" align='center' />
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Typography className='para'>The teeth and oral cavity will gradually acclimatize to the presence of Invisalign braces. At first, you will experience some difficulties using the invisible aligners. You may also have to speak with a lisp to make communication a breeze. With regular adjustments, these underlying difficulties will gradually fade away.</Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage2} alt="Dental emergency" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} className="pt-0">
                            <Typography className="para">During your regular follow-ups and appointments, the dentist will file your teeth to create an extra room where your teeth can re-align. Some patients may require metal attachments that hold directly to the teeth and help them shift. But this should not worry you since the metal wires are almost invisible under your aligners. They help create extra pressure to the teeth in certain areas to enable certain teeth along your cavity to shift to their correct position.</Typography>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>

                    <section className='mt-3 bg-light' style={{ borderRadius: "0.8rem" }}>
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading title="Benefits of Invisalign" variant="h2" align={width > 600 ? 'left' : 'center'} />
                        <Typography className="para">Invisalign is popular for its ease-of-maintenance and natural look. Some of the benefits of these clear teeth aligners include;</Typography>
                        <Typography className="para">Regardless of age, you may require this tooth replacement option if;</Typography>
                        <Box className="mt-3">
                          <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>They are almost invisible</Typography>
                          <Typography className="para">Invisalign is a clear plastic mouthpiece that is hard to notice. Unlike metal brackets and wires, you can carry them everywhere, from business summits to casual events.</Typography>
                        </Box>
                        <Box className="mt-3">
                          <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>They are removable</Typography>
                          <Typography className="para">Unlike metal brackets, you don’t need help from your dentist to remove these clear aligners. You can comfortably remove them during mealtime or when brushing your teeth and re-install them after. They won’t restrict you to eating certain meals to avoid food getting stuck in the braces. Also, you will not have to spend so much time having the clear teeth aligners cleaned like in metal braces.</Typography>
                        </Box>
                        <Box className="mt-3">
                          <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>They are custom-fit</Typography>
                          <Typography className="para">At Bayswater dentist, we use the latest 3D technology and modelling techniques to replicate the looks of your teeth as well as design a tray that fits snugly into it. The tray will help shift your crooked teeth gradually and help keep them straight.</Typography>
                        </Box>
                        <Box className="mt-3">
                          <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>They are less painful</Typography>
                          <Typography className="para">The success of using Invisalign teeth relies on gradual and less pressure the plastic aligner exerts on the teeth. You may experience some minor pain, especially at the start of the corrective procedure. However, this pain is nowhere near what you’ll get from braces.</Typography>
                        </Box>
                        <Box className="mt-3">
                          <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>They require fewer dental visits</Typography>
                          <Typography className="para">With metallic brackets, you must visit your dental clinic every month so that your dentist can track your progress and tighten the braces. But for Invisalign aligners, a single complete set of trays is enough to keep you on the correct healing path and help you attain straighter teeth with just a few visits.</Typography>
                        </Box>
                      </Container>
                    </section>

                    <section>
                      <Container maxWidth="xxl" className='p-3' >
                        <PageSectionalHeading title="They are better than braces" variant="h2" align='center' />
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage3} alt="A smiling women holding invisalign" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Typography className='para'>There are numerous complaints from people about the permanence of wearing braces, not to mention the pain. Invisalign treatment, on the other hand, is much better in the most significant ways. For instance, they are almost invisible, regular tightening is not required, and it does not use metal brackets or wires.</Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>

                    <section className='mt-3'>
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading title="Bottom line" variant="h2" align={width > 600 ? 'left' : 'center'} />
                        <Typography className="para">Your crooked teeth don’t have to be the reason that you shy away from interacting with people. There is still hope. Invisalign is the best way to re-align your crooked teeth without any complications or the need to wear braces. Bayswater Dentist can change your smile in just a short period making you more confident and happier. Schedule an appointment with us as soon as possible to get the best invisible braces and limit any further damage to your oral components and jaw. The decision to get to Bayswater Dentist could be the only difference between having a brighter, confident smile and that awkward teeth alignment that eats on your social life.</Typography>
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
                                    What is Invisalign?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Invisalign is a corrective measure for crooked teeth where dentists use invisible aligners. The aligners exert pressure onto the misaligned teeth and force them into a straight path.</Typography>
                                </Box>
                              </Box>
                            </Box>


                            <Box className="card">
                              <Box className="card-header" id="headingTwo">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    How does Invisalign work?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>First, the dentist conducts an oral assessment to identify any underlying condition that needs to be corrected. Should you have a cavity that needs a dental filling, the process of getting, Invisalign begins there. After all dental issues have been addressed, the dentist will then capture a digital image of your oral cavity and create a customized plastic aligner that fits your teeth. You will have to wear the plastic aligners for at least 20 hours a day. To keep an excellent healing path, you will have to visit your dentist every two weeks for further assessments and replacement of the aligners.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingThree">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    How much does Invisalign cost in Australia?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Invisalign costs between $4000 and $7000. However, the teeth straightening cost may vary based on several reasons, including the type of result you intend to achieve.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingFour">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                    How to clean Invisalign?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>To keep Invisalign spotless, use a small-soft bristled brush on all the surfaces. A clear liquid soap can help remove stains and food particles on the surfaces. Once done, use clean water to rinse off the resulting grime thoroughly.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingFive">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                    Invisalign vs. Braces, which is better?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Invisalign is a better alternative for braces, especially among adults who do not enjoy having metal brackets and wires clutching their teeth. Even better, the plastic Invisalign is removable and hard to notice and can help apply pressure on specific teeth and right areas without any resultant force.</Typography>
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

export default Invisalign