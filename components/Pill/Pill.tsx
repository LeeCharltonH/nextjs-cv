import styles from './Pill.module.scss';

interface PillProps {
  text: string;
}

export const Pill = ({ text }: PillProps) => {
	return <div className={styles.container}>{text}</div>;
};