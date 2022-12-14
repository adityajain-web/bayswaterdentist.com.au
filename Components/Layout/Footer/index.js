import { Container, Grid, Box, Typography, Divider, List, ListItem, ListItemIcon, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import { FiPhone } from 'react-icons/fi'
import { LocationOnOutlined, MailOutline, Copyright } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import Logo from './images/whitelogo.png';
import { FaFacebookF, FaPinterestP, FaTwitter, FaInstagram } from 'react-icons/fa'

const index = () => {
  return (
    <>
      <footer>
        <Container maxWidth="xxl" id="footer_top" className="px-0">
          <Grid container>
            <Grid item xs={11} md={10} className="mx-auto">
              <Box pt={2} pb={2}>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <Box className="text-md-left text-center">
                      <Link href="/"><Image src={Logo} alt="Bayswater Dentist Logo" className="img-fluid" loading="lazy" /></Link>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box className="d-flex justify-content-md-end justify-content-center align-items-center py-md-0 py-2">
                      <List className="d-flex">
                        <ListItem className="p-0 mr-3">
                          <a href="https://www.facebook.com/Bayswaterdentist.com.au/" target="_blank" rel="noreferrer">
                            <ListItemAvatar>
                              <Avatar style={{ background: "#117295" }}>
                                <FaFacebookF />
                              </Avatar>
                            </ListItemAvatar>
                          </a>
                        </ListItem>
                        <ListItem className="p-0 mr-3">
                          <a href="https://www.pinterest.com.au/bayswaterdentist/" target="_blank" rel="noreferrer">
                            <ListItemAvatar>
                              <Avatar style={{ background: "#117295" }}>
                                <FaPinterestP />
                              </Avatar>
                            </ListItemAvatar>
                          </a>
                        </ListItem>
                        <ListItem className="p-0 mr-3">
                          <a href="https://twitter.com/bayswaterdentst/" target="_blank" rel="noreferrer">
                            <ListItemAvatar>
                              <Avatar style={{ background: "#117295" }}>
                                <FaTwitter />
                              </Avatar>
                            </ListItemAvatar>
                          </a>
                        </ListItem>
                        <ListItem className="p-0 mr-3">
                          <a href="https://www.instagram.com/bayswaterdentist/" target="_blank" rel="noreferrer">
                            <ListItemAvatar>
                              <Avatar style={{ background: "#117295" }}>
                                <FaInstagram />
                              </Avatar>
                            </ListItemAvatar>
                          </a>
                        </ListItem>
                      </List>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Divider className="bg-white" />
          <Grid container>
            <Grid item xs={11} md={10} className="mx-auto">
              <Box py={2}>
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={6} lg={4}>
                    <Typography className="text-white title" gutterBottom>Contacts</Typography>
                    <Box>
                      <List>
                        <ListItem className="py-0 mb-3">
                          <ListItemIcon>
                            <FiPhone className="text-white icon" />
                          </ListItemIcon>
                          <a href="tel:(03)-9069 3100">
                            <ListItemText primary="(03)-9069 3100" className="text-white text" />
                          </a>
                        </ListItem>
                        <ListItem className="py-0 mb-3">
                          <ListItemIcon>
                            <LocationOnOutlined className="text-white icon" />
                          </ListItemIcon>
                          <ListItemText primary="664 Mountain Hwy, Bayswater VIC 3153, Australia" className="text-white text" />
                        </ListItem>
                        <ListItem className="py-0 mb-3">
                          <ListItemIcon>
                            <MailOutline className="text-white icon" />
                          </ListItemIcon>
                          <a href="mailto:bayswaterdentist@gmail.com">
                            <ListItemText primary="bayswaterdentist@gmail.com" className="text-white text" />
                          </a>
                        </ListItem>
                      </List>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4}>
                    <Typography className="text-white title" gutterBottom>Services</Typography>
                    <Box className="d-flex">
                      <List>
                        <ListItem className="py-0 mb-2">
                          <Link href="/wisdom-teeth/" className="text-white text">
                            Wisdom Teeth
                          </Link>
                        </ListItem>
                        <ListItem className="py-0 mb-2">
                          <Link href="/dental-implants/" className="text-white text">
                            Dental Implants
                          </Link>
                        </ListItem>
                        <ListItem className="py-0 mb-2">
                          <Link href="/dentures/" className="text-white text">
                            Dentures
                          </Link>
                        </ListItem>
                        <ListItem className="py-0 mb-2">
                          <Link href="/teeth-whitening/" className="text-white text">
                            Teeth Whitening
                          </Link>
                        </ListItem>
                        <ListItem className="py-0 mb-2">
                          <Link href="/root-canal/" className="text-white text">
                            Root Canal
                          </Link>
                        </ListItem>
                        <ListItem className="py-0 mb-2">
                          <Link href="/scale-clean/" className="text-white text">
                            Scale & Clean
                          </Link>
                        </ListItem>
                      </List>
                      <List>
                        <ListItem className="py-0 mb-2">
                          <Link href="/dental-fillings/" className="text-white text">
                            Dental fillings
                          </Link>
                        </ListItem>
                        <ListItem className="py-0 mb-2">
                          <Link href="/veneers/" className="text-white text">
                            Veneers
                          </Link>
                        </ListItem>
                        <ListItem className="py-0 mb-2">
                          <Link href="/crowns-bridges/" className="text-white text">
                            Crowns & Bridges
                          </Link>
                        </ListItem>
                        <ListItem className="py-0 mb-2">
                          <Link href="/dental-emergency/" className="text-white text">
                            Dental Emergency
                          </Link>
                        </ListItem>
                        <ListItem className="py-0 mb-2">
                          <Link href="/invisalign/" className="text-white text">
                            Invisalign
                          </Link>
                        </ListItem>
                        <ListItem className="py-0 mb-2">
                          <Link href="/smile-design/" className="text-white text">
                            Smile Design
                          </Link>
                        </ListItem>
                      </List>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4}>
                    <Typography className="text-white title" gutterBottom>Opening Hours</Typography>
                    <Box className="d-flex">
                      <List>
                        <ListItem className="py-0 mb-2">
                          <ListItemText primary="Monday" className="text-white text" />
                        </ListItem>
                        <ListItem className="py-0 mb-2">
                          <ListItemText primary="Tuesday" className="text-white text" />
                        </ListItem>
                        <ListItem className="py-0 mb-2">
                          <ListItemText primary="Wednesday" className="text-white text" />
                        </ListItem>
                        <ListItem className="py-0 mb-2">
                          <ListItemText primary="Thursday" className="text-white text" />
                        </ListItem>
                        <ListItem className="py-0 mb-2">
                          <ListItemText primary="Friday" className="text-white text" />
                        </ListItem>
                        <ListItem className="py-0 mb-2">
                          <ListItemText primary="Saturday" className="text-white text" />
                        </ListItem>
                        <ListItem className="py-0 mb-2">
                          <ListItemText primary="Sunday" className="text-white text" />
                        </ListItem>
                      </List>
                      <List>
                        <ListItem className="py-0 mb-2">
                          <ListItemText primary="10:00am to 6:00pm" className="text-white text" />
                        </ListItem>
                        <ListItem className="py-0 mb-2">
                          <ListItemText primary="10:00am to 6:00pm" className="text-white text" />
                        </ListItem>
                        <ListItem className="py-0 mb-2">
                          <ListItemText primary="10:00am to 6:00pm" className="text-white text" />
                        </ListItem>
                        <ListItem className="py-0 mb-2">
                          <ListItemText primary="10:00am to 6:00pm" className="text-white text" />
                        </ListItem>
                        <ListItem className="py-0 mb-2">
                          <ListItemText primary="10:00am to 6:00pm" className="text-white text" />
                        </ListItem>
                        <ListItem className="py-0 mb-2">
                          <ListItemText primary="10:00am to 6:00pm" className="text-white text" />
                        </ListItem>
                        <ListItem className="py-0 mb-2">
                          <ListItemText primary="10:00am to 6:00pm" className="text-white text" />
                        </ListItem>
                      </List>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={12} className="p-0" >
                    <Box mb={2} style={{borderBottom:"1px solid #fff", borderTop:"1px solid #fff"}}>
                      <List className="d-flex flex-wrap justify-content-center">
                        {
                          [
                            { id: "subUrb-1", text: "Boronia", link: "/find-the-best-dentist-in-boronia/" },
                            { id: "subUrb-2", text: "Heathmont", link: "/heathmont-dental/" },
                            { id: "subUrb-3", text: "Kilsyth", link: "/kilsyth-dentist/" },
                            { id: "subUrb-4", text: "Knox", link: "/dental-knox/" },
                            { id: "subUrb-5", text: "Mooroolbark", link: "/mooroolbark-dentist/" },
                            { id: "subUrb-6", text: "Ringwood", link: "/ringwood-dental/" },
                            { id: "subUrb-7", text: "The Basin", link: "/affordable-dental-services-at-the-basin/" },
                            { id: "subUrb-8", text: "Vermont", link: "/vermont-dental/" },
                            { id: "subUrb-9", text: "Wantirna South", link: "/get-the-best-dentist-in-wantirna-south/" },
                            { id: "subUrb-10", text: "Wantirna", link: "/looking-for-a-dentist-in-wantirna/" },
                          ].map(item => <ListItem key={item.id} className="p-1 m-1" style={{width:"fit-content"}}>
                            <Link href={item.link}>
                              <a className="text-white">{item.text}</a>
                            </Link>
                          </ListItem>)
                        }
                      </List>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="xxl" className="px-0">
          <Grid container>
            <Grid item xs={11} md={10} className="mx-auto">
              <Box py={1}>
                <Grid container>
                  <Grid item xs={12} justifyContent="center">
                    <Typography className="text-center"><Copyright /> {new Date().getFullYear()} All Rights Reserved. <Link href="/privacy-policy/">Privacy Policy</Link> | <Link href="/terms-and-conditions/">Terms & Condition</Link></Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  )
}

export default index