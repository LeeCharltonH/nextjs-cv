import { Pill } from 'Components/Pill/Pill';
import styles from './PortfolioSection.module.scss';
import { Button } from 'Components/Button/Button';
import classNames from 'classnames';
import { PortfolioItem } from 'Types/portfolio';


interface PortfolioSectionProps {
	portfolioItem: PortfolioItem,
	index: number;
}

export const PortfolioSection = ({ portfolioItem, index }: PortfolioSectionProps) => {
	const shouldFloatImageLeft = index % 2 === 0;

	return <div className={classNames(
		styles.wrapper,
		{
			[styles.imageLeft]: shouldFloatImageLeft,
			[styles.imageRight]: !shouldFloatImageLeft,
		}
	)}>
		<div className={styles.item}>
			<h2>{portfolioItem.title}</h2>
			<ul className={styles.skillList}>
				{portfolioItem.skills.map((skill, index) => <Pill key={index} text={skill} size="small" />)}
			</ul>
			<p>{portfolioItem.description}</p>
			<a href={portfolioItem.link} target='_blank' rel="noreferrer">
				<Button type='button' value='View Project' />
			</a>
		</div>
		<div className={styles.item}>
			<a href={portfolioItem.link} target='_blank' rel="noreferrer">
				<img src={portfolioItem.image.src} />
			</a>
		</div>
	</div>;
};