import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css'
import '../styles/Footer.css'
import '../styles/Header.css'
import '../styles/media.css'
import "swiper/css/bundle";


import { Header, Footer } from '../Components/components'

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossOrigin="anonymous" />
      <script defer src="https://connect.podium.com/widget.js#ORG_TOKEN=6fcbac5a-ab67-46ba-adae-2b930504d726" id="podium-widget" data-organization-api-token="6fcbac5a-ab67-46ba-adae-2b930504d726"></script>
      <meta name="facebook-domain-verification" content="9ituueu5p1lwsbqnsjhyzrlznqne8x" />
      
    </Head>
    {/* <!-- Google Tag Manager (noscript) --> */}
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TP2SRNH"
      height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
    {/* <!-- End Google Tag Manager (noscript) --> */}
    <Script data-he-id="89445" data-alignment="left" data-he-fixed="true" data-background-color="#003a4c" src="https://healthengine.com.au/webplugin/appointments.js"></Script>
    <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></Script>
    <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></Script>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></Script>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>)
}

export default MyApp
