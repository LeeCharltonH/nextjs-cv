import { MDText } from 'i18n-react';

import { MetaTags } from 'Components/MetaTags/MetaTags';
import { PageComposer } from 'Components/PageComposer/PageComposer';
import texts from 'Components/texts.json';
import { getKeySkills } from 'Services/api/keySkills';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

const T = new MDText(texts);

export const getStaticProps = (async () => {
	const {data} = await getKeySkills();
	
	return { props: { keySkills: data } };
}) satisfies GetStaticProps<{
	keySkills: string[];
}>;

export default function Styles({keySkills}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<MetaTags />
			<PageComposer>
				<h2>{T.translate('homepage.heading')}</h2>
				<p>{T.translate('homepage.p1')}</p>
				<p>{T.translate('homepage.p2')}</p>
				{keySkills}
			</PageComposer>
		</>
	);
}