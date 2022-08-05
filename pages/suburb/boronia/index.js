import { Container, Grid, Box, Typography } from '@mui/material';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import { CommonHero, PageSectionalHeading } from '../../../Components/components'

const Boronia = () => {
    const [width, setWidth] = useState()

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])

    return (
        <>

            <Head>
                <meta name="description" content="boronia" />
                <meta name="robots" content="index" />
                <link rel="canonical" href="/suburb/boronia/" />
                <title>Boronia</title>
            </Head>
            <CommonHero />
            <main>
                <section>
                    <Container maxWidth="xxl">
                        <Grid container>
                            <Grid item xs={12} md={10} className="mx-auto">
                                <Box py={5}>
                                    <Box>
                                        <Typography className="para">Practising good oral hygiene comes with a myriad of benefits. Maintaining your oral health should always be at the top of your priorities. It has been observed that a majority of people are more concerned with their physical health and forget that dental health is equally important. Good oral hygiene will not only give you that killer smile but also keep you at bay with several oral issues, including gum disease and tooth decay. </Typography>
                                        <Typography className="para">We at Bayswater Dentist, adjacent to the suburb of Boronia, give you an opportunity to keep your smile bright. At our dental clinic, we always make sure that all our patients receive safe, effective, and convenient dental services. Our dentist near Boronia listens to your dental concerns and what you are looking to achieve and answers your questions in regard to your dental problems. </Typography>
                                        <Typography className="para">For starters, before we can tell you more about our services at Bayswater Dentist, it is vital to highlight a few facts about the suburb of Boronia. Boronia is a suburb located in Melbourne, Victoria in, Australia. It is 29 km east of the Central Business District of Melbourne. Boronia has an estimated population of 23,607, according to the census done in 2021. Originally, Boronia was occupied by the Wurundjeri, Indigenous Australians of the Kulin nation. However, today the suburb is occupied by people from different ethnic groups. Bayswater Dentist is only a short walk from Boronia</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section className='bg-light py-3'>
                    <Container maxWidth="xxl">
                        <Grid container>
                            <Grid item xs={12} md={10} className="mx-auto">
                                <Box>
                                    <PageSectionalHeading title="Dental Services Offered at Bayswater Dentist in Boronia" variant="h2" align="center" />
                                    <Box mt={3}>
                                        <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Emergency Dentist Boronia</Typography>
                                        <Box>
                                            <Typography className="para">Our dental clinic offers fast and effective emergency dental services to patients who are in pain and require urgent attention. Some of the emergency services offered at our clinic include knocked-out teeth, toothache and dental pains, dental abscesses, children&apos;s dental emergencies, and root canals. If you are in pain and in need of emergency services, call us or visit our dental clinic as soon as you can. In a dental emergency, every minute is important and might mean the difference between saving or losing your tooth. </Typography>
                                        </Box>
                                    </Box>
                                    <Box mt={3}>
                                        <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Dental Implants</Typography>
                                        <Box>
                                            <Typography className="para">When you lose your natural tooth, showing your gapped smile in public might be embarrassing. It might also be challenging to chew on food. To avoid all these, you can choose to replace your missing tooth through a dental implant. The treatment uses a titanium post that will serve as the root and a dental crown. The best thing when it comes to dental implants is that it looks natural and will resemble your existing natural teeth. </Typography>
                                        </Box>
                                    </Box>
                                    <Box mt={3}>
                                        <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Invisalign</Typography>
                                        <Box>
                                            <Typography className="para">Are your teeth misaligned or crooked, and you do not want to go through the discomfort as well as the embarrassment of wearing metal braces? Well, Invisalign treatment may be the best option for you. This treatment does not require metal wires to align your teeth. </Typography>
                                        </Box>
                                    </Box>
                                    <Box mt={3}>
                                        <Typography className='subtitle' variant="h3" gutterBottom align={width > 600 ? 'left' : 'center'}>Wisdom Teeth Removal</Typography>
                                        <Box>
                                            <Typography className="para">Wisdom teeth are the last set of teeth to emerge on either side of the jaws. These teeth are often problematic since they lack enough space to emerge and develop normally. Therefore, it is always recommended that you remove them and avoid a number of dental complications.</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section>
                    <Container maxWidth="xxl">
                        <Grid container>
                            <Grid item xs={12} md={10} className="mx-auto">
                                <Box py={5}>
                                <PageSectionalHeading title="Bottom Line" variant="h2" align={width > 600 ? 'left' : 'center'} />
                                <Box>
                                    <Typography className="para">Mentioned above are just a few of the dental services we offer at our Dental Clinic in Boronia. Other services include cosmetic treatment, dental check-ups, and root canal treatment. We are a trusted and cost-effective dental clinic. Our dentist near Boronia will walk with you and ensure you achieve that beautiful smile you have always dreamt of!</Typography>
                                </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </main>
        </>
    )
}

export default Boronia