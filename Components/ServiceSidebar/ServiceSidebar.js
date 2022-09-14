import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import { ArrowForwardIos } from '@mui/icons-material'
import Styles from '../../styles/servicesidebar.module.css'
import {useRouter} from "next/router";

const ServiceSidebar = () => {
    const router = useRouter();

    return (
        <>
            <Container maxWidth="xxl" className={Styles.serviceSidebar}>
                <Box>
                    {
                        [
                            { id: "service-1", title: "WISDOM TEETH", link: "/wisdom-teeth" },
                            { id: "service-2", title: "DENTAL IMPLANTS", link: "/dental-implants" },
                            { id: "service-3", title: "DENTURES", link: "/dentures" },
                            { id: "service-4", title: "TEETH WHITENING", link: "/teeth-whitening" },
                            { id: "service-5", title: "ROOT CANAL", link: "/root-canal" },
                            { id: "service-6", title: "SCALE & CLEAN", link: "/scale-clean" },
                            { id: "service-7", title: "VENEERS", link: "/veneers" },
                            { id: "service-8", title: "CROWNS & BRIDGES", link: "/crowns-bridges" },
                            { id: "service-9", title: "DENTAL EMERGENCY", link: "/dental-emergency" },
                            { id: "service-10", title: "INVISALIGN", link: "/invisalign" },
                            { id: "service-11", title: "DENTAL FILLINGS", link: "/dental-fillings" },
                            { id: "service-12", title: "SMILE DESIGN", link: "/smile-design" },
                        ].map(item => <Link key={item.id} href={`${item.link}/`}><Box className={`d-flex justify-content-between align-items-center ${Styles.box} ${router.pathname === item.link ? Styles.active : null}`} mb={1} p={2}>
                            <Typography className={`${Styles.title}`}>
                                {item.title}
                            </Typography>
                            <ArrowForwardIos />
                        </Box></Link>)
                    }
                </Box>
            </Container>
        </>
    )
}

export default ServiceSidebar