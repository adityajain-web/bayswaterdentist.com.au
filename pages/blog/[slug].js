import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import {useRouter} from 'next/router'
import { BlogBanner, BlogSideBar } from '../../Components/components';
import { Box, Container, Grid, Typography } from '@mui/material';


export async function getServerSideProps(context) {
  const slug = context.params.slug
  const res = await fetch(`https://bayswaterdentist.com.au/blog/wp-json/wp/v2/posts?_embed=true&slug=${slug}`);
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}


const SingleBlog = ({ data }) => {
  const [blog] = data
  const [randomBanner, setRandomBanner] = useState(0)
  const router = useRouter();

  useEffect(() => {
    const randomBanner = Math.floor(Math.random() * 3);
    setRandomBanner(randomBanner)
  }, [blog])

  if(router.isFallback){
    return <Box>
      <Typography>Loading...</Typography>
    </Box>
  }

  return (
    <>
      {
        blog ? <Head>
          <meta name="description" content={blog.yoast_head_json.description} />
          <meta name="robots" content="index" />
          <link rel="canonical" href={`/blog/${blog.slug}/`} />
          <title>{blog.title.rendered}</title>
        </Head> : null
      }
      <BlogBanner hero={randomBanner} title={blog.title.rendered} />
      {
        blog ? <main id="singleBlogId">
          <section>
            <Container maxWidth="xxl">
              <Grid container>
                <Grid item xs={12} md={10} className="mx-auto">
                  <Box py={5}>
                    <Grid container spacing={10}>
                      <Grid item xs={12} lg={8}>
                        <Box>
                          <Box mt={1}>
                            <img src={blog._embedded['wp:featuredmedia'][0].source_url} alt={blog._embedded['wp:featuredmedia'][0].alt_text} className="img-fluid" />
                          </Box>
                          <Box mt={3} dangerouslySetInnerHTML={{ __html: blog.content.rendered }} />
                        </Box>
                      </Grid>
                      <Grid item xs={12} lg={4}>
                        <BlogSideBar />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </section>
        </main> : null
      }
    </>
  )
}

export default SingleBlog