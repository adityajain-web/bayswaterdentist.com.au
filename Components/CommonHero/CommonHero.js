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
import BlogBg from '../../public/Blog/Blog-bg.jpg'
import CovidBg from '../../public/Covid/covid-1.jpg'
import ContactBg from '../../public/Contact/contact-us-compressed.jpg'
import SubUrbBg from '../../public/Suburb/suburb-bg.jpg';
import ServiceBg from '../../public/Services/servises-bg.jpg';
import DentalImplantsBg from '../../public/Dental-Implants/Dental-implant-bg.jpg'

const CommonHero = ({ grid, align }) => {
    const { pathname } = useRouter()

    const background = [
        { id: "about", slug: "/about", bg: AboutBg, title: "<span class='text-white headingHead'>Bayswater Dental Clinic</span>", subtitle: '<span class="text-white HeroPara">Bayswater Dentist is delighted to provide residents with high-quality and comprehensive dental care to meet their needs.</span>', bookNow: true},

        { id: "patient-referral-program", slug: "/patient-referral-program", bg: PatientRefBg, title: `<span class='headingSpan1'>Patient Referral</span> <br /> <span class='headingSpan2'>Program</span>`, subtitle: null, bookNow: true },

        { id: "payment-plans", slug: "/payment-plans", bg: PaymentPlan, title: "<span class='headingSpan1'>Payment Plans For Your</span> <br /> <span class='headingSpan2'>Dental Treatment</span>", subtitle: null, bookNow: true },

        { id: "team", slug: "/team", bg: TeamBg, title: "<span class='headingSpan1'>Meet Our Professional</span> <br /> <span class='headingSpan2'>Dental Care Team</span>", subtitle: null, bookNow: true },

        { id: "offer", slug: "/offer", bg: OfferBg, title: "<span class='headingSpan2'>Dental Visits</span> <br /> <span class='headingSpan1'>Without Worry</span>", subtitle: null, bookNow: true },

        { id: "child-benefits", slug: "/child-benefits", bg: ChildBenefitBg, title: "<span class='headingSpan1'>Child Benefit Program at</span> <br /> <span class='headingSpan2'>Bayswater Dentist</span>", subtitle: '<span class="text-white">Every Australian child deserves to grow with a white, brighter smile. <br/> The Child Dental Benefit Schemes (CDBS) provide every eligible family with $1000* worth of exclusive dental treatment.</span>', bookNow: true },

        { id: "blog", slug: "/blog", bg: BlogBg, title: "<span class='headingSpan1'>Blog</span>", subtitle: null, bookNow: false },

        { id: "covid", slug: "/covid-19", bg: CovidBg, title: "<span class='headingSpan1'>How We Can Overcome the</span> <br /> <span class='headingSpan2'>Spread of Coronavirus Together</span>", subtitle: null, bookNow: false },

        { id: "contact", slug: "/contact", bg: ContactBg, title: "<span class='headingSpan1'>Contact Us</span>", subtitle: "<span class='text-white'>Our Dental clinic is dedicated to provide you with the most up to date General, Cosmetic, Restorative and Family Dentistry.</span>", bookNow: true },

        { id: "boronia", slug: "/suburb/boronia", bg: SubUrbBg, title: "<span class='headingSpan1'>Dentist In</span> <br /> <span class='headingSpan2'>Boronia</span>", bookNow: true },

        { id: "boronia", slug: "/suburb/heathmont", bg: SubUrbBg, title: "<span class='headingSpan1'>Dentist In</span> <br /> <span class='headingSpan2'>Heathmont</span>", bookNow: true },

        { id: "boronia", slug: "/suburb/kilsyth", bg: SubUrbBg, title: "<span class='headingSpan1'>Dentist In</span> <br /> <span class='headingSpan2'>Kilsyth</span>", bookNow: true },

        { id: "knox", slug: "/suburb/knox", bg: SubUrbBg, title: "<span class='headingSpan1'>Dentist In</span> <br /> <span class='headingSpan2'>Knox</span>", bookNow: true },

        { id: "mooroolbark", slug: "/suburb/mooroolbark", bg: SubUrbBg, title: "<span class='headingSpan1'>Dentist In</span> <br /> <span class='headingSpan2'>Mooroolbark</span>", bookNow: true },

        { id: "ringwood", slug: "/suburb/ringwood", bg: SubUrbBg, title: "<span class='headingSpan1'>Dentist In</span> <br /> <span class='headingSpan2'>Ringwood</span>", bookNow: true },

        { id: "the-basin", slug: "/suburb/the-basin", bg: SubUrbBg, title: "<span class='headingSpan1'>Dentist In</span> <br /> <span class='headingSpan2'>The Basin</span>", bookNow: true },

        { id: "vermont", slug: "/suburb/vermont", bg: SubUrbBg, title: "<span class='headingSpan1'>Dentist In</span> <br /> <span class='headingSpan2'>Vermont</span>", bookNow: true },

        { id: "wantirna", slug: "/suburb/wantirna", bg: SubUrbBg, title: "<span class='headingSpan1'>Dentist In</span> <br /> <span class='headingSpan2'>Wantirna</span>", bookNow: true },

        { id: "wantirna-south", slug: "/suburb/wantirna-south", bg: SubUrbBg, title: "<span class='headingSpan1'>Dentist In</span> <br /> <span class='headingSpan2'>Wantirna South</span>", bookNow: true },

        { id: "services", slug: "/services", bg: ServiceBg, title: "<span class='text-white headingHead'>Dental Health Services</span>", bookNow: true, subtitle:"<span class='text-white HeroPara'>Our team of experts is dedicated to providing you with advanced dental services forFamily, Restorative, Cosmetic,Prosthetic and General Dentistry services.</span>" },

        { id: "dental-implants", slug: "/dental-implants", bg: DentalImplantsBg, title: "<span class='text-white headingHead'>Dental Implant Services at Bayswater</span>", bookNow: true, subtitle:"<span class='text-white HeroPara'>Our facility offers a solution to missing teeth. <br /> We use dental implants of the highest quality to restore your confidence and enhance your smile</span>" },
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
                                                bgImage[0].subtitle !== null ? <Typography className={Styles.HeroPara} align={align} dangerouslySetInnerHTML={{ __html: bgImage[0].subtitle }} /> : null
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