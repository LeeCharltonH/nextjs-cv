import classNames from 'classnames';
import styles from '../styles/Homepage.module.scss';
import Link from 'next/link';

export default function Styles() {
	return (
		<main className={classNames(styles.mainContainer)}>
			<header>
				<h1>LEE HASSALL</h1>
				<section>
					<ul>
						<li>ABOUT</li>
						<li><Link href='/portfolio'>PORTFOLIO</Link></li>
					</ul>
				</section>
			</header>
		</main>
	);
}