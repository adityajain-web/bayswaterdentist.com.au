import Head from 'next/head'
import {CommonHero} from '../../Components/components'

const ThankYou = () => {
    return (
        <>
            <Head>
                <meta name="description" content="" />
                <meta name="robots" content="index" />
                <link rel="canonical" href="/thank-you/" />
                <title>THANK YOU</title>
            </Head>
            <CommonHero align="left" grid={true} />
        </>
    )
}

export default ThankYou