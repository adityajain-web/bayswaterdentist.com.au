import Head from 'next/head'
import { useEffect, useState } from 'react'
import { About, Hero, Offer, ServiceSec, ServiceSlider, PaymentOpt, MapAddress, BlogSec, } from '../Components/components'
import { Container, Box, IconButton, Card, CardMedia, CardContent, Typography, Button } from '@mui/material'
import Link from 'next/link'
import { Close } from '@mui/icons-material'
import { useRouter } from 'next/router'
import PopupImage from '../public/Home/Popup/Scale-Clean.jpg'

export const getServerSideProps = async () => {
    const res = await fetch(`https://bayswaterdentist.com.au/blog/wp-json/wp/v2/posts?_embed=true&page=1&per_page=3`);
    const data = await res.json();
    return {
      props: {
        data,
      },
    }
}

const Home = ({data}) => {
    const [width, setWidth] = useState()
    const [open, setOpen] = useState(false)
    const router = useRouter()

    console.log(data)

    useEffect(() => {
        if (open === false) {
            document.querySelector('footer').style.display = "none"
        } else if (open === true) {
            document.querySelector('footer').style.display = "block"
        }
    }, [open])

    useEffect(() => {

        if (router.pathname === "/") {
            let timer = setTimeout(() => {
                setOpen(true)
            }, 30000)
        }
    }, [router.pathname, open])

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])



    const Popup = () => {
        return (<>
            <Container maxWidth="xxl" style={{ height: "100%", backgroundColor: "rgba(0,0,0,0.7)", position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }} className="d-flex justify-content-center align-items-center">
                <Box mt={10} p={3}>
                    <Box className='d-flex justify-content-end'>
                        <IconButton onClick={() => setOpen(true)}>
                            <Close style={{ color: "#fff" }} />
                        </IconButton>
                    </Box>
                    <Box mt={2}>
                        <Card className='shadow grow' style={{ width: "20rem" }}>
                            <CardMedia component="img" image={PopupImage.src} alt="scale and clean" />
                            <CardContent>
                                <Typography variant='h3' align='center' className='subtitle'>$199 Scale & Clean and Check-up Offer*</Typography>
                                <Typography className='para' align="center"><strong>*Limited time offer.</strong></Typography>
                                <Box mt={3}>
                                    <Button fullWidth className="blueBtn" onClick={() => setOpen(true)}>
                                        <Link href="/book/">
                                            <a style={{ color: "#fff", fontWeight: "bold", textDecoration: "none" }}>BOOK NOW</a>
                                        </Link>
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Container>
        </>)
    }


    return (<>
        <Head>
            <title>Affordable Family Dentist in Bayswater | Bayswater Dentist</title>
            <meta name="description" content="Looking for family dental clinic in Bayswater. Bayswater Dentist offers personalised and professional dental care from a highly experienced dentist. Visit today!" />
            <meta name="robots" content="index" />
            <link rel="canonical" href="/" />
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
        <Hero />
        {open ? <><main>
            <section>
                <ServiceSec />
            </section>
            <section style={{ overflow: "hidden" }}>
                <About />
            </section>
            <section className='mt-md-5 mt-3 py-md-3 py-4'>
                <ServiceSlider />
            </section>
            <section style={{ overflowX: "hidden" }} className='mt-md-5 mt-3 py-md-3 py-4 bg-light'>
                <Offer />
            </section>
            <section style={{ overflowX: "hidden" }} className='mt-md-2 mt-3 py-md-3 py-4'>
                <PaymentOpt />
            </section>
            <section style={{ overflowX: "hidden" }} className='mt-md-2 mt-3 py-md-3 py-4'>
                <MapAddress />
            </section>
            <section style={{ overflowX: "hidden" }} className='mt-md-2 mt-3 py-md-3 py-4'>
                <BlogSec blogs={data} />
            </section>
        </main></> : <Popup />}
    </>)
}

export default Home