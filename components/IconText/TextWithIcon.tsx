import styles from './TextWithIcon.module.scss';

interface TextWithIconProps {
	icon: React.ReactNode;
	text: string | React.ReactNode;
}

export const TextWithIcon = ({ icon, text }: TextWithIconProps) => {
	return <div className={styles.container}>
		{icon}
		{text}
	</div>;
};