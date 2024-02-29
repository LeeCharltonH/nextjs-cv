import { MetaTags } from 'Components/Layout/MetaTags/MetaTags';
import { getKeySkills } from 'Services/api/keySkills';
import { GetStaticProps } from 'next';
import { Homepage } from 'Components/Pages/Homepage/Homepage';

export const getStaticProps = (async () => {
	const {data} = await getKeySkills();
	
	return { props: { keySkills: data } };
}) satisfies GetStaticProps<{
	keySkills: string[];
}>;

export default function Styles() {
	return (
		<>
			<MetaTags />
			<Homepage />
		</>
	);
}