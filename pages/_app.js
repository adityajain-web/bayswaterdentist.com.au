import { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import '../styles/Footer.css'
import '../styles/Header.css'
import '../styles/media.css'
import "swiper/css/bundle";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css'
import { Header, Footer } from '../Components/components'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  })

  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="facebook-domain-verification" content="9ituueu5p1lwsbqnsjhyzrlznqne8x" />
    </Head>

    {/* <!-- Google Tag Manager --> */}
    <Script id="google-tag-manager" strategy="lazyOnload">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TP2SRNH');`}
    </Script>
    {/* <!-- End Google Tag Manager --> */}
    {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-212912537-1"
      strategy="lazyOnload"
    ></Script>
    <Script id="google-analytics" strategy="lazyOnload">
      {
        `window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
  
        gtag("config", "UA-212912537-1");`
      }
    </Script>

    {/* <!-- Google Tag Manager (noscript) --> */}
    <noscript dangerouslySetInnerHTML={{
      __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TP2SRNH"
      height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>`}}></noscript>
    {/* <!-- End Google Tag Manager (noscript) -->   */}

    {/* <Script strategy="lazyOnload" data-he-id="89445" data-alignment="left" data-he-fixed="true" data-background-color="#003a4c" src="https://healthengine.com.au/webplugin/appointments.js"></Script>

    <Script strategy="lazyOnload" defer src="https://connect.podium.com/widget.js#ORG_TOKEN=6fcbac5a-ab67-46ba-adae-2b930504d726" id="podium-widget" data-organization-api-token="6fcbac5a-ab67-46ba-adae-2b930504d726"></Script> */}
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>)
}

export default MyApp
