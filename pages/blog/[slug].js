import { useRouter } from "next/router";
import Head from 'next/head'
import { BlogBanner, BlogSideBar } from '../../Components/components'
import { Box, Container, Grid, Typography } from "@mui/material";
import WPAPI from "wpapi";
import { useEffect, useState } from "react";
import Image from "next/image";

const SingleBlog = () => {
  const [blog, setBlog] = useState([])
  const [randomBanner, setRandomBanner] = useState(0)
  const router = useRouter();
  const slug = router.query.slug


  const wp = new WPAPI({
    endpoint: 'https://bayswaterdentist.com.au/blog/wp-json/'
  });

  const fetchBlog = async (slug) => {
    const post = await wp.posts().slug(slug).embed().get();
  }

  useEffect(() => {
    if (slug) {
      fetchBlog(slug)
    }
  }, [slug]);

  useEffect(() => {
    const randomBanner = Math.floor(Math.random() * 3);
    setRandomBanner(randomBanner)
  }, [slug])

  return (
    <>
      {
        blog ? blog.yoast_head_json ? <Head>
          <meta name="description" content={blog.yoast_head_json.description ? blog.yoast_head_json.description : ""} />
          <meta name="robots" content="index" />
          <link rel="canonical" href={`/blog/${blog.slug}/`} />
          <title>{blog.yoast_head_json.title ? blog.yoast_head_json.title : null}</title>
        </Head> : null : null
      }
      <BlogBanner title={blog ? blog.title ? blog.title.rendered ? blog.title.rendered : null : null : null} hero={randomBanner} />
      <main className="singleBlog">
        <section>
          <Container maxWidth="xxl">
            <Box py={5}>
              <Grid container>
                <Grid item xs={12} md={10} className="mx-auto">
                  <Grid container spacing={10}>
                    <Grid item xs={12} md={8}>
                      <Container maxWidth="xxl">
                        <Box mt={1}>
                          <img src={blog ? blog._embedded ? blog._embedded['wp:featuredmedia'] ? blog._embedded['wp:featuredmedia'][0] ? blog._embedded['wp:featuredmedia'][0].source_url ? blog._embedded['wp:featuredmedia'][0].source_url : null : null : null : null : null} alt={blog ? blog._embedded ? blog._embedded['wp:featuredmedia'] ? blog._embedded['wp:featuredmedia'][0] ? blog._embedded['wp:featuredmedia'][0].alt_text ? blog._embedded['wp:featuredmedia'][0].alt_text : null : null : null : null : null} className="img-fluid" />
                        </Box>
                        {
                          blog ? blog.content ? blog.content.rendered ? <Box mt={3} dangerouslySetInnerHTML={{ __html: blog.content.rendered }} /> : null : null : null
                        }
                      </Container>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <BlogSideBar />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </section>
      </main>
    </>
  )
}

export default SingleBlog