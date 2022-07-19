import {useRouter} from 'next/router'

const BlogsPerCategory = () => {
    const router = useRouter();
    const {slug, pageNo} = router.query
  return (
    <div>BlogsPerCategory {slug}/page/{pageNo}</div>
  )
}

export default BlogsPerCategory