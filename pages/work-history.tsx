import type { InferGetStaticPropsType, GetStaticProps } from 'next';

import { MetaTags } from 'Components/MetaTags/MetaTags';
import { PageComposer } from 'Components/PageComposer/PageComposer';
import { getWorkHistory } from 'Services/api/workHistory';

export const getStaticProps = (async () => {
	const workHistory = await getWorkHistory();
	
	return { props: { workHistory } };
}) satisfies GetStaticProps<{
	workHistory: string;
}>;

const WorkHistory = ({ workHistory }: InferGetStaticPropsType<typeof getStaticProps>) => {

	return (
		<>
			<MetaTags />
			<PageComposer>
				{workHistory.data}
			</PageComposer>
		</>
	);
};


export default WorkHistory;




