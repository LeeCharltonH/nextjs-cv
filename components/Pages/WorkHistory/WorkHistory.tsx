import { Accordion } from 'Components/Accordion/Accordion';
import styles from './WorkHistory.module.scss';
import { MDText } from 'i18n-react';
import texts from 'Components/texts.json';
import { WorkHistory } from 'Types/workHistory';

const T = new MDText(texts);

interface WorkHistoryPageProps {
	content: WorkHistory;
}

export const WorkHistoryPage = ({ content }: WorkHistoryPageProps) => {
	const workHistoryData = [];

	for (const key in content ) {
		const item = content[key];

		workHistoryData.push(item);
	}

	return <div className={styles.container}>
		<h2>{T.translate('workHistory.heading')}</h2>
		{workHistoryData.map((item, index) => <Accordion key={index} content={item} />)}
	</div>;
};