import {useRouter} from 'next/router'
import Head from 'next/head'
import { useEffect, useState } from "react";
import WPAPI from "wpapi";
import { BlogBanner, BlogSideBar, CustomCard, BlueBtn, SectionalHeading } from '../../../../../Components/components'
import { Box, Container, Grid, LinearProgress } from "@mui/material";
import { XMasonry, XBlock } from 'react-xmasonry'


const BlogsPerCategory = () => {
  const [blogs, setBlogs] = useState([])
  const [category, setCategory] = useState([])
  const [randomBanner, setRandomBanner] = useState(0)
  const [totalPages, seTotalPages] = useState()
    const router = useRouter();
    const {slug, pageNo} = router.query

    const wp = new WPAPI({
      endpoint: "https://bayswaterdentist.com.au/blog/wp-json/"
    })
  
    const fetchCategory = async (slug) => {
      const [group] = await wp.categories().slug(slug).get();
      setCategory(group)
    }
  
    useEffect(() => {
      if (slug) {
        fetchCategory(slug)
      }
    }, [slug]);
  
    const fetchBlog = async (id) => {
      const posts = await wp.posts().embed().param({ categories: [id] }).order().perPage(10).page(pageNo).get()
      setBlogs(posts)
    }
  
    useEffect(() => {
      if(category.id){
        fetchBlog(category.id)
      }
    }, [category,blogs]);
  
    useEffect(() => {
      const randomBanner = Math.floor(Math.random() * 3);
      setRandomBanner(randomBanner)
    }, [slug])


  return (
    <>
    {
        category ? <Head>
          <meta name="description" content="" />
          <meta name="robots" content="noindex" />
          <link rel="canonical" href={`/blog/category/${slug}/page/${pageNo}/`} />
          <title>{category.yoast_head_json ? category.yoast_head_json.title ? category.yoast_head_json.title : null : null}</title>
        </Head> : null
      }
      <BlogBanner hero={randomBanner} title={category ? category.name ? category.name : null : null} />
      <main>
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                {
                  category && blogs ? blogs.length > 0 ? <Box py={5}>
                  <Grid container spacing={10}>
                    <Grid item xs={12} lg={8}>
                    <Box>
                            <XMasonry maxColumns={2} responsive targetBlockWidth={400}>
                              {
                                blogs.map(item => <XBlock key={item.id}>
                                  <CustomCard blogMedia={item._embedded['wp:featuredmedia'][0].source_url} cardMediaAlt={item._embedded['wp:featuredmedia'][0].alt_text} cardTitle={item.title.rendered} navlink={true} link={`/blog/${item.slug}/`} cardText={`${item.excerpt.rendered.split(" ").slice(0, 20).join(" ")}[...]`} cardList={null} cls="m-3" />
                                </XBlock>)
                              }
                            </XMasonry>
                          </Box>
                          <Box className="d-flex justify-content-center align-items-center py-2">
													{
														pageNo === '2' ? <BlueBtn navlink={true} link={`/blog/`} text="First" /> : null
													}
													{
														blogs ? blogs._paging ? blogs._paging.links ? blogs._paging.links.next ? <BlueBtn text="NEXT" navlink={true} link={`/blog/page/${Number(pageNo) + 1}`} /> : null : null : null : null
													}
													{
														pageNo !== '2' && blogs ? blogs._paging ? blogs._paging.links ? blogs._paging.links.next ? <BlueBtn text="PREV" navlink={true} link={`/blog/page/${Number(pageNo) - 1}`} /> : null : null : null : null
													}
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
      </main>
    </>
  )
}

export default BlogsPerCategory