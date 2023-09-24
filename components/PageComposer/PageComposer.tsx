import { NextFont } from '@next/font';
import { ReactNode } from 'react';

interface PageComposerProps {
  globalFont: NextFont;
  children: React.ReactNode;
}

export const PageComposer = ({ globalFont, children }: PageComposerProps): ReactNode => {
	return <>
		<main className={globalFont.className}>
			{children}
		</main>
	</>;
};