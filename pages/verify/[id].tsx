import { useRouter } from 'next/router';

export default () => {
	const router = useRouter();

	return (
		<div>
			{' '}
			<h1>Verify completion</h1>
			<p>Post id: {router.query.id}</p>
		</div>
	);
};
