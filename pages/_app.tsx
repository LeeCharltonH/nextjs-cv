import '../styles/globals.scss';
import type { AppProps } from 'next/app';
// import { PageComposer } from 'Components/PageComposer/PageComposer';

export const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps}  />;

};

export default App;
