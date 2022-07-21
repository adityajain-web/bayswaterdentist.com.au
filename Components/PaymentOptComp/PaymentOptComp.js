import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AfterPay from '../../public/PaymentOpt/afterpay.jpg';
import Bupa from '../../public/PaymentOpt/Bupa.jpg';
import CBHS from '../../public/PaymentOpt/CBHS.jpg';
import Denticare from '../../public/PaymentOpt/Denticare.jpg';
import EFTPOS from '../../public/PaymentOpt/EFTPOS.jpg';
import HCF from '../../public/PaymentOpt/HFC.jpg';
import Hicaps from '../../public/PaymentOpt/Hicaps.jpg';
import Medibank from '../../public/PaymentOpt/medibank.jpg';
import Medicare from '../../public/PaymentOpt/Medicare.jpg';
import MySmile from '../../public/PaymentOpt/my-smile-plan.jpg';
import Nib from '../../public/PaymentOpt/nib.jpg';
import OpenPay from '../../public/PaymentOpt/open-pay.jpg';
import Smile from '../../public/PaymentOpt/smile.jpg';
import TLC from '../../public/PaymentOpt/TLC.jpg';
import WestFund from '../../public/PaymentOpt/WESTFUND.jpg'
import { Box } from '@mui/material';

const data = [
    { id: "payment_opt1", image: AfterPay, alt: "Afterpay" },
    { id: "payment_opt2", image: Bupa, alt: "Cbhs" },
    { id: "payment_opt3", image: CBHS, alt: "Bupa" },
    { id: "payment_opt4", image: Denticare, alt: "Denticare" },
    { id: "payment_opt5", image: EFTPOS, alt: "eftpos" },
    { id: "payment_opt6", image: HCF, alt: "Hcf" },
    { id: "payment_opt7", image: Hicaps, alt: "hicaps" },
    { id: "payment_opt8", image: Medibank, alt: "medibanks" },
    { id: "payment_opt9", image: Medicare, alt: "medicare" },
    { id: "payment_opt10", image: MySmile, alt: "my smile plan" },
    { id: "payment_opt11", image: Nib, alt: "nib" },
    { id: "payment_opt12", image: OpenPay, alt: "openpay" },
    { id: "payment_opt13", image: Smile, alt: "smile" },
    { id: "payment_opt14", image: TLC, alt: "Tcf logo" },
    { id: "payment_opt15", image: WestFund, alt: "Westudio" }
];

const PaymentOptComp = () => {
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])

    return (
        <>
            <Box mt={1} alignSelf="center">
                <Swiper
                    slidesPerView={width > 992 ? 6 : width > 0 && width < 600 ? 1 : 3}
                    spaceBetween={50}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper px-5"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    loop={true}
                >
                    {
                        data.map(item => <SwiperSlide key={item.id}>
                            <Box py={1} px={2} style={{border:"1px solid #c5c5c5", borderRadius:"0.5rem"}}>
                                <Image src={item.image} alt={item.alt} />
                            </Box>
                        </SwiperSlide>)
                    }
                </Swiper>
            </Box>
        </>
    )
}

export default PaymentOptComp