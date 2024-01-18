import { MetaTags } from 'Components/MetaTags/MetaTags';

import type { AppProps } from 'next/app';

import styles from '../styles/App.module.scss';
import '../styles/globals.scss';

export const App = ({ Component, pageProps }: AppProps) => {
	return <div className={styles.container}>
		<MetaTags />
		<Component {...pageProps} />
	</div>;
};

export default App;
