import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography, Paper, Button } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { CommonHero, InterestFree, PageSectionalHeading, SectionalHeading, ServiceSidebar, TNC } from '../../Components/components';
import pageImage1 from '../../public/wisdom-teeth/wisdom-teeth.jpg'
import pageImage2 from '../../public/wisdom-teeth/wisdom-teeth-2.jpg'
import pageImage3 from '../../public/wisdom-teeth/Wisdom-teeth-pain.jpg'
import { useEffect, useState } from 'react';
import { CheckCircleOutline } from '@mui/icons-material'

const WisdomTeeth = () => {
    const [width, setWidth] = useState();
    const [mail, setMail] = useState({
        username: "",
        userphone: "",
        useremail: "",
        message: ""
    })
    const [selectedFile, setSelectedFile] = useState({})

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setMail((previousValue) => {
          return {
            ...previousValue,
            [name]: value
          }
        })
      }

      const handleOnSubmit = async (e) => {
        e.preventDefault()
    
        let data = new FormData();
    
        data.append('file', selectedFile);
    
    
        data.append('mail', JSON.stringify(mail));
        fetch('/api/emailwithattachment/', {
          method: "POST",
          body: data
        })
    
      }

    return (
        <>
            <Head>
                <meta name="description" content="Bayswater Dentist is the best option for you for wisdom teeth removal. Know the wisdom teeth extraction treatment, cost & book an appointment now!" />
                <meta name="robots" content="index" />
                <link rel="canonical" href="/wisdom-teeth/" />
                <title>Wisdom Teeth Removal | Wisdom Teeth Extraction | Bayswater Dentist</title>
                <script type="application/ld+json">
                    {
                        JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Dentist",
                            "name": "Bayswater Dentist",
                            "image": "https://bayswaterdentist.com.au/img/logo.png",
                            "@id": "",
                            "url": "https://bayswaterdentist.com.au",
                            "telephone": "0395460011",
                            "priceRange": "$$",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "664 Mountain Hwy",
                                "addressLocality": "Bayswater",
                                "addressRegion": "VIC",
                                "postalCode": "3153",
                                "addressCountry": "AU"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": -37.8422484,
                                "longitude": 145.2629995
                            },
                            "openingHoursSpecification": {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": [
                                    "Monday",
                                    "Tuesday",
                                    "Wednesday",
                                    "Thursday",
                                    "Friday",
                                    "Saturday",
                                    "Sunday"
                                ],
                                "opens": "10:00",
                                "closes": "18:00"
                            },
                            "sameAs": [
                                "https://www.facebook.com/Bayswater-Dentist-102893878969691",
                                "https://twitter.com/bayswaterdentst",
                                "https://www.instagram.com/bayswaterdentist/",
                                "https://www.pinterest.com.au/bayswaterdentist"
                            ]
                        })
                    }
                </script>
            </Head>
            <CommonHero align="center" />
            <main>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Box py={5}>
                                <Grid container spacing={10}>
                                    <Grid item xs={12} lg={4} className="order-1 order-xl-0" style={{ height: "inherit" }}>
                                        <ServiceSidebar />
                                    </Grid>
                                    <Grid item xs={12} lg={8} className="order-0 order-xl-1">
                                        <section>
                                            <Container maxWidth="xxl">
                                                <Grid container>
                                                    <Grid item xs={12} md={10} style={{ position: "relative !important" }}>
                                                        <Box className='shadow formContainer' p={3} component={Paper}>
                                                            <Typography variant="h5" align="center" style={{ color: "var(--navy)" }}>Upload your OPG or Full Mouth Xray far a Rough Quote</Typography>
                                                            <Box mt={3}>
                                                                <form onSubmit={handleOnSubmit}>
                                                                    <div className='row'>
                                                                        <div className='col-12 col-md-6'>
                                                                            <div className='form-group'>
                                                                                <input type="text" placeholder='Name' className='form-control' name='username' onChange={handleOnChange} value={mail.username} required />
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-12 col-md-6'>
                                                                            <div className='form-group'>
                                                                                <input type="tel" placeholder='Phone Number' className='form-control' name='userphone' onChange={handleOnChange} value={mail.userphone} required />
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-12 col-md-6'>
                                                                            <div className='form-group'>
                                                                                <input type="email" placeholder='Email' className='form-control' onChange={handleOnChange} value={mail.useremail} name="useremail" required />
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-12 col-md-6'>
                                                                            <div className='form-group'>
                                                                            <input className='form-control' type="file" name="attachment" onChange={(e) => setSelectedFile(e.target.files[0])} />
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-12'>
                                                                            <div className='form-group'>
                                                                                <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows="2" placeholder="Your message" name="message" onChange={handleOnChange} value={mail.message} required></textarea>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <Button focusRipple fullWidth className='blueBtn text-white font-weight-bold' type='submit' style={{ fontSize: "1.2rem !important" }}>Submit</Button>
                                                                </form>
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Container>
                                        </section>
                                        <section>
                                            <Container maxWidth="xxl">
                                                <PageSectionalHeading variant="h2" align="center" title="Wisdom teeth" />
                                                <Box my={1}>
                                                    <Image src={pageImage1} alt="wisdom-teeth" />
                                                </Box>
                                                <Typography className='para'>Impacted wisdom teeth are the last set of molars that erupt abnormally and don’t have enough space to grow. They are the source of many dental issues such as pain, tooth decay due of trapped food, bacterial growth, as well as damage of the surrounding teeth and jawbone.</Typography>
                                                <Typography className='para'>Wisdom tooth extraction is recommended when your wisdom tooth causes damage to your jawbone, exerts pressure on neighbouring teeth, and wisdom teeth pain.</Typography>
                                                <Typography className='para'>However, not everyone is a candidate for wisdom teeth surgery.</Typography>
                                                <Typography className='para'>Schedule an appointment with our medical team to ensure that you are eligible and can receive the treatment safely. With the many risks involved in any kind of dental surgical procedure, it is advisable to maximize safety</Typography>
                                            </Container>
                                        </section>
                                        <section className='mt-md-5 mt-4 bg-light' style={{ borderRadius: "0.8rem" }}>
                                            <Container maxWidth="xxl" className='p-3'>
                                                <PageSectionalHeading title="Wisdom teeth extraction" variant="h2" align={width > 600 ? 'left' : 'center'} />
                                                <Box mt={2}>
                                                    <Typography className='para'>Wisdom teeth, also known as third molars medically, are the last set of molars appearing at the very end corners of your mouth. In total, they are four of them, two above and two below. They grow between the late teens and early twenties, which is why they are known as wisdom teeth since they are produced by wise young adults.</Typography>
                                                    <Typography className='para'>Our jawlines keep evolving with the introduction of modern and advanced diets. However, that does not stop wisdom teeth from developing. Not everyone has issues with their wisdom teeth, but the procedure is becoming quite common. Most people don’t have enough space to fit wisdom which is actually the main reason they seek this procedure for some relief.</Typography>
                                                    <Typography className='para'>Our dentist recommends this procedure if;</Typography>
                                                    <List>
                                                        <ListItem className="ps-0">
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--navy)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText primary="You have a partially erupted wisdom tooth or impacted tooth. Wisdom teeth that develop on the jawbone and never breakthrough are referred to as impacted. They can either be fully or partially impacted. Impacted wisdom teeth exert pressure on the neighbouring teeth causing severe discomfort and pain." />
                                                        </ListItem>
                                                        <ListItem className="ps-0">
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--navy)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText primary="Your wisdom teeth cause misalignment and crowding. As mentioned earlier, wisdom teeth develop between the ages of 18 and 24 after all other teeth have erupted. This can cause teeth misalignment and crowding as the teeth shift to create space for the developing wisdom teeth. To help rectify the alignment, the dentist can recommend the procedure." />
                                                        </ListItem>
                                                        <ListItem className="ps-0">
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--navy)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText primary="Your wisdom teeth are too far back, making them hard to clean. Wisdom teeth can develop at the far end corners of your mouth, making it difficult to clean them. This can result in oral health issues such as tooth decay because of trapped food. In such a situation, our wisdom teeth dentist may recommend wisdom teeth removal." />
                                                        </ListItem>
                                                    </List>
                                                </Box>
                                            </Container>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Container maxWidth="xxl" className='p-3' >
                                                <PageSectionalHeading title="Wisdom teeth extraction at Bayswater Dentist" variant="h2" align={width > 600 ? 'left' : 'center'} />
                                                <Grid container spacing={3}>
                                                    <Grid item xs={12} md={6}>
                                                        <Box>
                                                            <Image src={pageImage2} alt="Wisdomteeth" />
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Typography className='para'>At Bayswater Dentist, tooth extraction starts from $199*, a relatively fair price in Bayswater and surrounding suburb. Our facility has a team of well-trained and experienced dentists who have mastered wisdom teeth surgery. The procedure is carried out in the most professional way that enhances patient comfort. We are aware of your concerns about matters contamination which is why we use state of art sterilization technology to make sure that we provide you with a safe as well as clean dental environment.</Typography>
                                                    </Grid>
                                                    <Grid item xs={12} className="pt-0 mt-0">
                                                        <Typography className='para'> We have also made investment in the latest technology to make sure that tooth surgery is done in the safest and best way possible. We strive to</Typography>
                                                        <Typography className='para'>give you your money’s worth by walking you through the entire process before the start of the procedure. This helps put your mind at ease, knowing that our friendly and experienced professionals will provide you with a comfortable experience during the entire procedure.</Typography>
                                                        <Typography className='para'>Schedule an appointment with the Bayswater dentist and talk to our team about wisdom teeth surgery.</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Container>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Container maxWidth="xxl" className='p-3' >
                                                <PageSectionalHeading title="Wisdom teeth removal cost in Bayswater suburbs" variant="h2" align={width > 600 ? 'left' : 'center'} />
                                                <Grid container spacing={3}>
                                                    <Grid item xs={12} md={6}>
                                                        <Typography className='para'>Impacted wisdom teeth removal cost in Bayswater suburbs is between $200* and $450* for every tooth. This price varies depending on distinct cases. Complex procedures that require an oral surgeon’s expertise will definitely cost more, while simple normal extractions will be less expensive. Tooth extraction cost is also determined by other factors such as bone structure removal during the procedure and the required number of tooth divisions. It is important that you take note of all wisdom teeth symptoms in case they are impacted.</Typography>
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Box>
                                                            <Image src={pageImage3} alt="Wisdomteeth" />
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12} className="pt-0 mt-0">
                                                        <Typography className='para'>This can help you avoid complex and more expensive procedures for teeth surgery. Some of the warning signs</Typography>
                                                        <Typography className='para'>include bad breath, wisdom tooth decay, gums that are red, swollen, or bleeding, strange and funny taste in the mouth, difficulties when opening your mouth, and paining in the jaws.</Typography>
                                                        <Typography className='para'>Our team at Bayswater dentist performs a thorough examination to assess the extent of the damage.</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Container>
                                        </section>
                                        <section className='mt-md-5 mt-4 bg-light' style={{ borderRadius: "0.8rem" }}>
                                            <Container maxWidth="xxl" className='p-3'>
                                                <PageSectionalHeading title="Tooth extraction cost at Bayswater Dentist" variant="h2" align={width > 600 ? 'left' : 'center'} />
                                                <Typography className='para'>Our facility provides other extraction procedures besides wisdom teeth extraction as follows;</Typography>
                                                <Box mt={2}>
                                                    <List>
                                                        <ListItem className="ps-0">
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--navy)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText primary={<strong>Normal teeth removal</strong>} secondary="The cost of the first consultation is $60. Extraction cost ranges from $180* to $200*. The cost varies depending on the procedure’s complexity. Free-port treatment cost worth $50*." />
                                                        </ListItem>
                                                        <ListItem className="ps-0">
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--navy)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText primary={<strong>Simple impacted/wisdom teeth extraction cost</strong>} secondary="The fee for an initial consultation is $60*. Removal cost ranges from $199* to $300*. This price is dependent on the procedure’s complexity. Free-post appointment review cworth $50*." />
                                                        </ListItem>
                                                        <ListItem className="ps-0">
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--navy)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText primary={<strong>Complex impacted/wisdom teeth removal cost</strong>} secondary="The fee for an initial consultation is $60*. The removal cost ranges from $300* to $450*. This price is dependent on the procedure’s complexity. Free-post appointment review costs $50*." />
                                                        </ListItem>
                                                    </List>
                                                    <Typography className='para'>Could you be looking for a facility where you can receive wisdom teeth treatment? Make an appointment with us today to receive the most comfortable extraction experience. Bayswater Dentist is open for both emergency appointments and consultations for wisdom teeth extraction. Our team of professionals brings charisma and warmth to the dental chair to make your experience with us worthwhile. We understand that the process can be worrying, which is why we walk you through the entire process before beginning the procedure and use advanced dental equipment and techniques. What’s more, our prices are quite pocket-friendly.</Typography>
                                                    <Typography className='para'>Get your money’s worth with Bayswater Dentist by making an appointment with us.</Typography>
                                                    <Typography className='para'>If, for some reason, dental appointments and treatments make you anxious, we can sedate you with laughing gas to help minimize any anxiety and discomfort during dental treatment.</Typography>
                                                </Box>
                                            </Container>
                                        </section>
                                        <section className="mt-3">
                                            <Container maxWidth="xxl" className="p-3">
                                                <PageSectionalHeading title="Frequently Asked Questions (FAQ)" variant="h2" align='center' />
                                                <Box mt={1}>
                                                    <Box className="accordion" id="accordionExample">
                                                        <Box className="card">
                                                            <Box className="card-header" id="headingOne">
                                                                <Typography className='subtitle mb-0' variant="h3">
                                                                    <button className="btn font-weight-bold shadow-none btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                        How long does wisdom teeth swelling last after extraction?
                                                                    </button>
                                                                </Typography>
                                                            </Box>
                                                            <Box id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                                <Box className="card-body">
                                                                    <Typography className='para'>On average, wisdom teeth healing takes about two weeks after the extraction process. You may experience mouth and cheeks swelling during wisdom teeth recovery. The swelling is more severe during the first few days but improves over time.</Typography>
                                                                </Box>
                                                            </Box>
                                                        </Box>


                                                        <Box className="card">
                                                            <Box className="card-header" id="headingTwo">
                                                                <Typography className='subtitle mb-0' variant="h3">
                                                                    <button className="btn font-weight-bold shadow-none btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                                        How are wisdom teeth removed?
                                                                    </button>
                                                                </Typography>
                                                            </Box>
                                                            <Box id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                                <Box className="card-body">
                                                                    <Typography className='para'>During the process of wisdom teeth extraction, the wisdom teeth dentist makes an incision to expose the tooth and bone. The dentist then extracts the bone to access the tooth roots. By now, the procedure is halfway done. After fully accessing the erupted wisdom tooth, the dentist chooses the easiest way to remove it, either as a whole or divide it into a number of sections.</Typography>
                                                                </Box>
                                                            </Box>
                                                        </Box>

                                                        <Box className="card">
                                                            <Box className="card-header" id="headingThree">
                                                                <Typography className='subtitle mb-0' variant="h3">
                                                                    <button className="btn font-weight-bold shadow-none btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                                        Common side effects of wisdom teeth removal?
                                                                    </button>
                                                                </Typography>
                                                            </Box>
                                                            <Box id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                                <Box className="card-body">
                                                                    <Typography className='para'>Some common side effects of wisdom teeth removal are lip numbness, slow-healing gums, dry socket wisdom teeth, excessive bleeding, limited mouth opening, and severe pain and swelling in the gums and teeth.</Typography>
                                                                </Box>
                                                            </Box>
                                                        </Box>

                                                        <Box className="card">
                                                            <Box className="card-header" id="headingFour">
                                                                <Typography className='subtitle mb-0' variant="h3">
                                                                    <button className="btn font-weight-bold shadow-none btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                                                        How much does wisdom teeth extraction cost?
                                                                    </button>
                                                                </Typography>
                                                            </Box>
                                                            <Box id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                                                <Box className="card-body">
                                                                    <Typography className='para'>On average, wisdom tooth extraction cost is between $200* and $450*. This price is dependent on factors such as the required number of divisions and the procedure’s complexity.</Typography>
                                                                </Box>
                                                            </Box>
                                                        </Box>

                                                        <Box className="card">
                                                            <Box className="card-header" id="headingFive">
                                                                <Typography className='subtitle mb-0' variant="h3">
                                                                    <button className="btn font-weight-bold shadow-none btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                                                        Is wisdom teeth removal necessary?
                                                                    </button>
                                                                </Typography>
                                                            </Box>
                                                            <Box id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                                                <Box className="card-body">
                                                                    <Typography className='para'>Wisdom teeth should be extracted if they cause crowding and misalignment, they are fully or partially impacted, and they are too far back, making them hard to clean.</Typography>
                                                                </Box>
                                                            </Box>
                                                        </Box>

                                                        <Box className="card">
                                                            <Box className="card-header" id="headingSix">
                                                                <Typography className='subtitle mb-0' variant="h3">
                                                                    <button className="btn font-weight-bold shadow-none btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                                                        Does wisdom teeth removal alter the shape of your face?
                                                                    </button>
                                                                </Typography>
                                                            </Box>
                                                            <Box id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                                                                <Box className="card-body">
                                                                    <Typography className='para'>Yes. The removal of wisdom teeth can slightly change your facial appearance. Usually, the changes are not perceivable because the extraction does not influence your jaw bone or jaw shape..</Typography>
                                                                </Box>
                                                            </Box>
                                                        </Box>

                                                        <Box className="card">
                                                            <Box className="card-header" id="headingSeven">
                                                                <Typography className='subtitle mb-0' variant="h3">
                                                                    <button className="btn font-weight-bold shadow-none btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                                                                        Is removing all four wisdom teeth necessary?
                                                                    </button>
                                                                </Typography>
                                                            </Box>
                                                            <Box id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                                                                <Box className="card-body">
                                                                    <Typography className='para'>Yes. Our dentist recommends the removal of all four wisdom teeth even when they are not impacted. This is because they can cause misalignment of the neighbouring teeth making it difficult to clean them.</Typography>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Container>
                                        </section>
                                        <section className='mt-3'>
                                            <Container maxWidth="xxl" className="p-3">
                                                <InterestFree />
                                                <TNC />
                                            </Container>
                                        </section>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>
    )
}

export default WisdomTeeth