import { Container, Grid, Box, Typography } from '@mui/material';
import { useRouter } from 'next/router'
import Styles from '../../styles/CommonHero.module.css'

import { BlueBtn } from '../components';
import { SignalWifiStatusbarNull } from '@mui/icons-material';

import AboutBg from '../../public/About/Hero/about-bg.jpg';
import PatientRefBg from '../../public/Patient Referral Program/Hero.jpg';
import PaymentPlan from '../../public/Payment Plan/pyament-plan-banner.jpg';
import TeamBg from '../../public/Team/team-bg.jpg';
import OfferBg from '../../public/Offer/offerBg.jpg';
import ChildBenefitBg from '../../public/Child Benefit/child-benefits-bg.jpg'

const CommonHero = ({ grid, align }) => {
    const { pathname } = useRouter()

    const background = [
        { id: "about", slug: "/about", bg: AboutBg, title: "<span class='text-white headingHead'>Bayswater Dental Clinic</span>", subtitle: '<span class="text-white para">Bayswater Dentist is delighted to provide residents with high-quality and comprehensive dental care to meet their needs.</span>', bookNow: true},

        { id: "patient-referral-program", slug: "/patient-referral-program", bg: PatientRefBg, title: `<span class='headingSpan1'>Patient Referral</span> <br /> <span class='headingSpan2'>Program</span>`, subtitle: null, bookNow: true },

        { id: "payment-plans", slug: "/payment-plans", bg: PaymentPlan, title: "<span class='headingSpan1'>Payment Plans For Your</span> <br /> <span class='headingSpan2'>Dental Treatment</span>", subtitle: null, bookNow: true },

        { id: "team", slug: "/team", bg: TeamBg, title: "<span class='headingSpan1'>Meet Our Professional</span> <br /> <span class='headingSpan2'>Dental Care Team</span>", subtitle: null, bookNow: true },

        { id: "offer", slug: "/offer", bg: OfferBg, title: "<span class='headingSpan2'>Dental Visits</span> <br /> <span class='headingSpan1'>Without Worry</span>", subtitle: null, bookNow: true },

        { id: "child-benefits", slug: "/child-benefits", bg: ChildBenefitBg, title: "<span class='headingSpan1'>Child Benefit Program at</span> <br /> <span class='headingSpan2'>Bayswater Dentist</span>", subtitle: '<span class="text-white">Every Australian child deserves to grow with a white, brighter smile. <br/> The Child Dental Benefit Schemes (CDBS) provide every eligible family with $1000* worth of exclusive dental treatment.</span>', bookNow: true },

        { id: "blog", slug: "/blog", bg: ChildBenefitBg, title: "<span class='headingSpan1'>Blog</span>", subtitle: null, bookNow: false }
    ]

    const bgImage = background.filter(entries => entries.slug === pathname)

    return (
        <>
            <Container maxWidth="xxl" className={`${Styles.hero}`} style={{ backgroundImage: bgImage.length > 0 ? `url(${bgImage[0].bg.src})` : null }}>
                <Grid container style={{ height: "inherit" }}>
                    <Grid item xs={12} md={10} className={`mx-auto d-flex align-items-center ${align === "center" ? "justify-content-center" : align === "left" ? "justify-content-start" : align === "right" ? "justify-content-end" : null}`} style={{ height: "inherit" }}>
                        <Box style={{ width: "100%" }}>
                            <Grid container>
                                <Grid item xs={12} md={grid ? 8 : 12}>
                                    {
                                        bgImage.length > 0 ? <Box id="heroText">
                                            {
                                                bgImage[0].title !== null ? <Typography variant='h1' align={align} className={`${Styles.head} `} dangerouslySetInnerHTML={{ __html: bgImage[0].title }} /> : null
                                            }
                                            {
                                                bgImage[0].subtitle !== null ? <Typography className={Styles.para} align={align} dangerouslySetInnerHTML={{ __html: bgImage[0].subtitle }} /> : null
                                            }
                                            {
                                                bgImage[0].bookNow  ? <Box className={align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : align === 'right' === 'text-right'} mt={2}>
                                                    <BlueBtn navlink={true} link="/book/" text="BOOK NOW" />
                                                </Box> : null
                                            }
                                        </Box> : null
                                    }
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default CommonHero