import styles from './PortfolioPage.module.scss';
import { MDText } from 'i18n-react';
import texts from 'Components/texts.json';
import { PortfolioSection } from 'Components/PortfolioSection/PortfolioSection';
import { PortfolioItem } from 'Types/portfolio';

const T = new MDText(texts);

interface PortfolioPageProps {
	portfolioItems: PortfolioItem[];
}

export const PortfolioPage = ({ portfolioItems }: PortfolioPageProps) => (
	<div className={styles.container}>
		<h2>{T.translate('portfolio.heading')}</h2>
		{portfolioItems.map((item, index) => <PortfolioSection index={index} portfolioItem={item} key={index} />)}
	</div>
);