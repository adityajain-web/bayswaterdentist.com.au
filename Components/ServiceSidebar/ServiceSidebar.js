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
                            { id: "service-1", title: "Wisdom Teeth", link: "/wisdom-teeth/" },
                            { id: "service-2", title: "Dental Implants", link: "/dental-implants" },
                            { id: "service-3", title: "Dentures", link: "/dentures" },
                            { id: "service-4", title: "Teeth Whitening", link: "/teeth-whitening" },
                            { id: "service-5", title: "Root Canal", link: "/root-canal" },
                            { id: "service-6", title: "Scale & Clean", link: "/scale-clean" },
                            { id: "service-7", title: "Veneers", link: "/veneers" },
                            { id: "service-8", title: "Crowns & Bridges", link: "/crowns-bridges" },
                            { id: "service-9", title: "Dental Emergency", link: "/dental-emergency" },
                            { id: "service-10", title: "Invisalign", link: "/invisalign" },
                            { id: "service-11", title: "Dental Fillings", link: "/dental-fillings" },
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