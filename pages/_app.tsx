import classNames from 'classnames';
import { AnimatePresence } from 'framer-motion';

import { MetaTags } from 'Components/MetaTags/MetaTags';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';

import styles from '../styles/App.module.scss';
import '../styles/globals.scss';
import { BackgroundAnimation } from 'Components/BackgroundAnimation/BackgroundAnimation';

export const App = ({ Component, pageProps }: AppProps) => {
	const router = useRouter();
	const asPath = router.asPath;
	const isHomepage = asPath === '/';
	
	return <div className={styles.container}>
		<MetaTags />
		<AnimatePresence mode='wait' initial={false}>
			<Component {...pageProps} />
			<BackgroundAnimation isHomepage={isHomepage}>
				<div className={classNames(styles.bubble)}></div>
			</BackgroundAnimation>
		</AnimatePresence>
	</div>;

};

export default App;
