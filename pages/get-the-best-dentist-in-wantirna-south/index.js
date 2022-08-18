import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import Head from "next/head"
import { useEffect, useState } from "react"
import { CommonHero, PageSectionalHeading } from "../../Components/components"
import { CheckCircleOutline } from '@mui/icons-material'

const WantirnaSouth = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])
  return (
    <>
      <Head>
        <meta name="description" content="We at Bayswater Dentist near Wantirna South are heard for you. We offer several dental services, including emergency dentistry. Call us at (03)-9069 3100." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/get-the-best-dentist-in-wantirna-south/" />
        <title>Dentist in Wantirna South | Bayswater Dentist</title>
      </Head>
      <CommonHero />
      <main>
        <section className="mt-md-4 mt-3">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid xs={12} md={10} className="mx-auto">
                <Box py={2}>
                  <Typography className="para">Wantirna South is a suburb in Melbourne, Victoria in, Australia. It is located 25km East of Melbourne Business District. The suburb has a recorded population of 20,754, according to the census done in 2021. Most places of Wantirna South suburb were mostly comprised of orchards until 80 years ago. This was when the demand for housing grew, and people were forced to turn it into a settlement area. Today, the suburb has grown and has a lot of things one can do, including visiting the federation square. </Typography>
                  <Typography className="para">Due to the rising need for affordable and quality dental services, Bayswater dentist is well located near Wantirna South. We offer different dental services, including emergency dentistry. Therefore, if you are in Wantirna South and its surroundings and you are looking for a dentist, Bayswater Dentist is the place to visit. Here are some of the services offered at our clinic. </Typography>
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
                  <Box>
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Root Canal</Typography>
                    <Typography className="para">This is one of the most dreaded dental procedures. People often associate the treatment with pain. However, with the recent advancements in dentistry, root canal treatment is now painless and has less discomfort. </Typography>
                    <Typography className="para">A root canal means the tissue under or inside your tooth is infected and inflamed. To treat this kind of infection, the dentist needs to carry out a dental procedure and remove the infected tissue. Before the procedure, the dentist will talk to you and choose your preferred anaesthesia, depending on your level of anxiety. </Typography>
                  </Box>

                  <Box mt={3}>
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Dentures</Typography>
                    <Typography className="para">Most people associate dentures with old age. However, a lot of people may require dentures as a restoration treatment in case of tooth loss. Dentures can be used to replace a single or a couple of natural teeth. They can also be removed, especially at night, for cleaning. Denture fitting will require a number of visits to the dentist for proper moulding and fitting.</Typography>
                  </Box>

                  <Box mt={3}>
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Dental Bonding</Typography>
                    <Typography className="para">This is one of the ways you can repair chipped or damaged teeth. The process involves the use of resin, which is a form of plastic-like material that matches the shade of your natural teeth. The treatment is less invasive, especially when the dentist is dealing with some minor imperfections. The dentist might use several layers of resin on your tooth and dry it using a special dental light. It will then be polished and smoothened to match other natural teeth. </Typography>
                  </Box>

                  <Box mt={3}>
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Invisalign</Typography>
                    <Typography className="para">Today, most dental practices are moving away from using metal braces and are adapting Invisalign. A majority of people are not comfortable walking around with metal braces on their mouths. Invisalign is popular since they use a clear material that is not easily noticeable to straighten crooked teeth. The treatment might be slower compared to metal braces but very effective. </Typography>
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
                  <Typography className="para">Your smile is part of your personality. It is what identifies you. People will always give their opinion of you, depending on how bright your smile is. That is why it is vital to take care of it by practising good dental hygiene and visiting the dentist at least twice a year. </Typography>
                  <Typography className="para">We at Bayswater Dentist near Wantirna South are heard for you. We offer several dental services, including the ones mentioned above. Call us to schedule an appointment with us today!</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default WantirnaSouth