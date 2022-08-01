import { Container, Grid, Box } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Services from "./Data/Data";
import { CustomCard, SectionalHeading } from "../../components";
import { useEffect, useState } from "react";


const ServiceSlider = () => {
    const [width, setWidth] = useState();

    useEffect(() => {
       setWidth(window.innerWidth)
    }, [width])

    return (
        <>
            <Container maxWidth="xxl">
                <Grid container>
                    <Grid item xs={12} md={10} className="mx-auto">
                        <Box>
                            <SectionalHeading variant="h2" align="center" title="OUR DENTAL SERVICES" />
                        <Box alignSelf="center">
                            <Swiper
                                slidesPerView={width > 992 ? 3 : width > 0 && width < 600 ? 1 : 2}
                                spaceBetween={60}
                                modules={[Navigation, Autoplay]}
                                className="mySwiper py-4 px-md-5"
                                 autoplay={{
                                     delay: 2500,
                                     disableOnInteraction: false,
                                 }}
                                navigation={true}
                                loop={true}
                            >
                                {
                                    Services.map(item => <SwiperSlide key={item.id}>
                                        <CustomCard cardMedia={item.image} cardMediaAlt={item.alt} cardTitle={item.title} cardText={item.para} navlink={true} link={item.link} height="27.2rem" bgColor={false} cardList={null} />
                                    </SwiperSlide>)
                                }
                            </Swiper>
                        </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ServiceSlider