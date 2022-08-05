import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { CommonHero, PageSectionalHeading } from '../../Components/components'
import { CheckCircleOutline } from '@mui/icons-material'

const TNC = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])
  return (
    <>
      <Head>
        <meta name="description" content="" />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="/terms-and-conditions/" />
        <title>Terms and Conditions</title>
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
      <CommonHero />
      <main>
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className='mx-auto'>
                <Box py={5}>
                  <Box>
                    <PageSectionalHeading title="$149 Scale & Clean and Check-up offer" variant="h2" align={width > 600 ? 'left' : 'center'} />
                    <Typography className="para">This offer is only available for appointments made before Aug 4th 2022.</Typography>
                    <Typography className="para">The offer is available on the basis of the availability of appointments with practitioners This service will only be given to patients who clinically need it. In other words, service is dependent on necessity.</Typography>
                    <Typography className="para">X-ray and other dental procedures are not part of this offer.</Typography>
                    <Typography className="para">Patients who qualify for this offer are those who practice good oral hygiene such as flossing, brushing two times every day, and seeking regular dental check-ups. If your teeth require several sittings to get clean, this offer won’t be available to you.</Typography>
                    <Typography className="para">This offer cannot be substituted for cash. Besides, it cannot be combined with other offers or government schemes.</Typography>
                  </Box>
                  <Box mt={3}>
                    <PageSectionalHeading title="Scale and Clean with Full Check Up offer" variant="h2" align={width > 600 ? 'left' : 'center'} />
                    <Typography className="para">This offer is only available for appointments made before 11th Dec 2022.</Typography>
                    <Typography className="para">The offer is available on the basis of the availability of appointments with practitioners This service will only be given to patients who clinically need it. In other words, service is dependent on necessity.</Typography>
                    <Typography className="para">X-ray and other dental procedures are not part of this offer.</Typography>
                    <Typography className="para">Patients who qualify for this offer are those who practice good oral hygiene such as flossing, brushing two times every day, and seeking regular dental check-ups. If your teeth require to get several sittings to get clean, this offer won’t be available to you.</Typography>
                    <Typography className="para">This offer cannot be substituted for cash. Besides, it cannot be combined with other offers or government schemes.</Typography>
                  </Box>
                  <Box mt={3}>
                    <PageSectionalHeading title="Kid’s Dental offers T&Cs" variant="h2" align={width > 600 ? 'left' : 'center'} />
                    <Typography className="para">The offer is only valid for dental appointments set before 11th Dec 2022.</Typography>
                    <Typography className="para">This offer’s availability is dependent on whether participating practitioners will be available for the appointments.</Typography>
                    <Typography className="para">Service is only available to patients who clinically need it.</Typography>
                    <Typography className="para">Independent practitioners will offer dental services at our dental facilities.</Typography>
                    <Typography className="para">X-ray and other dental procedures are not available in this offer.</Typography>
                    <Typography className="para">Patients eligible for this offer must have been practicing good oral hygiene such as brushing twice each day, flossing, and regular check-ups. If your teeth need several cleanings for your teeth to get clean, this offer will not be available to you.</Typography>
                    <Typography className="para">The offer is irredeemable and can’t be substituted for cash. In addition, it cannot be combined with other offers, including government schemes.</Typography>
                  </Box>
                  <Box mt={3}>
                    <PageSectionalHeading title="Child Dental Benefit Scheme (CDBS) – Terms and Conditions" variant="h2" align={width > 600 ? 'left' : 'center'} />
                    <Typography className="para">This offers provides up to $1000 worth of free dental care valid for dental appointments attended before the date set by the Australian Department of Health.</Typography>
                    <Typography className="para">The availability of this offer depends on the availability of appointments with practitioners.</Typography>
                    <Typography className="para">The service will only be given to children who clinically need it.</Typography>
                    <Typography className="para">The offer cannot be redeemed for cash. Besides, patients cannot use it together with other offers.</Typography>
                    <Typography className="para">Children must be in the set age gap of 2 -17 years and meet the basics of CBDS Parents should be aware that this scheme caters to dental procedures such as filling, routine cleaning, repairing cracked teeth, root canal treatment, and examination. However, CBDS does not cover cosmetic procedures such as cosmetic procedures, orthodontic treatment (braces), and dental procedures are done in the hospital.</Typography>
                    <Typography className="para">Children who qualify for bulk-billed dental must meet basic requirements by Medicare.</Typography>
                  </Box>
                  <Box mt={3}>
                    <PageSectionalHeading title="$249 Teeth Whitening Take Home Promotion – Terms and Conditions" variant="h2" align={width > 600 ? 'left' : 'center'} />
                    <Typography className="para">The offer is only valid for dental appointments scheduled and attended before the year ends (11th Dec 2022).</Typography>
                    <Typography className="para">The package is custom made with a Pola Teeth Whitening kit and bleaching trays.</Typography>
                    <Typography className="para">Service is only provided to patients who clinically need it.</Typography>
                    <Typography className="para">Independent practitioners may provide dental services and procedures at our dental facilities.</Typography>
                    <Typography className="para">This offer is irredeemable and cannot be substituted for cash. Besides, the offer cannot be combined with other offers and government schemes.</Typography>
                    <Typography className="para">A full examination, X-rays, and teeth cleaning may be required before the teeth whitening procedure. These costs are not part of the package and will be performed at the expense of the patient.</Typography>
                    <Typography className="para">Only people above 18 years are eligible for this offer.</Typography>
                    <Typography className="para">Teeth whitening isn’t recommended for those with epilepsy and people with individual medication.</Typography>
                    <Typography className="para">Teeth whitening is not encouraged for pregnant and breastfeeding mothers.</Typography>
                    <Typography className="para">A prior examination must be performed on each patient to determine whether they are eligible for treatment.</Typography>
                    <Typography className="para">There are no guarantees that teeth whitening will work for you. However, most patients are satisfied with how it works for them.</Typography>
                  </Box>
                  <Box mt={3}>
                    <PageSectionalHeading title="Dental Implant for just $3700 – crown, abutment, and implant – Terms and Conditions" variant="h2" align={width > 600 ? 'left' : 'center'} />
                    <Typography className="para">The offer is only valid for dental appointments set and attended before the year ends (31st Dec 2022).</Typography>
                    <Typography className="para">The offer does not include radiographs and CT scans done outside our dental clinic.</Typography>
                    <Typography className="para">Offer includes X-rays and consultation done at our facility in preparation of the treatment.</Typography>
                    <Typography className="para">The promotion package includes a single dental implant abutment, single implant crown, and single titanium screw for one tooth only.</Typography>
                    <Typography className="para">A prior examination must be performed on all patients to determine whether they are eligible for the treatment. An implant is not suitable for everyone.</Typography>
                    <Typography className="para">The patient will be asked to cater for additional dental treatments such as bone grafting and tooth extraction separately.</Typography>
                    <Typography className="para">The procedure is surgically invasive and may involve a degree of risk. As a result, it’s necessary to seek a second opinion from an expert before proceeding with treatment.</Typography>
                    <Typography className="para">This offer cannot in any way be combined with other offers.</Typography>
                  </Box>
                  <Box mt={3}>
                  <PageSectionalHeading title="Dental Implant at just $87 per week - Implant, Crown and Abutment – Terms and Conditions" variant="h2" align={width > 600 ? 'left' : 'center'} />
                  <Typography className="para">This offer is only valid for appointments set and attended before the year ends (31st December 2022).</Typography>
                  <Typography className="para">A patient will be required to pay an initial deposit of 740$, and repayment should be spread across nine months.</Typography>
                  <Typography className="para">Total costs include consultation fees of $60 on the day of consultation.</Typography>
                  <Typography className="para">Not all customers meet the requirements for this offer. We can confirm your eligibility when you visit for consultation.</Typography>
                  <Typography className="para">Higher initial payment may be required if the patient does not meet the requirements.</Typography>
                  <Typography className="para">The credit provider is Openpay Pty Ltd, and T&C available at <a href='Openpay.com.au' target="_blank" rel="noreferrer">Openpay.com.au</a>.</Typography>
                  <Typography className="para">The treatment plan begins only after the payment is processed successfully.</Typography>
                  <Typography className="para">The offer does not include other procedures such as CT Scans and Radiographs performed outside our dental clinic.</Typography>
                  <Typography className="para">Offer includes X-rays and consultation done in preparation of the treatment in our facility.</Typography>
                  <Typography className="para">The promotion package comprise of placement of a single titanium screw, single implant crown, and single dental abutment for one teeth.</Typography>
                  <Typography className="para">A prior examination must be performed to determine treatment suitability. An implant is not suitable for everyone.</Typography>
                  <Typography className="para">The patient will be required to pay extra for additional dental treatments such as bone grafting and tooth extraction separately.</Typography>
                  <Typography className="para">Not everyone can get a dental implant. Every patient will undergo an examination before a dental implant is provided.</Typography>
                  <Typography className="para">It cannot be used with offers.</Typography>
                  </Box>
                  <Box mt={3}>
                  <PageSectionalHeading title="DPatient Referral Program – Terms and Conditions" variant="h2" align={width > 600 ? 'left' : 'center'} />
                  <Typography className="para">For each successful referral, you will go ahead and receive a $25 credit for your next appointment.</Typography>
                  <Typography className="para">Referral credit is usable for you or a family member.</Typography>
                  <Typography className="para">Credits cannot be redeemed for cash.</Typography>
                  <Typography className="para">A referring patient must be a current patient in our clinic.</Typography>
                  <Typography className="para">Referred patients should provide the name of referring patient when booking their appointment.</Typography>
                  <Typography className="para">Only a single credit can be applied per visit.</Typography>
                  <Typography className="para">Terms and conditions may change anytime.</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default TNC