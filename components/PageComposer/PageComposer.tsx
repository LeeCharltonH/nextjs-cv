import { Footer } from 'Components/Footer/Footer';
import { NavBar } from 'Components/Navigation/NavBar';
import React, { PropsWithChildren } from 'react';

export const PageComposer: React.FC<PropsWithChildren> = ({ children }) => {
	return <>
		<header>
			<NavBar />
		</header>
		<main>
			{children}
		</main>
		<Footer />
	</>;
};