import { useState, useEffect } from 'react';
import { Container, Grid, Box } from '@mui/material';
import WPAPI from 'wpapi';
import { SectionalHeading, CustomCard } from '../../components';

const BlogSec = () => {
    const [blogs, setBlogs] = useState([])

    const wp = new WPAPI({
        endpoint: "https://bayswaterdentist.com.au/blog/wp-json/"
    })

    const fetchBlog = async () => {
        const posts = await wp.posts().embed().perPage(3).page(1).get();
        setBlogs(posts)
    }

    useEffect(() => {
        fetchBlog()
    }, [blogs])

    return (
        <>
            {
                blogs.length > 0 ? <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Box >
                                <SectionalHeading variant={'subtitle1'} align="center" title="LATEST BLOGS" />
                                <Box py={2}>
                                    <Grid container spacing={3} justifyContent="center">
                                        {
                                            blogs.map(item => <Grid key={item.id} item xs={12} md={6} lg={4}>
                                                <CustomCard blogMedia={item._embedded['wp:featuredmedia'][0].source_url} cardMediaAlt={item._embedded['wp:featuredmedia'][0].alt_text} cardTitle={item.title.rendered} navlink={true} link={`/blog/${item.slug}/`} cardText={`${item.excerpt.rendered.split(" ").slice(0, 20).join(" ")}[...]`} cardList={null} height="26.8rem" />
                                            </Grid>)
                                        }
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container> : null
            }
        </>
    )
}

export default BlogSec