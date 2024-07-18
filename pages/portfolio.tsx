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
		skills: ['React', 'Redux', 'Javascript', 'Sass', 'API'],
		link: 'https://e-commerce-mockup.web.app/',
		description: 'This project is a mockup of an ecommerce website. It utilises Redux to manage the state of a customer\'s shopping cart. More features such as a customer account section will be added in a later release. In this version, users can browse products by category, filter products by price and add items to a shopping cart.',
		image: eCommerceMockup,
	},
	{
		title: 'Spotify Search',
		skills: ['React', 'Redux', 'Javascript', 'Sass', 'API'],
		link: 'https://spotify-search-2d1d9.web.app/',
		description: 'Built using React and Redux, this project utlises Spotify’s API to retrieve a list of artists, albums and playlists for a specified search term. Redux is used to manage the login and search result states. An access token is retrieved from Spotify and stored in the browser’s local storage to make accessing the app more convenient for future use.',
		image: spotifySearchAPI,
	},
	{
		title: 'Problems Afoot Podiatry',
		skills: ['React', 'API', 'HTML', 'Sass', 'Javascript'],
		link: 'https://problems-afoot-58652.web.app/',
		description: 'Problems Afoot is a podiatry clinic with two locations based in Oxfordshire. This client required a website to display their services, location details and ultimately to convert users to book an appointment.This project utilises many React features including state management, routing and reusable components to display content from an array of objects.The location components make use of Google’s map API to display the location of each surgery.',
		image: problemsAfootPodiatry,
	},
	{
		title: 'Javascript Pairs Game',
		skills: ['HTML', 'CSS', 'Javascript'],
		link: 'https://leecharltonh.github.io/pairs-game/',
		description: 'An online pairs game in which the user has to find all matching cards in the fastest time and fewest moves.Using vanilla javascript content is dynamically served to the user by interacting with the DOM. The user is able to control several features of the game, such as pausing, restarting and enabling sound. Using ES6 standard javascript the user’s stats are recorded and displayed in the browser accordingly.',
		image: javascriptPairsGame,
	},
	{
		title: 'Bear Ambition Personal Training',
		skills: ['React', 'Javascript', 'Sass', 'HTML'],
		link: 'https://www.bearambition.com/',
		description: 'Bear Ambition is a Health & Fitness company offering personal training and online coaching. This client required a website to display their services and allow visitors to submit an enquiry.This website was developed using React and utilises many features of this javascript framework. Form validation has been applied to the form to ensure data is captured accurately.',
		image: bearAmbitionPersonalTraining,
	},
	{
		title: 'Expenses Form - React',
		skills: ['React', 'Javascript', 'HTML', 'Sass'],
		link: 'https://leecharltonh.github.io/expenses-form/',
		description: 'A tracker which records, displays and filters expenses by year and month.This application was built using React, which allows users to make new entries by submitting new expenses via a form. This state change then triggers several components to update such as the list of expenses and the filter components.',
		image: expensesFormReact,
	},
	{
		title: 'Personal Portfolio V1',
		skills: ['React', 'Firebase', 'HTML', 'Sass', 'CSS'],
		link: 'https://leecharltonh.github.io/CV/',
		description: 'This is a previous version of my digital CV. I built this after completing a React course on Udemy to practice using this javascript framework and showcase my portfolio. Previously I hosted this project using Firebase and setup a realtime database to retrieve the website content from.',
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