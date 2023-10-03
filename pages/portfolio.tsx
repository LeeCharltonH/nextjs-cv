import Link from 'next/link';



const Portfolio = () => {
	return (<main>
		<h1>Portfolio</h1>
		<section>
			<ul>
				<li>ABOUT</li>
				<li><Link href='/'>HOME</Link></li>
			</ul>
		</section>
	</main>
	);
};

export default Portfolio;