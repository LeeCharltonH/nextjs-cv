import { Inter } from 'next/font/google';
import styles from 'Styles/Home.module.css';
import { MetaTags } from 'Components/MetaTags/MetaTags';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<MetaTags />
			<main className={`${styles.main} ${inter.className}`}>
				<p>Index page</p>
			</main>
		</>
	);
}
