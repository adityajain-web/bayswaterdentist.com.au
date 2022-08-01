import { Box, Container, Grid, Typography } from "@mui/material"
import Link from "next/link"
import { SectionalHeading, CustomCard, BlueBtn } from "../../components"
import offer from "./Data/Data"

const Offer = () => {
    return (
        <>
            <Container maxWidth="xxl" className="py-md-3">
                <Grid container>
                    <Grid item xs={12} md={10} className="mx-auto">
                        <Box>
                            <SectionalHeading variant="subtitle1" align="center" title="OUR LATEST OFFERS" />
                            <Box py={2}>
                                <Grid container spacing={3} justifyContent="center">
                                    {
                                        offer.map(item => <Grid key={item.id} item xs={12} md={6} lg={4}>
                                            <CustomCard cardMedia={item.image} cardMediaAlt={item.alt} cardTitle={item.title} cardList={item.list} height="37rem" icon={true} offerBtn={true} price={item.price} small={item.small} />
                                        </Grid>)
                                    }
                                </Grid>
                            </Box>
                            <Box className="text-center">
                                <Typography align="center"><Link href="/terms-and-conditions/">
                                    <a style={{ color: "var(--navy)", fontWeight: "600", textDecoration: "none" }}>*Terms and Conditions apply. More Afterpay Offer</a>
                                </Link></Typography>
                                <Box mt={3}>
                                    <button style={{border:'2px solid var(--navy)', padding:"0.8rem 1.6rem", borderRadius:"0.5rem",}}>
                                        <Link href="/offer/">
                                            <a style={{color:"var(--navy)", fontWeight:"600", fontSize:"1.3rem"}}>GET OFFER</a>
                                        </Link>
                                    </button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Offer