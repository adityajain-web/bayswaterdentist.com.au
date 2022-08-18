import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import Head from "next/head"
import { useEffect, useState } from "react"
import { CommonHero, PageSectionalHeading } from "../../Components/components"

const Kilsyth = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])
  return (
    <>
      <Head>
        <meta name="description" content="At Bayswater Dentist near Kilsyth, Our experienced dentists are very welcoming to our new patients. For more information visit us or contact us at (03)-9069 3100." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/kilsyth-dentist/" />
        <title>Kilsyth Dentist - Cosmetic Dentistry | Bayswater Dentist</title>
      </Head>
      <CommonHero />
      <main>
        <section className="mt-md-4 mt-3">
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={2}>
                  <Typography className="para mb-3">It can be nerve-racking to prepare for a dental appointment, especially with a new dentist. However, sometimes you may find yourself in that position and finding a dentist that is good in their work is not easy. And this is where our dentist in Bayswater Dentist comes in! At Bayswater Dentist near Kilsyth, we are very welcoming to our new patients. There are quite a number of dentists to choose from in Melbourne that offer all types of dental services. But, it is important that you chose the right one for you. Visit us at Bayswater Dentist and get to enjoy all the dental services that we can offer.</Typography>
                  <Typography className="para mb-3">Kilsyth is located within the city of Maroondah, a suburb of Melbourne, Victoria in Australia. Kilsyth has four primary schools and is home to a range of sporting facilities and teams. It also has two main shopping centres- the Churinga and Kilsyth. Kilsyth comprises a significant industrial area which stretches from Liverpool Road to Dorset Road. Bayswater Dentist is close by Kilsyth. Set up some time to visit us someday.</Typography>
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
                  <PageSectionalHeading title="Dental Services Offered by Bayswater Dentist near Kilsyth" variant="h2" align="center" />
                  <Box className="mt-md-4 mt-3">
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Dental Implants</Typography>
                    <Typography className="para mb-3">Dental implants are the most common and best way to replace natural teeth. The installation of implants involves minor surgery to place the implant into the patient’s jawbone. Although the procedure may take several months and a few procedures to complete, the placement of the implant gives the patient permanent artificial teeth.</Typography>
                  </Box>

                  <Box className="mt-md-4 mt-3">
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Dental Crowns</Typography>
                    <Typography className="para mb-3">Dental crowns are used to restore teeth that have been severely destroyed by decay or injury. As a dental restorative treatment, a dental crown is one of the most commonly used options which can save damaged teeth from extraction. Additionally, they can be used to correct cosmetic imperfections. </Typography>
                    <Typography className="para mb-3">In most cases, the procedure takes about two appointments to complete because the crown has to be customized in the dental laboratory.</Typography>
                  </Box>

                  <Box className="mt-md-4 mt-3">
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Regular Dental Care</Typography>
                    <Typography className="para mb-3">Having your teeth checked by the dentist on a regular basis can help to detect oral issues before they worsen and keep your teeth strong and healthy. During the dental check-up, the dentist will assess your mouth to ensure that everything is okay. </Typography>
                  </Box>

                  <Box className="mt-md-4 mt-3">
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Polishing and Scaling</Typography>
                    <Typography className="para mb-3">Scaling and polishing are important procedures as they help to remove hardened tartar that sticks to the teeth. The procedures help in preventing gum recession and gum diseases that can cause shaky teeth and tooth loss. The procedure can also help in removing stains caused by food such as tea, coffee or smoking. It may also help to prevent oral problems like tooth decay and cavities.</Typography>
                  </Box>

                  <Box className="mt-md-4 mt-3">
                    <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Dental Sealants</Typography>
                    <Typography className="para mb-3">Sealants are made from plastic and are placed on the chewing surfaces of the back teeth to prevent tooth cavities. They are painted on as a fluid and harden to form protection over the teeth. Getting sealants on your teeth can save you a lot of money by safeguarding you from crowns, fillings and other treatments. </Typography>
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
                  <Typography className="para mb-3">At Bayswater Dentist near Kilsyth, we have a great team who can answer all your questions as well as respond to your needs. Not to mention our clean and organised, both adult and child-friendly clinic with a cosy ambience to make our patients comfortable. </Typography>
                  <Typography className="para mb-3">Contact us today and learn more about the latest in cosmetic and general dentistry in Australia</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Kilsyth