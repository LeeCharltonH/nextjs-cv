import { Socials } from 'Components/Socials/Socials';
import styles from './Footer.module.scss';

export const Footer = () => {
	return <footer className={styles.footerSection}>
		<div className={styles.container}>
			<Socials version='light' />
			<span className={styles.copyright}>© Lee Hassall </span>
		</div>
	</footer>;
};