import { Container } from '@mui/material'
import Head from 'next/head'
import { CommonHero } from '../../Components/components'
const Blog = () => {
  return (
    <>
      <Head>
      <meta name="description" content="Bayswater dentist blog contains various dental tips and blogs about dental conditions and their treatments. Read our blog to know more." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/blog/" />
        <title>Dental Care Tips and Dental Blog | Bayswater Dentist Blog</title>
      </Head>
      <CommonHero />
      <main>
        <Container maxWidth="xxl">
          
        </Container>
      </main>
    </>
  )
}

export default Blog