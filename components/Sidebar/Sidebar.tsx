import { TextWithIcon } from 'Components/IconText/TextWithIcon';
import { FaLocationDot, FaPhoneAlt, SiMinutemailer } from 'Styles/Icons';
import styles from './Sidebar.module.scss';
import { Socials } from 'Components/Socials/Socials';
import { Pill } from 'Components/Pill/Pill';

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

const skills = ['CSS', 'HTML', 'Javascript', 'React', 'NextJS'];

export const Sidebar = () => {
	return <aside className={styles.container}>
		<h5>Contact details</h5>
		<ul>
			{contactDetails.map((contactdetail, index) => <li key={index}><TextWithIcon icon={contactdetail.icon} text={contactdetail.text} /></li>)}
		</ul>
		<h5>Socials</h5>
		<Socials version='dark' />
		<h5>Key skills</h5>
		{skills.map((item, index) => <Pill key={index} text={item} />)}
	</aside>;
};