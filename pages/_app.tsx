import type { AppProps } from 'next/app';
import styles from '../styles/App.module.scss';
import 'Styles/globals.scss';
import { PageComposer } from 'Components/Layout/PageComposer/PageComposer';
import { useIsDeviceSize } from 'Hooks/useIsDeviceSize';

export const App = ({ Component, pageProps }: AppProps) => {
	const { isMobile } = useIsDeviceSize();

	return <div className={styles.container}>
		<PageComposer sidebar={!isMobile}>
			<Component {...pageProps} />
		</PageComposer>
	</div>;
};

export default App;
