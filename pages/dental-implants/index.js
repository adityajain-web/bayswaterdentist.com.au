import { Box,Container, Grid } from '@mui/material'
import Head from 'next/head'
import { CommonHero, ServiceSidebar } from '../../Components/components'

const DentalImplants = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Visit an experienced Dentist in Bayswater that provides dental Implants to anchor replacement teeth and enhance your smile. Book an appointment now!" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/dental-implants/" />
        <title>Dental Implant in Bayswater | Bayswater Dentist</title>
      </Head>
      <CommonHero align="center" />
      <main>
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Box py={5}>
                <Grid container spacing={10}>
                  <Grid item xs={12} lg={4}>
                    <ServiceSidebar />
                  </Grid>
                  <Grid item xs={12} lg={8}></Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  )
}

export default DentalImplants