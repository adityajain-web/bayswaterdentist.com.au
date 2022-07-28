import { Box, Container, Typography, Paper } from '@mui/material'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import WPAPI from 'wpapi'
import { MediaObject } from '../components';
import Link from 'next/link';

const BlogSideBar = () => {
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([])

    const wp = new WPAPI({
        endpoint: "https://bayswaterdentist.com.au/blog/wp-json/"
    });

    const fetchBlogs = async () => {
        const posts = await wp.posts().embed().perPage(5).page(1).get();
        setBlogs(posts)
    }

    useEffect(() => {
        fetchBlogs()
    }, [blogs])

    const fetchCategories = async() =>{
        const groups = await wp.categories().perPage(99).page(1).get();
        setCategories(groups)
    }

    useEffect(()=>{
        fetchCategories()
    });

    return (
        <>
            <aside style={{height:"100%"}}>
                <Container maxWidth="xxl" style={{height:"inherit"}}>
                    {
                        blogs ? blogs.length > 0 ? <Box component={Paper} className="shadow" >
                            <Box p={2} style={{ backgroundColor: "#117295", borderRadius:"0.5rem 0.5rem 0 0" }}>
                                <Typography variant='h5' align='center' className='text-white'>Recent Posts</Typography>
                            </Box>
                            <Box p={2}>
                                {
                                    blogs.map(item => <Box mb={2} key={item.id}>
                                        <Box className='d-flex' style={{ position: "relative" }}>
                                            <img src={item._embedded['wp:featuredmedia'][0].source_url} alt={item._embedded['wp:featuredmedia'][0].alt_text} className="mr-3" style={{width:"30%"}} />
                                            <Box className='flex-grow-1' style={{width:"70%"}}>
                                                <Typography variant='h6'><Link href={`/blog/${item.slug}/`}>
                                                    <a style={{fontSize:"0.9rem"}}>{item.title.rendered}</a>
                                                </Link></Typography>
                                            </Box>
                                        </Box>
                                    </Box>)
                                }
                            </Box>
                        </Box> : null : null
                    }
                    <Box mt={5} className="sideBarCategory">
                    {
                        categories ? categories.length > 0 ? <Box component={Paper} className="shadow" >
                        <Box p={2} style={{ backgroundColor: "#117295", borderRadius:"0.5rem 0.5rem 0 0" }}>
                            <Typography variant='h5' align='center' className='text-white'>Category</Typography>
                        </Box>
                        <Box p={2}>
                            {
                                categories.map(item => <Box p={1} mb={2} key={item.id} style={{border:"1px solid #ebeaea"}}>
                                    <Typography><Link href={`/blog/category/${item.slug}`}>
                                    <a style={{fontWeight:"600", color:"#117295", textDecoration:"none", fontSize:"1rem"}}>{item.name}</a>
                                    </Link></Typography>
                                </Box>)
                            }
                        </Box>
                    </Box> : null : null
                    }
                    </Box>
                </Container>
            </aside>
        </>
    )
}

export default BlogSideBar