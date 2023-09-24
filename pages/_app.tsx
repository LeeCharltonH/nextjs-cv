import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { PageComposer } from 'Components/PageComposer/PageComposer';
import { Inconsolata } from '@next/font/google';

const inconsolata = Inconsolata({
	subsets: ['latin'],
	weight: ['200', '300', '400', '700'],
});


export const App = ({ Component, pageProps }: AppProps) => {
	return <PageComposer globalFont={inconsolata} ><h1>TITLE</h1></PageComposer>;
};

export default App;
