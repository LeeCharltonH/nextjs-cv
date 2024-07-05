import { MetaTags } from 'Components/Layout/MetaTags/MetaTags';
import { PortfolioPage } from 'Components/Pages/Portfolio/PortfolioPage';
import { PortfolioItem } from 'Types/portfolio';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import {
	spotifySearchAPI,
	bearAmbitionPersonalTraining,
	eCommerceMockup,
	expensesFormReact,
	javascriptPairsGame,
	personalPortfolioV1,
	problemsAfootPodiatry,
} from '../images';

const portfolioItemsData = [
	{
		title: 'E-commerce Mockup',
		skills: ['React', 'Redux', 'Javascript', 'Scss', 'API'],
		link: 'https://e-commerce-mockup.web.app/',
		description: 'This project is a mockup of an ecommerce website. It utilises Redux to manage the state of a customer\'s shopping cart. More features such as a customer account section will be added in a later release. In this version, users can browse products by category, filter products by price and add items to a shopping cart.',
		image: eCommerceMockup,
	},
	{
		title: 'Spotify Search',
		skills: ['React', 'Redux', 'Javascript', 'Scss', 'API'],
		link: 'https://spotify-search-2d1d9.web.app/',
		description: 'Built using React and Redux, this project utlises Spotify’s API to retrieve a list of artists, albums and playlists for a specified search term. Redux is used to manage the login and search result states. An access token is retrieved from Spotify and stored in the browser’s local storage to make accessing the app more convenient for future use.',
		image: spotifySearchAPI,
	},
	{
		title: 'Problems Afoot Podiatry',
		skills: ['React', 'API', 'HTML', 'Scss', 'Javascript'],
		link: 'https://problems-afoot-58652.web.app/',
		description: 'Built using React and Redux, this project utlises Spotify’s API to retrieve a list of artists, albums and playlists for a specified search term. Redux is used to manage the login and search result states. An access token is retrieved from Spotify and stored in the browser’s local storage to make accessing the app more convenient for future use.',
		image: problemsAfootPodiatry,
	},
	{
		title: 'Javascript Pairs Game',
		skills: ['HTML', 'CSS', 'Javascript'],
		link: 'https://leecharltonh.github.io/pairs-game/',
		description: 'Built using React and Redux, this project utlises Spotify’s API to retrieve a list of artists, albums and playlists for a specified search term. Redux is used to manage the login and search result states. An access token is retrieved from Spotify and stored in the browser’s local storage to make accessing the app more convenient for future use.',
		image: javascriptPairsGame,
	},
	{
		title: 'Bear Ambition Personal Training',
		skills: ['React', 'Javascript', 'Scss', 'HTML'],
		link: 'https://www.bearambition.com/',
		description: 'Built using React and Redux, this project utlises Spotify’s API to retrieve a list of artists, albums and playlists for a specified search term. Redux is used to manage the login and search result states. An access token is retrieved from Spotify and stored in the browser’s local storage to make accessing the app more convenient for future use.',
		image: bearAmbitionPersonalTraining,
	},
	{
		title: 'Expenses Form - React',
		skills: ['React', 'Javascript', 'HTML', 'Scss'],
		link: 'https://leecharltonh.github.io/expenses-form/',
		description: 'Built using React and Redux, this project utlises Spotify’s API to retrieve a list of artists, albums and playlists for a specified search term. Redux is used to manage the login and search result states. An access token is retrieved from Spotify and stored in the browser’s local storage to make accessing the app more convenient for future use.',
		image: expensesFormReact,
	},
	{
		title: 'Personal Portfolio V1',
		skills: ['HTML', 'CSS'],
		link: 'https://leecharltonh.github.io/personal-portfolio/',
		description: 'Built using React and Redux, this project utlises Spotify’s API to retrieve a list of artists, albums and playlists for a specified search term. Redux is used to manage the login and search result states. An access token is retrieved from Spotify and stored in the browser’s local storage to make accessing the app more convenient for future use.',
		image: personalPortfolioV1,
	}];

export const getStaticProps = (async () => {
	const portfolioItems = JSON.parse(JSON.stringify(portfolioItemsData));
	
	return { props: { portfolioItems } };
}) satisfies GetStaticProps<{
	portfolioItems: Record<string, PortfolioItem[]>;
}>;

const Portfolio = ({ portfolioItems }: InferGetStaticPropsType<typeof getStaticProps>) => (
	<>
		<MetaTags title='Lee Hassall - Portfolio' description='A CV website to showcase my skills as a frontend engineer. Browse portfolio items.' />
		<PortfolioPage portfolioItems={portfolioItems} />
	</>
);

export default Portfolio;