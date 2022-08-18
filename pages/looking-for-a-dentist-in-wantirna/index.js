import { Box, Container, Grid, Typography } from "@mui/material"
import Head from "next/head"
import { useEffect, useState } from "react"
import { CommonHero, PageSectionalHeading } from "../../Components/components"

const Wantirna = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])
  return (
    <>
      <Head>
        <meta name="description" content="Visiting the right dentist will make your visits enjoyable. We understand how vital your teeth are for you. Schedule an appointment with Bayswater Dentist near Wantirna." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/looking-for-a-dentist-in-wantirna/" />
        <title>Family Dentist in Wantirna  | Bayswater Dentist</title>
      </Head>
      <CommonHero />
      <main>
        <section className="mt-md-4 mt-3">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={2}>
                  <Typography className="para">Visiting the dentist can sometimes be scary and intimidating for some people. The x-ray machines, buzzing sounds, the big chairs- this can all be a bit overwhelming. However, if you visit the right dental office with a professional dentist, your experience will be much easier. </Typography>
                  <Typography className="para">At Bayswater Dentist near Wantirna, we understand how vital your teeth are for you. That is why we always strive to offer you quality, friendly and patient-centred dental services. At our dental clinic, our dentist is always ready to receive emergency services. Therefore, do not hesitate to visit our dental offices in case of a dental emergency. </Typography>
                  <Typography className="para">Wantirna is a suburb in Melbourne, Victoria in, Australia. The suburb is located 24 km east of Melbourne Central Business District. It has a population of 14, 237, according to the 2021 census. The name Wantirna is derived from local aboriginal people, meaning &quot;a gurgling stream&quot;. The first people to settle in the suburb were people of European descent back in 1840. This was when a woman known as Mrs Medeline Scott established a Bush Park cattle run on the Dandenong Creek banks. </Typography>
                  <Typography className="para">
                    Today, the suburb has grown and has a number of interesting things one can do. You can visit Westfield Knox for some outdoor entertainment and picnic. Westfield Knox is one of the major shopping centres in the suburb. Other interesting places one can visit in the suburb include the blind creek trail and the Heide Museum of Modern Art. Bayswater dentist is located just a few kilometres from Wantirna.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="mt-md-4 mt-3 bg-light">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={2}>
                  <PageSectionalHeading title="Dental Service Offered by Bayswater Dentist near Wantirna" variant="h2" align="center" />
                  <Box className="mt-3">
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Teeth Whitening </Typography>
                    <Typography className="para">Teeth whitening is one of the most sort-after dental treatments. Most people are always looking for ways they can make their teeth whiter and smile brighter. However, most over-the-counter whitening methods don&apos;t yield satisfactory results. At Bayswater dentist near Wantirna, we use different whitening methods, including ZOOM and Boutique treatment. </Typography>
                  </Box>

                  <Box className="mt-3">
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Dental Fillings</Typography>
                    <Typography className="para">Dental cavities are quite common and easy to get. If you have a cavity, it is recommended that you use a filling before it advances to tooth decay. The treatment takes less than an hour to complete. During the procedure, you might feel some pressure, but it is not painful at all. </Typography>
                  </Box>

                  <Box className="mt-3">
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Dental Crown</Typography>
                    <Typography className="para">If you have a cavity and it is a little too big for a dental filling, a dental crown can be a perfect answer. You can also use a dental crown if your tooth is decayed to cracked. During the procedure, the dentist will take a mould of your teeth and take it to the lab for crafting. Once the crafting is done, the dentist will come and fit it over the decayed area after cleaning</Typography>
                  </Box>

                  <Box className="mt-3">
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Professional Teeth Cleaning</Typography>
                    <Typography className="para">This is one of the most common reasons why people visit the dentist. It is recommended you visit the dentist for a dental cleaning at least twice a year. It is very vital for your oral health. Your own dental hygiene routine can never be as efficient as the tools used by the dentist to clean. Professional dental cleaning will keep your teeth healthy, strong and bright. </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="mt-md-4 mt-3">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={2}>
                <PageSectionalHeading title="Bottom Line" variant="h2" align={width > 600 ? 'left' : 'center'} />
                  <Typography className="para">Visiting the dentist may seem intimidating for some; however, visiting the right dentist will make your visits enjoyable. Our staff at Bayswater Dentist near Wantirna will make sure they give you a warm reception and make you comfortable. Our dentist is also friendly and will listen to all your concerns. Make an appointment with us today!</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Wantirna