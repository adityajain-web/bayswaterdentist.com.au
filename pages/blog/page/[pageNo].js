import React, { useState, useEffect } from 'react'
import { Box, Container, getBottomNavigationActionUtilityClass, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { BlogBanner, BlogSideBar, BlueBtn, CustomCard } from '../../../Components/components'
import { XMasonry, XBlock } from 'react-xmasonry'

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { pageNo: '2' } },
      { params: { pageNo: '3' } },
      { params: { pageNo: '4' } },
      { params: { pageNo: '5' } },
      { params: { pageNo: '6' } },
      { params: { pageNo: '7' } },
      { params: { pageNo: '8' } },
      { params: { pageNo: '9' } },
      { params: { pageNo: '10' } },
      { params: { pageNo: '11' } },
      { params: { pageNo: '12' } },
      { params: { pageNo: '13' } },
      { params: { pageNo: '14' } },
      { params: { pageNo: '15' } },
      { params: { pageNo: '16' } },
      { params: { pageNo: '17' } },
      { params: { pageNo: '18' } },
      { params: { pageNo: '19' } },
      { params: { pageNo: '20' } },
      { params: { pageNo: '21' } },
      { params: { pageNo: '22' } },
      { params: { pageNo: '23' } },
      { params: { pageNo: '24' } },
      { params: { pageNo: '25' } },
      { params: { pageNo: '26' } },
      { params: { pageNo: '27' } },
      { params: { pageNo: '28' } },
      { params: { pageNo: '29' } },
      { params: { pageNo: '30' } },
      { params: { pageNo: '31' } },
      { params: { pageNo: '32' } },
      { params: { pageNo: '33' } },
      { params: { pageNo: '34' } },
      { params: { pageNo: '35' } },
      { params: { pageNo: '36' } },
      { params: { pageNo: '37' } },
      { params: { pageNo: '38' } },
      { params: { pageNo: '39' } },
      { params: { pageNo: '40' } },
      { params: { pageNo: '41' } },
      { params: { pageNo: '42' } },
      { params: { pageNo: '43' } },
      { params: { pageNo: '44' } },
      { params: { pageNo: '45' } },
      { params: { pageNo: '46' } },
      { params: { pageNo: '47' } },
      { params: { pageNo: '48' } },
      { params: { pageNo: '49' } },
      { params: { pageNo: '50' } },
      { params: { pageNo: '51' } },
      { params: { pageNo: '52' } },
      { params: { pageNo: '53' } },
      { params: { pageNo: '54' } },
      { params: { pageNo: '55' } },
      { params: { pageNo: '56' } },
      { params: { pageNo: '57' } },
      { params: { pageNo: '58' } },
      { params: { pageNo: '59' } },
      { params: { pageNo: '60' } },
      { params: { pageNo: '61' } },
      { params: { pageNo: '62' } },
      { params: { pageNo: '63' } },
      { params: { pageNo: '64' } },
      { params: { pageNo: '65' } },
      { params: { pageNo: '66' } },
      { params: { pageNo: '67' } },
      { params: { pageNo: '68' } },
      { params: { pageNo: '69' } },
      { params: { pageNo: '70' } },
      { params: { pageNo: '71' } },
      { params: { pageNo: '72' } },
      { params: { pageNo: '73' } },
      { params: { pageNo: '74' } },
      { params: { pageNo: '75' } },
      { params: { pageNo: '76' } },
      { params: { pageNo: '77' } },
      { params: { pageNo: '78' } },
      { params: { pageNo: '79' } },
      { params: { pageNo: '80' } },
      { params: { pageNo: '81' } },
      { params: { pageNo: '82' } },
      { params: { pageNo: '83' } },
      { params: { pageNo: '84' } },
      { params: { pageNo: '85' } },
      { params: { pageNo: '86' } },
      { params: { pageNo: '87' } },
      { params: { pageNo: '88' } },
      { params: { pageNo: '89' } },
      { params: { pageNo: '90' } },
      { params: { pageNo: '91' } },
      { params: { pageNo: '92' } },
      { params: { pageNo: '93' } },
      { params: { pageNo: '94' } },
      { params: { pageNo: '95' } },
      { params: { pageNo: '96' } },
      { params: { pageNo: '97' } },
      { params: { pageNo: '98' } },
      { params: { pageNo: '99' } },
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
  const [blog, setBlog] = useState([])
  const [randomBanner, setRandomBanner] = useState(0)
  const router = useRouter();

  useEffect(() => {
    if (typeof (window) !== undefined) {
      setBlog(data)
    }
  }, [data])

  useEffect(() => {
    const randomBanner = Math.floor(Math.random() * 3);
    setRandomBanner(randomBanner)
  }, [blog])

  if (router.isFallback) {
    return <Box>
      <Typography>Loading...</Typography>
    </Box>
  }

  return (
    <>
      {
        blog ? <Head>
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
        blog ? <main>
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
                              blog.map(item => <XBlock key={item.id}>
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
                            blog.length == 10 ? <BlueBtn navlink={true} link={`/blog/page/${Number(router.query.pageNo) + 1}`} text="NEXT" /> : null
                          }
                          {
                            router.query.pageNo != 2 ? <BlueBtn navlink={true} link={`/blog/page/${Number(router.query.pageNo) - 1}`} text="PREV" /> : null
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
        </main> : null
      }
    </>
  )
}

export default MultipleBlogs