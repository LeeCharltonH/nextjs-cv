import '../styles/globals.scss';
import type { AppProps } from 'next/app';
// import { PageComposer } from 'Components/PageComposer/PageComposer';
import styles from '../styles/App.module.scss';
import { MetaTags } from 'Components/MetaTags/MetaTags';

export const App = ({ Component, pageProps }: AppProps) => {
	return <div className={styles.container}>
		<MetaTags />
		<Component {...pageProps}  />
		<div className={styles.bubble}></div>
	</div>;

};

export default App;
