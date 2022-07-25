import { Container, Grid, Box, Typography } from '@mui/material';
import { useRouter } from 'next/router'
import Styles from '../../styles/CommonHero.module.css'

import AboutBg from '../../public/About/Hero/about-bg.jpg'
import { useEffect, useState } from 'react';
import { BlueBtn } from '../components';
import { SignalWifiStatusbarNull } from '@mui/icons-material';

const CommonHero = () => {
    const { pathname } = useRouter()

    const background = [
        { id: "about", slug: "/about", bg: AboutBg, title: "Bayswater Dental Clinic", subtitle: "Bayswater Dentist is delighted to provide residents with high-quality and comprehensive dental care to meet their needs.", bookNow: true }
    ]

    const bgImage = background.filter(entries => entries.slug === pathname)

    return (
        <>
            <Container maxWidth="xxl" className={Styles.hero} style={{ backgroundImage: bgImage.length > 0 ? `url(${bgImage[0].bg.src})` : null }}>
                <Grid container style={{ height: "inherit" }}>
                    <Grid item xs={11} md={10} className="mx-auto d-flex justify-content-center align-items-center" style={{ height: "inherit" }}>
                        {
                            bgImage.length > 0 ? <Box id="heroText">
                                {
                                    bgImage[0].title !== null ? <Typography variant='h1' align='center' className={Styles.head}>{bgImage[0].title}</Typography> : null
                                }
                                {
                                    bgImage[0].subtitle !== null ? <Typography className={Styles.para} align='center'>{bgImage[0].subtitle}</Typography> : null
                                }
                                {
                                    bgImage[0].bookNow ? <Box className='text-center' mt={2}>
                                        <BlueBtn navlink={true} link="/book/" text="BOOK NOW" />
                                    </Box> : SignalWifiStatusbarNull
                                }
                            </Box> : null
                        }
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default CommonHero