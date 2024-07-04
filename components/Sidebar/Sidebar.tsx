import { TextWithIcon } from 'Components/IconText/TextWithIcon';
import { FaLocationDot, FaPhoneAlt, SiMinutemailer, RxDoubleArrowLeft, RxDoubleArrowRight } from 'Styles/Icons';
import styles from './Sidebar.module.scss';
import { Socials } from 'Components/Socials/Socials';
import { Pill } from 'Components/Pill/Pill';
import classNames from 'classnames';
import { useState } from 'react';

const contactDetails = [
	{
		icon: <FaLocationDot />,
		text: 'London',
	},
	{
		icon: <FaPhoneAlt />,
		text: <a href="tel:+447837269147">07837269147</a>,
	},
	{
		icon: <SiMinutemailer />,
		text: <a href="mailto:leehassall@hotmail.co.uk">leehassall@hotmail.co.uk</a>,
	},
];

const skills = ['Next.js', 'React', 'Typescript', 'Javascript', 'CSS', 'HTML', 'Sass', 'Jest', 'Cypress', 'Datadog', 'Git'];

export const ContactDetailsSection = () => (
	<>
		<h5 className={styles.heading}>Contact details</h5>
		<ul className={styles.contactDetailsList}>
			{contactDetails?.map((contactdetail, index) => <li key={index}><TextWithIcon icon={contactdetail.icon} text={contactdetail.text} /></li>)}
		</ul>
	</>
);

export const SocialsSection = () => (
	<>
		<h5 className={styles.heading}>Socials</h5>
		<Socials version='dark' />
	</>
);

export const KeySkillsSection = () => (
	<>
		<h5 className={styles.heading}>Key skills</h5>
		<div className={styles.keySkills}>
			{skills.map((item, index) => <Pill key={index} text={item} />)}
		</div>
	</>
);


export const Sidebar = () => {
	const [isHidden, setIsHidden] = useState(false);

	return <aside className={classNames(styles.wrapper, {
		[styles.hide]: isHidden,
	})}>
		<div className={styles.arrow} onClick={() => setIsHidden(state => !state)}>
			{isHidden ? <RxDoubleArrowRight size={30} /> : <RxDoubleArrowLeft size={30} />}
		</div>
		<div className={classNames(styles.container, {
			[styles.hide]: isHidden,
		}
		)}>
			<ContactDetailsSection />
			<SocialsSection />
			<KeySkillsSection />
		</div>
	</aside>;
};