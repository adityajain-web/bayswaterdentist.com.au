import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { CommonHero, InterestFree, PageSectionalHeading, ServiceSidebar, TNC } from '../../Components/components';
import pageImage1 from '../../public/Teeth-Whitening/teeth whitening.jpg'
import pageImage2 from '../../public/Teeth-Whitening/GettyImages-teeth-whitening.jpg'
import pageImage3 from '../../public/Teeth-Whitening/teeth_whitening_expect.jpg'
import { useEffect, useState } from 'react';
import { CheckCircleOutline } from '@mui/icons-material'

const TeethWhitening = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])
  return (
    <>
      <Head>
        <meta name="description" content="Get safe and professional teeth whitening treatment at Bayswater Dentist. Our Professional dentists are experts in offering Pola teeth whitening treatment." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/teeth-whitening/" />
        <title>Safe & Professional Teeth Whitening | Bayswater Dentist</title>
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
                        <PageSectionalHeading title="Zoom teeth whitening" variant="h2" align='center' />
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage1} alt="teeth whitening bayswater" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Typography className='para'>At Bayswater Dentist, we use the Zoom Tooth Whitening that restores your teeth’ natural whiteness quickly and comfortably. A brighter and healthier smile helps enhance your confidence and self-image.</Typography>
                          </Grid>
                          <Grid item xs={12} className="pt-0">
                          <Typography className='para'>We have an in-chair Zoom whitening system and also Pola take home tooth whitening kits. Book an appointment with us, and you can rest assured to leave our facility with dazzling white teeth you can take pride in.</Typography>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-3 bg-light' style={{ borderRadius: "0.8rem" }}>
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading title="What is zoom teeth whitening?" variant="h2" align={width > 600 ? 'left' : 'center'} />
                        <Box mt={2}>
                          <Typography className='para'>Zoom teeth whitening is an advanced teeth whitening process that involves the use of endodontic technology to clean and scale the teeth inside out. A special lamp produces the zoom laser, which is then used for flushing out and get rid of discoloration for a more natural look.</Typography>
                          <Typography className='para' dangerouslySetInnerHTML={{ __html: `Zoom teeth whitening is non-invasive hence perfect for patients with <a href="/blog/dealing-with-tooth-sensitivity-heres-what-you-need-to-know/">tooth sensitivity</a>. It is one of the best teeth whitening services out there and for various reasons. To begin with, the whole process takes less than an hour, so you do not have to wait too long to achieve that desired glamour. Even better, the results are long-lasting as compared to what you will get from some other options that require multiple appointments before getting whiter teeth.` }} />
                          <Typography className='para'>While you can get the sparkling results in a relatively short time, maintaining the spotless teeth after zoom is also a real breeze. When done by a professional like our specialist at Bayswater Dentist, zoom teeth whitening is very effective. Our expert dentist will comfortably handle your stained teeth and recommend the best maintenance practices that will help you keep up the brighter smile.</Typography>
                        </Box>
                      </Container>
                    </section>

                    <section className="mt-3">
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading title="How does zoom whitening works" variant="h2" align='center' />
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage2} alt="teeth whitening bayswater" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Typography className='para'>Once you arrive at our facility, we will begin by checking the level of damage your teeth suffered and ascertain whether you’re an ideal candidate for Zoom. For candidates, we will proceed to the next process, which involves covering your mouth to protect the gum and lips from the whitening gel.</Typography>
                          </Grid>
                          <Grid item xs={12} className="pt-0">
                            <Typography className='para'>The whitening gel is made of hydrogen peroxide--a formula that oxidizes when exposed to zoom chairside lamp. Next, we will apply the whitening gel on the stained teeth and activate the zoom lamp using special lighting. As the zoom light comes into contact with the gel, the hydrogen peroxide penetrates the enamel while at the same time producing oxygen. The combination of the two will help flush out any discoloration, both inside the teeth and on the surface of your teeth.</Typography>
                            <Typography className='para'>The whitening gel is applied in the count of three to four intervals, each spanning fifteen minutes. So, depending on the discoloration severity, expect the whole procedure to last about an hour or less.</Typography>
                            <Typography className='para'>Please note:</Typography>
                            <Typography className='para'>You might experience tooth sensitivity during the whitening process. However, this should not progress beyond 24 hours. To keep you on the right healing path, we also advise that you avoid certain foods and drinks for up to 72 hours, or at least when your treatment plan is over.</Typography>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className="mt-3">
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading title="What to expect during the zoom teeth whitening process?" variant="h2" align='center' />
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Typography className='para'>Zoom teeth cleaning and whitening is a generally comfortable and feasible option that works for almost everyone. And since it only takes a few minutes, the process can be done even during your lunch break so that you can resume your work with a glossy smile.</Typography>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box>
                              <Image src={pageImage3} alt="teeth whitening process" />
                            </Box>
                          </Grid>
                          <Grid item xs={12} className="pt-0">
                            <Typography className='para'>Once we have covered your gums and lips, we will apply the hydrogen peroxide to your teeth and activate the zoom laser. The laser is pointed to the teeth to drive the oxygen inside your dentine.</Typography>
                            <Typography className='para'>Unless your teeth are sensitive, the hydrogen peroxide and oxygen will infiltrate your teeth with no flashing or searing pain and flush out the grime that causes discoloration. We will repeat this process two to three more times, at an interval of fifteen minutes. Lastly, we will apply a fluoride gel on your teeth to prevent teeth insensitivity. To finish off, we will provide you with a custom tray that helps protect the teeth and a whitening gel from use at home.</Typography>
                          </Grid>
                        </Grid>
                      </Container>
                    </section>
                    <section className='mt-3 bg-light' style={{ borderRadius: "0.8rem" }}>
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading title="Benefits of zoom whitening" variant="h2" align={width > 600 ? 'left' : 'center'} />
                        <Box mb={3}>
                          <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>One appointment</Typography>
                          <Typography className='para'>Zoom dental whitening guarantees quick results that are visible almost immediately. You don’t have to wait more than two weeks for your teeth to attain a glistening white hue; neither do you need multiple appointments that are time-consuming and tiring. Only one appointment that consists of a 45-minutes long procedure is enough to reclaim your teeth’s natural whiteness</Typography>
                        </Box>
                        <Box mb={3}>
                          <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>It can be used at home to whiten teeth</Typography>
                          <Typography className='para'>At the end of the procedure, you shall be given a teeth whitening kit by our teeth whitening dentist to help maintain the brightness of your teeth at home. Additionally, it does whiten the teeth further with every application. You can use the whitener as much as you want, depending on the severity of the stains.</Typography>
                        </Box>
                        <Box mb={3}>
                          <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Ideal for sensitive teeth</Typography>
                          <Typography className='para'>Zoom whitening is non-invasive hence recommended for sensitive teeth. Neither the laser nor the hydrogen peroxide teeth whitening gel will irritate your teeth or gum. You may experience flashing pain or “zingers” during the laser teeth whitening. However, this is just a temporary discomfort that goes away after a while.</Typography>
                          <Typography className='para'>Research indicates that most people are willing to tolerate the slight short-lived discomfort for a brighter smile. However, to keep the session as friendly as possible, our teeth whitening dentist may inject you with a pain reliever gel that has proved to work for many of our patients.</Typography>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-3'>
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading title="Make an appointment with Bayswater Dentist for cosmetic teeth whitening" variant="h2" align='center' />
                        <Typography className='para'>Teeth whitening Bayswater is performed by qualified professionals with tones of experience which increases this procedure’s chances of success. With the help of our zoom teeth cleaning and whitening service, you can achieve your confidence and self-image. In addition, the technique, when used for dental whitening offers long-lasting results and is quite affordable.</Typography>
                      </Container>
                    </section>
                    <section className='mt-3'>
                      <Container maxWidth="xxl" className='p-3'>
                        <PageSectionalHeading title="TEETH WHITENING POLA" variant="h2" align='center' />
                        <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>We also use teeth whitening-pola system as take home Kits</Typography>
                        <Typography className='para'>At Bayswater Dentist, we use the Pola Advanced Tooth Whitening that restores your teeth’ natural whiteness quickly and comfortably. A brighter and healthier smile helps enhance your confidence and self-image.</Typography>
                        <Typography className='para'>Has your tooth enamel discoloured? Are you looking for a beautiful vibrant smile that can give you the confidence you need in life? Do you feel the teeth whitening price is going to drain your pockets?</Typography>
                        <Typography className='para'>You are in luck because we are about to answer all your questions. For starters, you can easily reverse the numerous stains and discoloration on your teeth. Our Pola cosmetic teeth whitening will reclaim the natural beauty of your teeth and make you radiate. In fact, you’re going to be amazed upon learning that Pola is actually an Australian Company whose amazing results are talked about across the globe.</Typography>
                        <Typography className='para'>Normally, our Pola advanced teeth whitening costs about $400* normally, but the service is currently on offer at only $299*. Schedule an appointment with us for the best teeth whitening service.</Typography>
                        <Typography className='para'>The choice of how to achieve a whiter smile is up to you. How amazing is that!</Typography>
                        <Box>
                          <Typography className='subtitle' variant="h4" gutterBottom align={width > 600 ? 'left' : 'center'} style={{fontSize:"1.1rem"}}>Pola Day</Typography>
                          <Typography className='para'>Achieve a brighter smile with the unique blend of soothers as you go by your daily errands. Our dentist will provide you with a custom-fitted tray that you can wear for 30-minutes every day. Repeat this process for about 5-10 days, and you will see your teeth glow.</Typography>
                        </Box>
                        <Box>
                          <Typography className='subtitle' variant="h4" gutterBottom align={width > 600 ? 'left' : 'center'} style={{fontSize:"1.1rem"}}>Pola Night</Typography>
                          <Typography className='para'>You can still make your teeth brighter even when asleep. Our dentist will provide you with a custom-fitted tray that you can wear overnight or for 40 minutes before sleeping. Depending on your desired results, repeat this process for about 5-10 nights for a whiter, brighter smile.</Typography>
                        </Box>
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
                                    How to whiten teeth naturally?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>There are various ways you can use to reclaim the brightness of your teeth naturally. Among them include brushing and flossing regularly, eating vegetables and fruits, brushing with baking soda, practicing oil pulling, and hydrogen teeth whitening.</Typography>
                                  <Typography className='para'>Additionally, it is best to cut or reduce staining beverages such as soda, coffee, red wine, and sugary drinks.</Typography>
                                </Box>
                              </Box>
                            </Box>


                            <Box className="card">
                              <Box className="card-header" id="headingTwo">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    How long does teeth whitening treatment last?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>With Pola teeth whitening, you can keep the shine of your teeth for up to 3 years. Conversely, at-home products can only last you a few months.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingThree">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    Can I eat after teeth whitening?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Yes. Your dentist will advise on what to eat after teeth whitening treatment and will instruct you to avoid sugary drinks or foods that stain the teeth. If you cannot do without dark-coloured drinks, remember to use straws.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingFour">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                    How to use Pola teeth whitening?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Once you are through with the in-hospital Pola Teeth Whitening, our dentist will provide you with a custom-fitted tray that you can wear to brighten your teeth. For better results, ensure that you wear the trays daily for 30-40 minutes for about 5-10 days.</Typography>
                                </Box>
                              </Box>
                            </Box>

                            <Box className="card">
                              <Box className="card-header" id="headingFive">
                                <Typography className='subtitle mb-0' variant="h3">
                                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                    How much do professional teeth whitening cost?
                                  </button>
                                </Typography>
                              </Box>
                              <Box id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                <Box className="card-body">
                                  <Typography className='para'>Professional teeth whitening cost varies depending on the product and the type of service you seek. Zoom in-chair teeth whitening will cost $499 and take home Pola systems will cost $299*</Typography>
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

export default TeethWhitening