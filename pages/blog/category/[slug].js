import { useRouter } from "next/router"
import Head from 'next/head'
import { useEffect, useState } from "react";
import WPAPI from "wpapi";
import { BlogBanner, BlogSideBar, CustomCard, BlueBtn, SectionalHeading } from '../../../Components/components'
import { Box, Container, Grid, LinearProgress } from "@mui/material";
import { XMasonry, XBlock } from 'react-xmasonry'

export const getServerSideProps = async (context) => {
  const { slug } = context.params;
  const res = await fetch(`https://bayswaterdentist.com.au/blog/wp-json/wp/v2/categories?slug=${slug}`);
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

const BlogsPerCategory = ({ data }) => {
  const [show, setShow] = useState(false)
  const [blogs, setBlogs] = useState([])
  const [randomBanner, setRandomBanner] = useState(0)
  const router = useRouter();
  const { slug } = router.query;

  const wp = new WPAPI({
    endpoint: "https://bayswaterdentist.com.au/blog/wp-json/"
  });

  const fetchBlog = async (id) => {
    const posts = await wp.posts().embed().param({ categories: [id] }).perPage(99).page(1).get()
    setBlogs(posts)
  }

  useEffect(() => {
    if (data[0].id) {
      fetchBlog(data[0].id)
    }
  }, [data[0].id]);

  useEffect(() => {
    const randomBanner = Math.floor(Math.random() * 3);
    setRandomBanner(randomBanner)
  }, [slug])


  useEffect(() => {
    if (typeof window !== undefined) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, []);

  return (
    <>
      {
        data ? <><Head>
          <meta name="description" content="" />
          <meta name="robots" content="noindex" />
          <link rel="canonical" href={`/blog/category/${data[0].slug}/`} />
          <title>{data[0].yoast_head_json ? data[0].yoast_head_json.title ? data[0].yoast_head_json.title : null : null}</title>
        </Head>
          <BlogBanner title={data[0] ? data[0].name ? data[0].name : null : null} hero={randomBanner} />
        </> : null
      }
      {
        show ? <main>
          <section>
            <Container maxWidth="xxl">
              <Grid container>
                <Grid item xs={12} md={10} className="mx-auto">
                  {
                    data && blogs ? blogs.length > 0 ? <Box py={5}>
                      <Grid container spacing={10}>
                        <Grid item xs={12} lg={8}>
                          <Box>
                            <XMasonry maxColumns={2} responsive targetBlockWidth={400}>
                              {
                                blogs.map(item => <XBlock key={item.id}>
                                  <CustomCard blogMedia={item._embedded['wp:featuredmedia'][0].source_url} cardMediaAlt={item._embedded['wp:featuredmedia'][0].alt_text} cardTitle={item.title.rendered} anchor={true} link={`/blog/${item.slug}/`} cardText={`${item.excerpt.rendered.split(" ").slice(0, 20).join(" ")}[...]`} cardList={null} cls="m-3" />
                                </XBlock>)
                              }
                            </XMasonry>
                          </Box>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <BlogSideBar />
                        </Grid>
                      </Grid>
                    </Box> : <Box py={5}>
                      <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                      </Box>
                      <SectionalHeading variant="h2" align="center" title="We make your smile shine like the sun 😊" />
                    </Box> : null
                  }
                </Grid>
              </Grid>
            </Container>
          </section>
        </main> : null
      }
    </>
  )
}

export default BlogsPerCategory