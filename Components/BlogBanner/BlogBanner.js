import { Box, Container, Grid, Typography } from "@mui/material"
import banner1 from '../../public/SingleBlog/common-blog-4.jpg'
import banner2 from '../../public/SingleBlog/common-blog-5.jpg'
import banner3 from '../../public/SingleBlog/common-blog-6.jpg'

const BlogBanner = ({ title, hero }) => {

    const banner = [banner1, banner2, banner3]

    return (
        <>
            <Container maxWidth="xxl" className="blogBanner" style={{ backgroundImage: `url(${banner[hero].src})` }} >
                <Grid container style={{height:"inherit"}}>
                    <Grid item xs={12} md={10} className="mx-auto" style={{height:"inherit"}}>
                        <Box style={{height:"inherit"}} className="d-flex justify-content-md-start justify-content-center align-items-center">
                            <Grid container>
                                <Grid item xs={12} md={8}>
                                    <Typography variant="h1">{title}</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default BlogBanner