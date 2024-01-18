import Link from 'next/link';
import styles from './NavBar.module.scss';

export const NavBar = () => {
	return <nav className={styles.navBar}>
		<h1><Link href='/'>LEE HASSALL</Link></h1>
		<ul>
			<li><Link href='/portfolio'>PORTFOLIO</Link></li>
			<li><Link href='/work-history'>WORK HISTORY</Link></li>
		</ul>
	</nav>;
};