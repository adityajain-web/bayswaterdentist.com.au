import { useRouter } from "next/router"

const SingleCategory = () => {
    const router = useRouter();
    const {slug} = router.query;
  return (
    <div>{slug}</div>
  )
}

export default SingleCategory