import type { AppProps } from 'next/app';
import styles from '../styles/App.module.scss';
import 'Styles/globals.scss';
import { PageComposer } from 'Components/Layout/PageComposer/PageComposer';
import { useIsDeviceSize } from 'Hooks/useIsDeviceSize';
import { Proza_Libre } from '@next/font/google';
import classNames from 'classnames';

const prozaLibre = Proza_Libre({
	subsets: ['latin', 'latin-ext'],
	weight: ['400', '500', '700'],
});

export const App = ({ Component, pageProps }: AppProps) => {
	const { isMobile } = useIsDeviceSize();

	return <div className={classNames(styles.container, prozaLibre.className)}>
		<PageComposer sidebar={!isMobile}>
			<Component {...pageProps} />
		</PageComposer>
	</div>;
};

export default App;
