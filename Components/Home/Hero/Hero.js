import { Container, Grid, Box, Typography } from "@mui/material"
import Styles from '../../../styles/Home/Hero.module.css'
import { BlueBtn } from "../../components"

const Hero = () => {
  return (
    <>
      <Container maxWidth="xxl" className={Styles.hero}>
        <Grid container style={{ height: "inherit" }}>
          <Grid item xs={12} md={10} className="mx-auto d-flex align-items-center" style={{ height: "inherit" }}>
            <Box id="heroText">
              <Typography data-aos="fade-up" variant="h1" className={`${Styles.h1} mb-4 text-md-left text-center`}><span className={Styles.span1}>Family Dentist at</span> <br/><span className={Styles.span2}>Bayswater</span></Typography>
              <Typography className={`${Styles.para} text-center text-md-left`}>Comprehensive Dental treatments here in Bayswater</Typography>
              <Box mt={3} className="text-md-left text-center">
              <BlueBtn navlink={true} link="/book/" text="BOOK NOW" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Hero