import { useRouter } from 'next/router';
import Head from 'next/head'
import { useEffect, useState } from 'react';
import WPAPI from 'wpapi';
import { BlogBanner, BlogSideBar, SectionalHeading, CustomCard, BlueBtn } from '../../../Components/components';
import { Box, Container, Grid, LinearProgress } from '@mui/material';
import { XMasonry, XBlock } from 'react-xmasonry'

const MultpleBlogs = () => {
	const [blogs, setBlogs] = useState([])
	const [randomBanner, setRandomBanner] = useState(0)
	const router = useRouter();
	const pageNo = router.query.pageNo;

	const wp = new WPAPI({
		endpoint: "https://bayswaterdentist.com.au/blog/wp-json/"
	});

	const fetchBlog = async (pageNo) => {
		const posts = await wp.posts().embed().order().perPage(10).page(pageNo).get();
		setBlogs(posts)
	}

	useEffect(() => {
		if (pageNo) {
			fetchBlog(pageNo)
		}
	}, [blogs, pageNo])

	useEffect(() => {
		const randomBanner = Math.floor(Math.random() * 3);
		setRandomBanner(randomBanner)
	}, [pageNo]);

	return (
		<>
			<Head>
				<meta name="description" content="Bayswater dentist blog contains various dental tips and blogs about dental conditions and their treatments. Read our blog to know more." />
				<meta name="robots" content="index" />
				<link rel="canonical" href={`/blog/${pageNo}/`} />
				<title>Dental Care Tips and Dental Blog | Bayswater Dentist Blog</title>
				<script type="application/ld+json">
					{
						JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "WebSite", "@id": "https://bayswaterdentist.com.au/blog/#website", "url": "https://bayswaterdentist.com.au/blog/", "name": "Bayswater Dentist", "description": "", "potentialAction": [{ "@type": "SearchAction", "target": { "@type": "EntryPoint", "urlTemplate": "https://bayswaterdentist.com.au/blog/?s={search_term_string}" }, "query-input": "required name=search_term_string" }], "inLanguage": "en-US" }, { "@type": "CollectionPage", "@id": "https://bayswaterdentist.com.au/blog/#webpage", "url": "https://bayswaterdentist.com.au/blog/", "name": "Dental Care Tips and Dental Blog | Bayswater Dentist Blog", "isPartOf": { "@id": "https://bayswaterdentist.com.au/blog/#website" }, "description": "Bayswater dentist blog contains various dental tips and blogs about dental conditions and their treatments. Read our blog to know more.", "breadcrumb": { "@id": "https://bayswaterdentist.com.au/blog/#breadcrumb" }, "inLanguage": "en-US", "potentialAction": [{ "@type": "ReadAction", "target": ["https://bayswaterdentist.com.au/blog/"] }] }, { "@type": "BreadcrumbList", "@id": "https://bayswaterdentist.com.au/blog/#breadcrumb", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home" }] }] })
					}
				</script>
			</Head>
			<BlogBanner hero={randomBanner} />
			<main>
				<section>
					<Container maxWidth="xxl">
						<Grid container>
							<Grid item xs={12} md={10} className="mx-auto">
								{
									blogs ? blogs.length > 0 ? <Box py={5}>
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
	);
};

export default MultpleBlogs;
