import styles from 'Styles/Styles.module.scss';
import { MetaTags } from 'Components/MetaTags/MetaTags';
import { List } from '../stories/List/List';

export default function Styles() {
	return (
		<>
			<MetaTags />
			<main className={`${styles.main}`}>
				<h1>HEADING 1</h1>
				<h2>HEADING 2</h2>
				<h3>HEADING 3</h3>
				<h4>HEADING 4</h4>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, consectetur ullam. Saepe qui quaerat, adipisci fugit odit repudiandae ea doloremque, repellendus aliquid eum, veritatis delectus! Ducimus sequi adipisci at aliquid.</p>
				<List />
				<div className={styles.colorContainer}>
					<div className={styles.colorItem}>
						<h4>Dark Gray</h4>
						<div className={styles.colorSquareDarkGray}></div>
					</div>
					<div className={styles.colorItem}>
						<h4>Gray</h4>
						<div className={styles.colorSquareGray}></div>
					</div>
					<div className={styles.colorItem}>
						<h4>Light Gray</h4>
						<div className={styles.colorSquareLightGray}></div>
					</div>
					<div className={styles.colorItem}>
						<h4>Lighter Gray</h4>
						<div className={styles.colorSquareLighterGray}></div>
					</div>
				</div>

				<div className={styles.colorContainer}>
					<div className={styles.colorItem}>
						<h4>Darker Green</h4>
						<div className={styles.colorSquareDarkerGreen}></div>
					</div>
					<div className={styles.colorItem}>
						<h4>Dark Green</h4>
						<div className={styles.colorSquareDarkGreen}></div>
					</div>
					<div className={styles.colorItem}>
						<h4>Green</h4>
						<div className={styles.colorSquareGreen}></div>
					</div>
					<div className={styles.colorItem}>
						<h4>Light Green</h4>
						<div className={styles.colorSquarelightGreen}></div>
					</div>
					<div className={styles.colorItem}>
						<h4>Lighter Green</h4>
						<div className={styles.colorSquarelighterGreen}></div>
					</div>
				</div>


				<div className={styles.colorContainer}>
					<div className={styles.colorItem}>
						<h4>Darker Peach</h4>
						<div className={styles.colorSquareDarkerPeach}></div>
					</div>
					<div className={styles.colorItem}>
						<h4>Dark Peach</h4>
						<div className={styles.colorSquareDarkPeach}></div>
					</div>
					<div className={styles.colorItem}>
						<h4>Peach</h4>
						<div className={styles.colorSquarePeach}></div>
					</div>
					<div className={styles.colorItem}>
						<h4>Light Peach</h4>
						<div className={styles.colorSquarelightPeach}></div>
					</div>
					<div className={styles.colorItem}>
						<h4>Lighter Peach</h4>
						<div className={styles.colorSquarelighterPeach}></div>
					</div>
				</div>

				<div className={styles.colorContainer}>
					<div className={styles.colorItem}>
						<h4>Error Darker Red</h4>
						<div className={styles.colorSquareDarkerRed}></div>
					</div>
					<div className={styles.colorItem}>
						<h4>Error Dark Red</h4>
						<div className={styles.colorSquareDarkRed}></div>
					</div>
					<div className={styles.colorItem}>
						<h4>Error Red</h4>
						<div className={styles.colorSquareRed}></div>
					</div>
					<div className={styles.colorItem}>
						<h4>Error Light Red</h4>
						<div className={styles.colorSquarelightRed}></div>
					</div>
					<div className={styles.colorItem}>
						<h4>Error Lighter Red</h4>
						<div className={styles.colorSquarelighterRed}></div>
					</div>
				</div>


				<div className={styles.colorContainer}>
					<div className={styles.colorItem}>
						<h4>Warning Darker Yellow</h4>
						<div className={styles.colorSquareDarkerYellow}></div>
					</div>
					<div className={styles.colorItem}>
						<h4>Warning Dark Yellow</h4>
						<div className={styles.colorSquareDarkYellow}></div>
					</div>
					<div className={styles.colorItem}>
						<h4>Warning Yellow</h4>
						<div className={styles.colorSquareYellow}></div>
					</div>
					<div className={styles.colorItem}>
						<h4>Warning Light Yellow</h4>
						<div className={styles.colorSquarelightYellow}></div>
					</div>
					<div className={styles.colorItem}>
						<h4>Warning Lighter Yellow</h4>
						<div className={styles.colorSquarelighterYellow}></div>
					</div>
				</div>
			</main>
		</>
	);
}
