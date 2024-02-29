
import { MDText } from 'i18n-react';
import texts from 'Components/texts.json';
import styles from './Homepage.module.scss';

const T = new MDText(texts);

export const Homepage = () => {
	return <div className={styles.container}>
		<h2>{T.translate('homepage.heading')}</h2>
		<p>{T.translate('homepage.p1')}</p>
		<p>{T.translate('homepage.p2')}</p>
	</div>;
};