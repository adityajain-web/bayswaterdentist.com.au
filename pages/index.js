import Head from 'next/head'
import { About, Hero, Offer, ServiceSec, ServiceSlider, PaymentOpt, MapAddress, BlogSec } from '../Components/components'
import Styles from '../styles/Home/Home.module.css'

const Home = () => {
    return (<>
        <Head></Head>
        <Hero />
        <main>
            <section>
                <ServiceSec />
            </section>
            <section>
                <About />
            </section>
            <section className='mt-md-5 mt-3 py-md-3 py-4'>
                <ServiceSlider />
            </section>
            <section className='mt-md-5 mt-3 py-md-3 py-4 bg-light'>
                <Offer />
            </section>
            <section className='mt-md-2 mt-3 py-md-3 py-4'>
                <PaymentOpt />
            </section>
            <section className='mt-md-2 mt-3 py-md-3 py-4'>
                <MapAddress />
            </section>
            <section className='mt-md-2 mt-3 py-md-3 py-4'>
                <BlogSec />
            </section>
        </main>
    </>)
}

export default Home