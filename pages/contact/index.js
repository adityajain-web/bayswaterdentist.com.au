import { Box, Container, Divider, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { CommonHero, PageSectionalHeading } from '../../Components/components'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slider1 from '../../public/Contact/slider-1.jpeg'
import slider2 from '../../public/Contact/slider-2.jpg'
import slider3 from '../../public/Contact/slider-3.jpg'
import slider4 from '../../public/Contact/slider-4.jpg'
import slider5 from '../../public/Contact/slider-5.jpg'
import slider6 from '../../public/Contact/slider-6.jpeg'
import { FiPhone } from 'react-icons/fi'
import { LocationOnOutlined, MailOutline } from "@mui/icons-material";
import emailjs from '@emailjs/browser';
import Router from 'next/router';
import { useRef } from 'react';

const Contact = () => {
  const [width, setWidth] = useState();
  const form = useRef()
  const handleSendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4hza4uw', 'template_24cqpl3', form.current, '90AjuEewT0xq4F7nW')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    form.current.reset();
    Router.push('/thank-you/')
  }

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  return (
    <>
      <Head>
        <meta name="description" content="Contact Bayswater Dentist for emergency dental, general and cosmetic restorative procedures, family dentistry and more. Call (03)9546 0011 for an appointment!" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/contact/" />
        <title>Contact Bayswater Dental Clinic | Book an Online Appointment</title>
      </Head>
      <CommonHero grid={true} align={width > 600 ? 'left' : 'center'} />
      <main>
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={4}>
                      <Box>
                        <PageSectionalHeading title="Opening Hours" align="center" />
                        <Divider style={{ backgroundColor: "#117295" }} />
                        <Box className='d-flex justify-content-center'>
                          <List>
                            {
                              [
                                { id: "day1", day: "Monday" },
                                { id: "day2", day: "Tuesday" },
                                { id: "day3", day: "Wednesday" },
                                { id: "day4", day: "Thursday" },
                                { id: "day5", day: "Friday" },
                                { id: "day6", day: "Saturday" },
                                { id: "day7", day: "Sunday" }
                              ].map(item => <ListItem key={item.id}>
                                <ListItemText primary={item.day} />
                              </ListItem>)
                            }
                          </List>
                          <List>
                            {[1, 2, 3, 4, 5, 6, 7].map(item => <ListItem key={item.id}>
                              <ListItemText primary="10:00am to 6:00pm" />
                            </ListItem>)}
                          </List>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                      <Box>
                        <PageSectionalHeading title="Gallery" align="center" />
                        <Divider style={{ backgroundColor: "#117295" }} />
                        <Box alignSelf="center" mt={2} justifyContent="center">
                          <Swiper
                            slidesPerView={1}
                            spaceBetween={60}
                            modules={[Navigation, Autoplay]}
                            className="mySwiper"
                            autoplay={{
                              delay: 2500,
                              disableOnInteraction: false,
                            }}
                            navigation={true}
                            loop={true}
                          >
                            {
                              [slider1, slider2, slider3, slider4, slider5, slider6].map((item, index) => <SwiperSlide key={`contact-slider-${index}`}>
                                <Box>
                                  <Image src={item} alt="clinic" />
                                </Box>
                              </SwiperSlide>)
                            }
                          </Swiper>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                      <Box>
                        <PageSectionalHeading title="How To Find Us" align="center" />
                        <Divider style={{ backgroundColor: "#117295" }} />
                        <Box justifyContent="center">
                          <List>
                            <ListItem>
                              <ListItemIcon>
                                <FiPhone style={{ color: "#117295", fontSize: "1.8rem", marginRight: "0.8rem" }} />
                              </ListItemIcon>
                              <a href="tel:(03)-9069 3100">
                                <ListItemText primary="(03)-9069 3100" />
                              </a>
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <LocationOnOutlined style={{ color: "#117295", fontSize: "1.8rem", marginRight: "0.8rem" }} />
                              </ListItemIcon>
                              <ListItemText primary="664 Mountain Hwy, Bayswater VIC 3153, Australia" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <MailOutline style={{ color: "#117295", fontSize: "1.8rem", marginRight: "0.8rem" }} />
                              </ListItemIcon>
                              <a href="mailto:bayswaterdentist@gmail.com">
                                <ListItemText primary="bayswaterdentist@gmail.com" />
                              </a>
                            </ListItem>
                          </List>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box className='embed-responsive embed-responsive-16by9'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25206.167519011815!2d145.263!3d-37.842248!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7283430ff311551e!2sBayswater%20Dentist!5e0!3m2!1sen!2sin!4v1659085408446!5m2!1sen!2sin" width="800" height="600" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <PageSectionalHeading title="We Are Here For You. Say Hi!" align="center" />
                        <Divider style={{ backgroundColor: "#117295" }} />
                        <Box p={3}>
                          <form ref={form} onSubmit={handleSendEmail}>
                            <div className="form-group">
                              <label>Name</label>
                              <input type="text" name="user_name" className="form-control" required />
                            </div>
                            <div className="form-group">
                              <label>Email</label>
                              <input type="email" name="user_email" className="form-control" required />
                            </div>
                            <div className="form-group">
                              <label>Message</label>
                              <textarea name="message" rows="4" className="form-control" required />
                            </div>
                            <button type="submit" className='blueBtn border-0 outline-0'>Send</button>
                          </form>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Contact