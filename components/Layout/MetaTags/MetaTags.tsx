import Head from 'next/head';

interface MetaTagsProps {
	title: string;
	description: string;
}

export const MetaTags = ({ title, description}: MetaTagsProps) => (
	<Head>
		<title>{title}</title>
		<meta name={description} content="Lee Hassall" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" href="/favicon.ico" />
	</Head>
);
