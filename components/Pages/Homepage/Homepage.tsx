
import { MDText } from 'i18n-react';
import texts from 'Components/texts.json';
import styles from './Homepage.module.scss';

const T = new MDText(texts);

interface HomepageProps {
  keySkills: string[];
}

export const Homepage = ({ keySkills }: HomepageProps) => {
	console.log({keySkills});
	
	return <div className={styles.container}>
		<h2>{T.translate('homepage.heading')}</h2>
		<p>{T.translate('homepage.p1')}</p>
		<p>{T.translate('homepage.p2')}</p>
	</div>;
};