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
import DentalImplantsBg from '../../public/Dental-Implants/Dental-implant-bg.jpg';
import DentureBg from '../../public/Denture/Dentures.jpg'
import TeethWhitening from '../../public/Teeth-Whitening/teeth-whitening-2.jpg'
import RootCanal from '../../public/Root-Canal/root-canal-2.jpg'
import ScaleClean from '../../public/Scale-Clean/scb.jpg'
import Venners from '../../public/Veeneers/veneers-1.jpg';
import CNB from '../../public/CNB/crown-bridges-banner.jpg';
import DentalEmergency from '../../public/Dental-Emergency/dentalemergency.jpg'
import Invisalign from '../../public/Invisalign/invisalign-bg.jpg'
import DentalFillings from '../../public/Dental-Fillings/dentalfillings-bg.jpg'
import Book from '../../public/Book/ap-2.jpg'
import ThankU from '../../public/Thank-You/ThankYou.jpg'
import TNC from '../../public/TNC/termsConditions.jpg';
import PrivacyPolicy from '../../public/PrivacyPolicy/privacy-2.jpg'
import SmileDesign from '../../public/smile-design/healthcare.jpg'
import WisdomTeeth from '../../public/wisdom-teeth/wisdom-banner.jpg'

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

        { id: "boronia", slug: "/find-the-best-dentist-in-boronia", bg: SubUrbBg, title: "<span class='headingSpan1'>Dentist In</span> <br /> <span class='headingSpan2'>Boronia</span>", bookNow: true },

        { id: "heathmont-dental", slug: "/heathmont-dental", bg: SubUrbBg, title: "<span class='headingSpan1'>Dentist In</span> <br /> <span class='headingSpan2'>Heathmont</span>", bookNow: true },

        { id: "kilsyth-dentist", slug: "/kilsyth-dentist", bg: SubUrbBg, title: "<span class='headingSpan1'>Dentist In</span> <br /> <span class='headingSpan2'>Kilsyth</span>", bookNow: true },

        { id: "dental-knox", slug: "/dental-knox", bg: SubUrbBg, title: "<span class='headingSpan1'>Dentist In</span> <br /> <span class='headingSpan2'>Knox</span>", bookNow: true },

        { id: "mooroolbark-dentist", slug: "/mooroolbark-dentist", bg: SubUrbBg, title: "<span class='headingSpan1'>Dentist In</span> <br /> <span class='headingSpan2'>Mooroolbark</span>", bookNow: true },

        { id: "ringwood-dental", slug: "/ringwood-dental", bg: SubUrbBg, title: "<span class='headingSpan1'>Dentist In</span> <br /> <span class='headingSpan2'>Ringwood</span>", bookNow: true },

        { id: "affordable-dental-services-at-the-basin", slug: "/affordable-dental-services-at-the-basin", bg: SubUrbBg, title: "<span class='headingSpan1'>Dentist In</span> <br /> <span class='headingSpan2'>The Basin</span>", bookNow: true },

        { id: "vermont-dental", slug: "/vermont-dental", bg: SubUrbBg, title: "<span class='headingSpan1'>Dentist In</span> <br /> <span class='headingSpan2'>Vermont</span>", bookNow: true },

        { id: "looking-for-a-dentist-in-wantirna", slug: "/looking-for-a-dentist-in-wantirna", bg: SubUrbBg, title: "<span class='headingSpan1'>Dentist In</span> <br /> <span class='headingSpan2'>Wantirna</span>", bookNow: true },

        { id: "get-the-best-dentist-in-wantirna-south", slug: "/get-the-best-dentist-in-wantirna-south", bg: SubUrbBg, title: "<span class='headingSpan1'>Dentist In</span> <br /> <span class='headingSpan2'>Wantirna South</span>", bookNow: true },

        { id: "services", slug: "/services", bg: ServiceBg, title: "<span class='text-white headingHead'>Dental Health Services</span>", bookNow: true, subtitle:"<span class='text-white HeroPara'>Our team of experts is dedicated to providing you with advanced dental services for Family, Restorative, Cosmetic,Prosthetic and General Dentistry services.</span>" },

        { id: "dental-implants", slug: "/dental-implants", bg: DentalImplantsBg, title: "<span class='text-white headingHead'>Dental Implant Services at Bayswater</span>", bookNow: true, subtitle:"<span class='text-white HeroPara'>Our facility offers a solution to missing teeth. <br /> We use dental implants of the highest quality to restore your confidence and enhance your smile</span>" },

        { id: "dentures", slug: "/dentures", bg: DentureBg, title: "<span class='text-white headingHead'>Dentures in Bayswater Dentist</span>", bookNow: true, subtitle:"<span class='text-white HeroPara'>Our experienced and qualified dentists use advanced technology <br /> to ensure that the dentures are not only comfortable to wear but look and feel natural.</span>" },

        { id: "teeth-whitening", slug: "/teeth-whitening", bg: TeethWhitening, title: "<span class='text-white headingHead'>Professional teeth whitening at Bayswter Dentist</span>", bookNow: true, subtitle:"<span class='text-white HeroPara'>The Pola Advanced Tooth Whitening gives you a fast whiter smile. <br /> An instant whiter smile boosts your self-image and confidence..</span>" },

        { id: "root-canal", slug: "/root-canal", bg: RootCanal, title: "<span class='text-white headingHead'>Root Canal Dentist at Bayswater</span>", bookNow: true, subtitle:"<span class='text-white HeroPara'>At Bayswater Dentist, we believe in root canal treatment because it allows you to keep the teeth instead of removing them.</span>" },

        { id: "scale-clean", slug: "/scale-clean", bg: ScaleClean, title: "<span class='text-white headingHead'>Scale and Clean at Bayswater</span>", bookNow: true, subtitle:"<span class='text-white HeroPara'>A proper dental care routine that entails brushing twice a day, <br /> regular flossing, and routine dental check-ups are essential in maintaining good oral hygiene.</span>" },

        { id: "veneers", slug: "/veneers", bg: Venners, title: "<span class='text-white headingHead'>Veneers Teeth</span>", bookNow: true, subtitle:"<span class='text-white HeroPara'>Achieve Hollywood smile by using Dental Veneers. Perfect set of teeth is not far away.</span>" },

        { id: "crowns-bridges", slug: "/crowns-bridges", bg: CNB, title: "<span class='text-white headingHead'>Crowns & Bridges Dental Services</span>", bookNow: true, subtitle:"<span class='text-white HeroPara'>Restore your natural and beautiful smile using Crowns & Bridges.</span>" },

        { id: "dental-emergency", slug: "/dental-emergency", bg: DentalEmergency, title: "<span class='text-white headingHead'>Emergency Dentist at Bayswater</span>", bookNow: true, subtitle:"<span class='text-white HeroPara'>Have a broken tooth? or got severe tooth pain? We can provide same day appointment in most cases.</span>" },

        { id: "invisalign", slug: "/invisalign", bg: Invisalign, title: "<span class='text-white headingHead'>Invisalign at Bayswater Dentist</span>", bookNow: true, subtitle:"<span class='text-white HeroPara'>The most effective and invisible way to correct crooked teeth and transform your smile without having to drain your pockets.</span>" },

        { id: "dental-fillings", slug: "/dental-fillings", bg: DentalFillings, title: "<span class='text-white headingHead'>Dental Fillings at Bayswater</span>", bookNow: true, subtitle:"<span class='text-white HeroPara'>Cavity results from tooth decay, and if left untreated, it can lead to severe teeth damage.</span>" },

        { id: "book", slug: "/book", bg: Book, title: "<span class='headingSpan1'>Book Bayswater Dentist</span> <br /> <span class='headingSpan2'>Appointment Online</span>", bookNow: false, subtitle:"" },

        { id: "thank-you", slug: "/thank-you", bg: ThankU, title: "<span class='headingSpan2'>THANK YOU!</span>", bookNow: false, subtitle:"<span class='HeroPara'>We will get back to you. Having trouble?   <a href='/contact/'>Contact us</a></span>" },

        { id: "privacy-policy", slug: "/privacy-policy", bg: PrivacyPolicy, title: "<span class='headingSpan1'>Privacy Policy</span>", bookNow: false, subtitle:"" },

        { id: "terms-and-conditions", slug: "/terms-and-conditions", bg: TNC, title: "<span class='headingSpan1'>Terms And Conditions</span>", bookNow: false, subtitle:"" },

        { id: "smile-design", slug: "/smile-design", bg: SmileDesign, title: "<span class='headingSpan2'>Smile Design</span> <br /> <span class='headingSpan1'>at Bayswater</span>", bookNow: true, subtitle:"" },

        { id: "wisdom-teeth", slug: "/wisdom-teeth", bg: WisdomTeeth, title: "<span class='text-white'>Wisdom Teeth Extraction</span> <br /> <span class='text-white'>at Bayswater Dentist</span>", bookNow: true, subtitle:"<span class='text-white'>Our dentists are experienced and well-trained in the procedure of wisdom teeth extraction.Wisdom teeth in Bayswater is done in a caring and compassionate way.</span>" },
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