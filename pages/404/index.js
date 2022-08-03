import { Container, Box } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import ErrorImage from '../../public/Error/404.gif'
import { BlueBtn } from '../../Components/components';


const Error = () => {
    return (
        <>
            <Head>
                <meta name="description" content="" />
                <meta name="robots" content="index" />
                <link rel="canonical" href="/about/" />
                <title>404 | Page not found</title>
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
            <Container maxWidth="xxl" style={{ height: "100vh", width: "100%" }}>
                <Box style={{ height: "100%,", width: "100%", position: "absolute", zIndex: "-1", top: 0, left: 0, right: 0, bottom: 0 }}>
                    <Image src={ErrorImage.src} alt="page not found" layout='fill' />
                </Box>
                <Box className='d-flex justify-content-center' style={{ position: "absolute", zIndex: 2, left: 0, right: 0, bottom: "10%" }}>
                    <BlueBtn navlink={true} link="/" text="Go To Homepage" />
                </Box>
            </Container>
        </>
    )
}

export default Error