import type { InferGetStaticPropsType, GetStaticProps } from 'next';

import { WorkHistoryPage} from 'Components/Pages/WorkHistory/WorkHistory';
import { MetaTags } from 'Components/Layout/MetaTags/MetaTags';
import { PageComposer } from 'Components/Layout/PageComposer/PageComposer';
import { getWorkHistory } from 'Services/api/workHistory';

export const getStaticProps = (async () => {
	const workHistory = await getWorkHistory();
	
	return { props: { workHistory } };
}) satisfies GetStaticProps<{
	workHistory: string;
}>;

const WorkHistory = ({ workHistory }: InferGetStaticPropsType<typeof getStaticProps>) => (
	<>
		<MetaTags />
		<PageComposer>
			<WorkHistoryPage content={workHistory.data} />
		</PageComposer>
	</>
);

export default WorkHistory;




