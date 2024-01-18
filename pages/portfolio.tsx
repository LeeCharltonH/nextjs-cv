import { MetaTags } from 'Components/MetaTags/MetaTags';
import { PageComposer } from 'Components/PageComposer/PageComposer';
import { getPortfolio } from 'Services/api/portfolio';
import { GetStaticProps, InferGetStaticPropsType } from 'next';


export const getStaticProps = (async () => {
	const portfolio = await getPortfolio();
	
	return { props: { portfolio } };
}) satisfies GetStaticProps<{
	portfolio: string;
}>;

const Portfolio = ({ portfolio }: InferGetStaticPropsType<typeof getStaticProps>) => {
	console.log({portfolio: portfolio.data});
	return (
		<>
			<MetaTags />
			<PageComposer>
				Portfolio
			</PageComposer>
		</>
	);
};

export default Portfolio;