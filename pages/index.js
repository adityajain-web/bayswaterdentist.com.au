import Head from 'next/head'
import { About, Hero, ServiceSec } from '../Components/components'
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
        </main>
    </>)
}

export default Home