import { CiLinkedin } from 'react-icons/ci';
import { AiFillGithub } from 'react-icons/ai';

import styles from './Footer.module.scss';

export const Footer = () => {
	return <footer className={styles.footerContainer}>
		<div className={styles.socialLinks}>
			<a href='https://www.linkedin.com/in/leehassall/' target='_blank' rel="noreferrer">
				<CiLinkedin color='#ffece5' size='25px' />
			</a>
			<a href='https://github.com/LeeCharltonH' target='_blank' rel="noreferrer">
				<AiFillGithub color='#ffece5' size='25px' />
			</a>
		</div>
		<span className={styles.copyright}>© Lee Charlton-Hassall </span>
	</footer>;
};