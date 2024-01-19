import { Footer } from 'Components/Footer/Footer';
import { NavBar } from 'Components/Navigation/NavBar';
import React, { PropsWithChildren } from 'react';
import styles from './PageComposer.module.scss';


export const PageComposer: React.FC<PropsWithChildren> = ({ children }) => {
	return <>
		<header>
			<NavBar />
		</header>
		<main className={styles.mainSection}>
			{children}
		</main>
		<Footer />
	</>;
};