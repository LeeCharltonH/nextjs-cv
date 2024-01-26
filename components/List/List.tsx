import styles from './List.module.scss';

interface ListProps {
  items: Record<string, string | undefined>[],
}

export const List = ({ items }: ListProps) => {
	return <ul className={styles.container}>
		{items.map((item, index) => {
			const key = Object.keys(item);

			return <li key={index}>{item[key[0]]}</li>;
		})}
	</ul>;
};