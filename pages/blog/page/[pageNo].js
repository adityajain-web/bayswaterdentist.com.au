import { useRouter } from 'next/router';

const MultpleBlogs = () => {
	const router = useRouter();
	const pageNo = router.query.pageNo;
	return (
		<div>
			{pageNo}
		</div>
	);
};

export default MultpleBlogs;
