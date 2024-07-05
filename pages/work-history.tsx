import type { InferGetStaticPropsType, GetStaticProps } from 'next';

import { WorkHistoryPage} from 'Components/Pages/WorkHistory/WorkHistory';
import { MetaTags } from 'Components/Layout/MetaTags/MetaTags';
import workHistoryData from './work-history.json';

export const getStaticProps = (async () => {
	const workHistory = JSON.parse(JSON.stringify(workHistoryData));

	return { props: { workHistory } };
}) satisfies GetStaticProps<{
	workHistory: string;
}>;

const WorkHistory = ({ workHistory }: InferGetStaticPropsType<typeof getStaticProps>) => (
	<>
		<MetaTags title='Lee Hassall - Work History' description='A CV website to showcase my skills as a frontend engineer. Browse work history.' />
		<WorkHistoryPage content={workHistory} />
	</>
);

export default WorkHistory;




