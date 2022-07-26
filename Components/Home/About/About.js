import { Container, Grid, Box, Typography } from "@mui/material";
import Styles from '../../../styles/Home/About.module.css';
import Clinic from '../../../public/Home/About/clinic.jpg';
import Image from 'next/image'
import Link from 'next/link'
import { BlueBtn } from "../../components";

const About = () => {
    return (
        <>
            <Container maxWidth="xxl" className="bg-light">
                <Grid container>
                    <Grid item xs={12} md={10} className="mx-auto">
                        <Box py={8}>
                            <Grid container spacing={5}>
                                <Grid item xs={12} lg={6}>
                                    <Box className={Styles.ImageContainer}>
                                        <Image src={Clinic} alt="Bayswater Dentist Clinic" />
                                        <Box className={Styles.aboutAppointment}>
                                            <Typography className={Styles.head} gutterBottom>BOOK YOUR DENTAL APPOINTMENT ONLINE</Typography>
                                            <Typography className={Styles.bluePara} gutterBottom>We are here for you, always!</Typography>
                                            <BlueBtn navlink={true} link="/book/" text="BOOK NOW" />
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Box>
                                        <Typography variant="h2" gutterBottom><span className={Styles.span1}>Welcome to</span> <br /><span className={Styles.span2}>Bayswater Dentist</span></Typography>
                                        <Typography className="para">Bayswater Dentist offer comprehensive dental services including cosmetic, implant and restorative dental treatments. We use the latest dental technology which helps us provide personalized patient care. Our team employ innovative techniques to improve your quality of life and oral health. There is nothing more important to us than providing you with your best dental experience from the moment you step in to our clinic.</Typography>
                                        <Typography className="para">We accept public dental service schemes like Victorian Emergency Dental Scheme (VEDS), Victorian General Dental Scheme (VGDS) and Child Dental Benefit Schedule (CDBS) with no paper work for you! Our dentists speak English, Hindi, Tamil, Urdu and Arab. We are very gentle with kids and give them the time required for a great dental experience.</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default About