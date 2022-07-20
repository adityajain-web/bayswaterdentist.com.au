import { Container, Grid, Box, Paper } from '@mui/material'
import React from 'react'
import { MediaObject } from '../../components';
import DentalImplant from '../../../public/Home/ServicesSec/implants.svg'
import RootCanal from '../../../public/Home/ServicesSec/canal.svg'
import WisdomTeeth from '../../../public/Home/ServicesSec/wisdome.svg'
import Styles from '../../../styles/Home/Service.module.css'


const ServiceSec = () => {
    return (
        <>
            <Container maxWidth="xxl" className='bg-light'>
                <Grid container>
                    <Grid item xs={11} md={10} className="mx-auto">
                        <Box px={3} py={5} component={Paper} className={`shadow rounded-lg ${Styles.serviceBox}`}>
                            <Grid container spacing={5} justifyContent="center">
                                {
                                    [
                                        { id: "home_service_1", title: "DENTAL IMPLANTS", link: "/dental-implants/", text: "Dental Implant is the best way to replace a missing tooth", image: DentalImplant, alt:"Dental Implants" },
                                        { id: "home_service_2", title: "WISDOM TEETH", link: "/wisdom-teeth/", text: "Bayswater Dental team are great at Wisdom teeth removal", image: WisdomTeeth, alt:"Wisdom Teeth" },
                                        { id: "home_service_3", title: "ROOT CANAL", link: "/root-canal/", text: "Save your tooth if you can! Bayswater Dentist will perform root canal treatment in a caring way.", image: RootCanal, alt:"Root Canal" }
                                    ].map(item => <Grid key={item.id} item xs={12} md={6} lg={4}>
                                        <MediaObject mediaTitle={item.title} navlink={true} link={item.link} mediaText={item.text} mediaImage={item.image} mediaImageAlt={item.alt} />
                                    </Grid>)
                                }
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ServiceSec