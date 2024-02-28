import { MetaTags } from 'Components/Layout/MetaTags/MetaTags';
import { PortfolioPage } from 'Components/Pages/Portfolio/PortfolioPage';
import { getPortfolio } from 'Services/api/portfolio';
import { PortfolioItem } from 'Types/portfolio';
import { GetStaticProps, InferGetStaticPropsType } from 'next';


export const getStaticProps = (async () => {
	const portfolioItems = await getPortfolio();
	
	return { props: { portfolioItems } };
}) satisfies GetStaticProps<{
	portfolioItems: Record<string, PortfolioItem[]>;
}>;

const Portfolio = ({ portfolioItems }: InferGetStaticPropsType<typeof getStaticProps>) => (
	<>
		<MetaTags />
		<PortfolioPage portfolioItems={portfolioItems.data} />
	</>
);

export default Portfolio;