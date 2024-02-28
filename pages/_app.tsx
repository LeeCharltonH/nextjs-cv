import { MetaTags } from 'Components/Layout/MetaTags/MetaTags';

import type { AppProps } from 'next/app';

import styles from '../styles/App.module.scss';
import '../styles/globals.scss';
import { PageComposer } from 'Components/Layout/PageComposer/PageComposer';

export const App = ({ Component, pageProps }: AppProps) => {
	return <div className={styles.container}>
		<MetaTags />
		<PageComposer>
			<Component {...pageProps} />
		</PageComposer>
	</div>;
};

export default App;
