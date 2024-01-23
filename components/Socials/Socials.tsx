import { AiFillGithub, CiLinkedin } from 'Styles/Icons';
import styles from './Socials.module.scss';

const { light, dark } = styles;

const colorOptions = {
	light,
	dark,
} as const;

interface SocialsProps {
  version: keyof typeof colorOptions; 
}

export const Socials = ({ version }: SocialsProps) => (<div className={styles.socialLinks}>
	<a href='https://www.linkedin.com/in/leehassall/' target='_blank' rel="noreferrer">
		<CiLinkedin color={colorOptions[version]} size='25px' />
	</a>
	<a href='https://github.com/LeeCharltonH' target='_blank' rel="noreferrer">
		<AiFillGithub color={colorOptions[version]} size='25px' />
	</a>
</div>);