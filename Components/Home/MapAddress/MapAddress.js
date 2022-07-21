import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import Styles from '../../../styles/Home/MapAddress.module.css'
import { SectionalHeading } from '../../components'
import { FiPhone } from 'react-icons/fi'
import { LocationOnOutlined, MailOutline } from "@mui/icons-material";

const MapAddress = () => {
    return (
        <>
            <Container maxWidth="xxl" className='p-0' id="addressMap">
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Box className="embed-responsive embed-responsive-1by1">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25206.167519011815!2d145.263!3d-37.842248!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7283430ff311551e!2sBayswater%20Dentist!5e0!3m2!1sen!2sin!4v1658405619818!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box style={{ height: "100%" }} className={`${Styles.address} d-flex justify-content-center align-items-center`}>
                            <Box py={1}>
                                <SectionalHeading variant="h2" align="center" title="BAYSWATER DENTIST" />
                                <Box p={1} mt={1} id="addressBox">
                                    <List>
                                        <ListItem>
                                            <ListItemIcon>
                                                <FiPhone style={{ color: "var(--blue)", fontSize:"1.8rem", marginRight:"0.8rem" }} />
                                            </ListItemIcon>
                                            <a href="tel:(03)-9069 3100">
                                                <ListItemText primary="(03)-9069 3100"  />
                                            </a>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <LocationOnOutlined style={{ color: "var(--blue)", fontSize:"1.8rem", marginRight:"0.8rem" }} />
                                            </ListItemIcon>
                                                <ListItemText primary="664 Mountain Hwy, Bayswater VIC 3153, Australia"  />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <MailOutline style={{ color: "var(--blue)", fontSize:"1.8rem", marginRight:"0.8rem" }} />
                                            </ListItemIcon>
                                            <a href="mailto:bayswaterdentist@gmail.com">
                                                <ListItemText primary="bayswaterdentist@gmail.com"  />
                                            </a>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default MapAddress