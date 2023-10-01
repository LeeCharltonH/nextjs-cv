import classNames from 'classnames';
import styles from '../styles/Homepage.module.scss';

export default function Styles() {
	return (
		<>

			<main className={classNames(styles.mainContainer)}>
				<header>
					<h1>LEE HASSALL</h1>
					<section>
						<ul>
							<li>ABOUT</li>
							<li>PORTFOLIO</li>
						</ul>
					</section>
				</header>
			</main>
		</>
	);
}