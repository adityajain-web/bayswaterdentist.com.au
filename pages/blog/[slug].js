import { useRouter } from "next/router"

const SingleBlog = () => {
const router = useRouter();
const slug = router.query.slug

  return (
    <div>{slug}</div>
  )
}

export default SingleBlog