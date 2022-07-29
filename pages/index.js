import Head from 'next/head'
import { useEffect } from 'react'
import { About, Hero, Offer, ServiceSec, ServiceSlider, PaymentOpt, MapAddress, BlogSec } from '../Components/components'
import Styles from '../styles/Home/Home.module.css'

const Home = () => {
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
        <main>
            <section>
                <ServiceSec />
            </section>
            <section style={{ overflowX: "hidden" }}>
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
                <BlogSec />
            </section>
        </main>
    </>)
}

export default Home