import { Box, Container, Grid } from '@mui/material';
import Head from 'next/head';
import { CommonHero, CustomCard, SectionalHeading } from '../../Components/components';

import WisdomTeeth from '../../public/Services/wisdom teeth extraction.jpg';
import DentalImplants from '../../public/Services/Dental Implant.jpg';
import Denture from '../../public/Services/dentures.jpg';
import TeethWhitening from '../../public/Services/teeth whitening.jpg';
import RootCanal from '../../public/Services/Root Canal.jpg';
import ScaleNClean from '../../public/Services/sacle and clean.jpg';
import veneers from '../../public/Services/Porcelain Veneers.jpg';
import CrownNBridges from '../../public/Services/dental crown and bridge 1.jpg'
import DentalEmergency from '../../public/Services/dental emergency 1.jpg';
import Invisalign from '../../public/Services/Invisalign 1.jpg';
import ToothFillings from '../../public/Services/dentists-treat-patients-teeth.jpg';

const index = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Bayswater Dentist offers wisdom teeth extraction, dental implants, teeth whitening, dentures, root canal, & other dental health services in Bayswater and nearby areas." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/services/" />
        <title>Dental Health Services Victoria | Bayswater Dentist</title>
      </Head>
      <CommonHero align="center"/>
      <main>
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <SectionalHeading variant="h2" align="center" title="Our Services" />
                  <Box>
                    <Grid container spacing={3}>
                      {
                        [
                          { id: "service-1", title: "Wisdom Teeth", link: "/wisdom-teeth/", para: "We provide oral health services, including the removal of Wisdom teeth in a painless, caringand compassionate way.", image: WisdomTeeth, alt: "wisdom teeth" },

                          { id: "service-2", title: "Dental Implants", link: "/dental-implants/", para: "if you lose a tooth or two due to periodontal disease, injuries, or other reasons, your dentist may recommend dental implants. With our dental treatment services, you can get a properly installed implant.", image: DentalImplants, alt: "dental implants" },

                          { id: "service-3", title: "Dentures", link: "/dentures/", para: "Dentures are artificial prostheses available to help replace one or more of your missing teeth. Besides, Dentures help to prevent other teeth from moving, aesthetics, and restoring your teeth' normal functioning. Contact our dental health services,Bayswater, to get a custom-made denture.", image: Denture, alt: "denture" },

                          { id: "service-4", title: "Teeth Whitening", link: "/teeth-whitening/", para: "Thanks to the Zoom Advanced Tooth Whitening procedure, you can get a fast whiter smile at our clinic. This instant whiter smile helps boosts your self-image and confidence.", image: TeethWhitening, alt: "teeth whitening" },

                          { id: "service-5", title: "Root Canal", link: "/root-canal/", para: "At Bayswater dental health services, we are great advocates of root canal treatment to save your teeth.", image: RootCanal, alt: "root canal" },

                          { id: "service-6", title: "Scale & Clean", link: "/scale-clean/", para: "Maintaining healthy gum and teeth requires visiting your dentist at least every six months for oral health services such as scale and clean.", image: ScaleNClean, alt: "scale n clean" },

                          { id: "service-7", title: "Veneers", link: "/veneers/", para: "Use dental veneers and achieve a Hollywood smile. Your perfect set of teeth is nigh.", image: veneers, alt: "veneers" },

                          { id: "service-8", title: "Crowns & Bridges", link: "/crowns-bridges/", para: "Restore your beautiful smile using our well-constructed crown and bridges.", image: CrownNBridges, alt: "crown and bridges" },

                          { id: "service-9", title: "Dental Emergency", link: "/dental-emergency/", para: "We provide emergency dental services if you've got a broken tooth or severe tooth pain. In most cases, we can offer same-day appointments.", image: DentalEmergency, alt: "dental emergency" },

                          { id: "service-10", title: "Invisalign", link: "/invisalign/", para: "Our dental team gives you a brighter smile with Invisalign. Get your beautiful, healthy smile today by straightening your teeth with Invisalign!", image: Invisalign, alt: "invisalign" },

                          { id: "service-11", title: "Tooth Fillings", link: "/dental-fillings/", para: "Tooth decay, if left untreated, remains the main cause of the cavity. In most cases, it can result in more severe damage to your teeth.", image: ToothFillings, alt: "tooth fillings" },

                        ].map(item => <Grid key={item.id} item xs={12} sm={6} lg={4}>
                          <CustomCard cardMedia={item.image} cardMediaAlt={item.alt} navlink={true} cardText={item.para} link={item.link} cardList={null} cardTitle={item.title} height="27.2rem" />
                        </Grid>)
                      }
                    </Grid>
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

export default index