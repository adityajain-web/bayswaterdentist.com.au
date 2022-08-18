import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { CommonHero, InterestFree, PageSectionalHeading, ServiceSidebar, TNC } from '../../Components/components'
import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import pic1 from '../../public/smile-design/1.jpg'
import pic2 from '../../public/smile-design/2.jpg'
import pic3 from '../../public/smile-design/3.png'


const SmileDesign = () => {
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])
    return (
        <>
            <Head>
                <meta name="description" content="Bayswater Dentist offering a Smile Design service that uses the latest digital technology to rectify dental flaws and enhance a patient's smile." />
                <meta name="robots" content="index" />
                <link rel="canonical" href="/smile-design/" />
                <title>Smile Design | Bayswater Dentist</title>
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
            <CommonHero grid={true} />
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
                                                <PageSectionalHeading title="Smile Design" variant="h2" align='center' />
                                                <Grid container spacing={3}>
                                                    <Grid item xs={12} md={6}>
                                                        <Box>
                                                            <Image src={pic1} alt="girl smiling" />
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Box>
                                                            <Typography className='para'>Smile Design is a procedure that uses the latest in digital technology to rectify dental flaws and enhance a patient&apos;s smile. Smile Design whitens and straightens your teeth to give you an attractive smile. It also helps close gaps between your teeth so that you can feel confident and happy with your smile.</Typography>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Container>
                                        </section>
                                        <section className='mt-3 bg-light' style={{ borderRadius: "0.8rem" }}>
                                            <Container maxWidth="xxl" className='p-3'>
                                                <Box>
                                                    <PageSectionalHeading title="What is Smile Design?" variant="h2" align={width > 600 ? 'left' : 'center'} />
                                                    <Typography className="para">Smile Design is a method that analyses 2D images and then creates 3D prototypes.</Typography>
                                                    <Typography className="para">The 2D model displays the teeth as you would see in a mirror, while the 3D model is a 3-dimensional computerized representation of what your smile will look like with crowns or veneers. It shows how beautiful your teeth will look after the treatment.</Typography>
                                                    <Typography className="para">It gives you a holistic view of your mouth and teeth. It does not only focus on the colour of your smile.</Typography>

                                                </Box>
                                            </Container>
                                        </section>
                                        <section className='mt-3'>
                                            <Container maxWidth="xxl" className='p-3' >
                                                <PageSectionalHeading title="Bayswater Dentist Digital Smile Design process" variant="h2" align='center' />
                                                <Grid container spacing={3}>
                                                    <Grid item xs={12} md={6}>
                                                        <Box>
                                                            <Typography className='para'>Smile Design uses careful planning and advanced dentistry to provide the best results. The treatment is well planned to produce top-notch and desirable results. We combine efforts with our lab technicians to create the best outcome.</Typography>
                                                            <Typography className="para">The end result? You&apos;ll have a flattering balance as well as proportion that looks good on your smile. You will be sure to love it. Let&apos;s see the transformation!</Typography>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Box>
                                                        <Image src={pic2} alt="smile" />
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Container>
                                        </section>
                                        <section className='mt-3 bg-light' style={{ borderRadius: "0.8rem" }}>
                                            <Container maxWidth="xxl" className='p-3'>
                                                <Box>
                                                    <PageSectionalHeading title="You can attain the smile of your dream with the following simple steps:" variant="h2" align={width > 600 ? 'left' : 'center'} />
                                                    <Typography className="para"><strong>Visit 1:</strong> A dental impression and photos are taken, an X-Ray of the teeth, and finally, some impressions of the smile.</Typography>
                                                    <Typography className="para"><strong>Visit 2:</strong> The dentist will show you a preview of the smile using digital means.</Typography>
                                                    <Typography className="para"><strong>Visit 3:</strong> Preparation Day. This is the visit where the dentist will take another impression of your teeth. It will be sent to the lab to prepare your replacement. Taking of the impression will be done after the dentist has prepared your teeth for the final installation of your custom-made teeth, which will be done at the next appointment. In the meantime, you’ll be given a temporary crown to wear.</Typography>
                                                    <Typography className="para"><strong>Visit 4:</strong> This is the D-Day. The dentist will give you a new smile by replacing the temporary crown with a permanent one. You can now enjoy your new beautiful smile.</Typography>
                                                </Box>
                                            </Container>
                                        </section>
                                        <section className='mt-3'>
                                            <Container maxWidth="xxl" className='p-3' >
                                                <PageSectionalHeading title="How much does a Bayswater Dental Smile Design cost?" variant="h2" align='center' />
                                                <Grid container spacing={3}>
                                                    <Grid item xs={12} md={6}>
                                                        <Box>
                                                        <Image src={pic3} alt="smile" />
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Box>
                                                            <Typography className='para'>The treatment cost will depend on the number of teeth you plan to include in the procedure.</Typography>
                                                            <Typography className="para">However, health funds can cover x-rays and dental impressions.</Typography>
                                                            <Typography className="para">Contact Bayswater Dentist for information about smile design service.</Typography>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
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
                                                                    <button className="btn btn-block text-left font-weight-bold shadow-none" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                        What is a Full Smile?
                                                                    </button>
                                                                </Typography>
                                                            </Box>
                                                            <Box id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                                <Box className="card-body">
                                                                    <Typography className='para'>It is a smile that stretches on either side of your lips. To show a complete smile, you&apos;ll need to display 10-12 teeth.</Typography>
                                                                </Box>
                                                            </Box>
                                                        </Box>


                                                        <Box className="card">
                                                            <Box className="card-header" id="headingTwo">
                                                                <Typography className='subtitle mb-0' variant="h3">
                                                                    <button className="btn btn-block text-left font-weight-bold shadow-none" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                                        How Do I get a Perfect Smile?
                                                                    </button>
                                                                </Typography>
                                                            </Box>
                                                            <Box id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                                <Box className="card-body">
                                                                    <Typography className='para'>If you&apos;re looking for a perfect smile, then they all differ.</Typography>
                                                                    <Typography className="para">Some people are trying to get their teeth whiter, and others want perfectly straight teeth, whereas some will be fine with them being just a little crooked to achieve a perfect smile. So, it entirely depends on your preferences.</Typography>
                                                                    <Typography className="para">Make a dental appointment with us at Bayswater Dentist to learn more.</Typography>
                                                                </Box>
                                                            </Box>
                                                        </Box>

                                                        <Box className="card">
                                                            <Box className="card-header" id="headingThree">
                                                                <Typography className='subtitle mb-0' variant="h3">
                                                                    <button className="btn font-weight-bold shadow-none btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                                        What is Digital Smile Design?
                                                                    </button>
                                                                </Typography>
                                                            </Box>
                                                            <Box id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                                <Box className="card-body">
                                                                    <Typography className='para'>It is an advanced treatment that uses the latest technology in dentistry to study the facial and dental structures of a patient. It helps give a patient a customised smile.</Typography>
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

export default SmileDesign