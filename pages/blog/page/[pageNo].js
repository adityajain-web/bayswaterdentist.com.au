import React, { useState, useEffect } from 'react'
import { Box, Container, getBottomNavigationActionUtilityClass, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { BlogBanner, BlogSideBar, BlueBtn, CustomCard } from '../../../Components/components'
import { XMasonry, XBlock } from 'react-xmasonry'
import WPAPI from 'wpapi'

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { pageNo: '2' } },
    ],
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const pageNo = context.params.pageNo
  const res = await fetch(`https://bayswaterdentist.com.au/blog/wp-json/wp/v2/posts?_embed=true&page=${pageNo}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}

const MultipleBlogs = ({ data }) => {
  const [blogs, setBlogs] = useState([])
  const [show, setShow] = useState(false);
  const [randomBanner, setRandomBanner] = useState(1)
  const router = useRouter();
  const { pageNo } = router.query;

  const wp = new WPAPI({
    endpoint: "https://bayswaterdentist.com.au/blog/wp-json"
  });

  const fetchBlog = async () => {
    const posts = await wp.posts().page(pageNo).get();
    setBlogs(posts);
  }

  useEffect(() => {
    fetchBlog()
  })

  useEffect(() => {
    if (typeof window !== undefined) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [])


  useEffect(() => {
    const randomBanner = Math.floor(Math.random() * 3);
    setRandomBanner(randomBanner)
  }, [blogs])

  console.log(blogs)

  return (
    <>
      {
        blogs ? <Head>
          <meta name="description" content="Bayswater dentist blog contains various dental tips and blogs about dental conditions and their treatments. Read our blog to know more." />
          <meta name="robots" content="index" />
          <link rel="canonical" href={`/blog/page/${router.query.pageNo}`} />
          <title>Dental Care Tips and Dental Blog | Bayswater Dentist Blog</title>
          <script type="application/ld+json">
            {
              JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "WebSite", "@id": "https://bayswaterdentist.com.au/blog/#website", "url": "https://bayswaterdentist.com.au/blog/", "name": "Bayswater Dentist", "description": "", "potentialAction": [{ "@type": "SearchAction", "target": { "@type": "EntryPoint", "urlTemplate": "https://bayswaterdentist.com.au/blog/?s={search_term_string}" }, "query-input": "required name=search_term_string" }], "inLanguage": "en-US" }, { "@type": "CollectionPage", "@id": "https://bayswaterdentist.com.au/blog/#webpage", "url": "https://bayswaterdentist.com.au/blog/", "name": "Dental Care Tips and Dental Blog | Bayswater Dentist Blog", "isPartOf": { "@id": "https://bayswaterdentist.com.au/blog/#website" }, "description": "Bayswater dentist blog contains various dental tips and blogs about dental conditions and their treatments. Read our blog to know more.", "breadcrumb": { "@id": "https://bayswaterdentist.com.au/blog/#breadcrumb" }, "inLanguage": "en-US", "potentialAction": [{ "@type": "ReadAction", "target": ["https://bayswaterdentist.com.au/blog/"] }] }, { "@type": "BreadcrumbList", "@id": "https://bayswaterdentist.com.au/blog/#breadcrumb", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home" }] }] })
            }
          </script>
        </Head> : null
      }
      <BlogBanner hero={randomBanner} title="Blogs" />
      {
        show ? <>
        <main>
          <section>
            <Container maxWidth="xxl">
              <Grid container>
                <Grid item xs={12} md={10} className="mx-auto">
                  <Box py={5}>
                    <Grid container spacing={10}>
                      <Grid item xs={12} lg={8}>
                        <Box>
                          <XMasonry maxColumns={2} responsive targetBlockWidth={400}>
                            {
                              data.map(item => <XBlock key={item.id}>
                                <CustomCard blogMedia={item._embedded['wp:featuredmedia'][0].source_url} cardMediaAlt={item._embedded['wp:featuredmedia'][0].alt_text} cardTitle={item.title.rendered} anchor={true} link={`/blog/${item.slug}/`} cardText={`${item.excerpt.rendered.split(" ").slice(0, 20).join(" ")}[...]`} cardList={null} cls="m-3" />
                              </XBlock>)
                            }
                          </XMasonry>
                        </Box>
                        <Box mt={3} className="d-flex justify-content-center align-items-center">
                          {
                            router.query.pageNo == 2 ? <BlueBtn navlink={true} link="/blog/" text="FIRST" /> : null
                          }
                         {
                          pageNo ? blogs ? blogs._paging ? blogs._paging.totalPages ? Number(pageNo) < Number(blogs._paging.totalPages) ? <BlueBtn navlink={true} link={`/blog/page/${Number(pageNo) + 1}/`} text="NEXT" /> : null : null : null: null : null
                         }
                         {
                          pageNo ? Number(pageNo) !== 2 ? blogs ? blogs._paging ? blogs._paging.totalPages ? Number(pageNo) <= Number(blogs._paging.totalPages) ? <BlueBtn navlink={true} link={`/blog/page/${Number(pageNo) - 1}/`} text="PREV" /> : null : null : null: null : null : null
                         }
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
        </main>
        </> : null
      }
    </>
  )
}

export default MultipleBlogs