import { StaticImageData } from 'next/image';

export type PortfolioItem = {
	title: string;
	skills: string[];
	link: string;
	description: string;
	image: StaticImageData,
};