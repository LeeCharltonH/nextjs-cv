import { Footer } from 'Components/Layout/Footer/Footer';
import { NavBar } from 'Components/Layout/Navigation/NavBar';
import React, { PropsWithChildren } from 'react';
import styles from './PageComposer.module.scss';
import { ContactDetailsSection, KeySkillsSection, Sidebar } from 'Components/Sidebar/Sidebar';

interface PageComposerProps {
	sidebar?: boolean;
}

export const PageComposer: React.FC<PropsWithChildren<PageComposerProps>> = ({ children, sidebar = true }) => {
	return <>
		<header>
			<NavBar />
		</header>
		<main className={styles.mainSection}>
			<div className={styles.container}>
				{sidebar && <Sidebar />}
				{children}
				{!sidebar &&
					<>
						<ContactDetailsSection />
						<KeySkillsSection />
					</>
				}
			</div>
		</main>
		<div className={styles.buffer}></div>
		<Footer />
	</>;
};