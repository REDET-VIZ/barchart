import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MultilineChart from "./MultilineChart";
import schc from "./SCHC.json";
import vcit from "./VCIT.json";
import portfolio from "./portfolio.json";

const portfolioData = {
	name: "Portfolio",
	color: "#ffffff",
	items: portfolio.map((d) => ({ ...d, date: new Date(d.date) })),
};
const schcData = {
	name: "SCHC",
	color: "#d53e4f",
	items: schc.map((d) => ({ ...d, date: new Date(d.date) })),
};
const vcitData = {
	name: "VCIT",
	color: "#5e4fa2",
	items: vcit.map((d) => ({ ...d, date: new Date(d.date) })),
};

const dimensions = {
	width: 600,
	height: 300,
	margin: {
		top: 30,
		right: 30,
		bottom: 30,
		left: 60,
	},
};

export default function Home() {
  return (
		<div className={styles.container}>
			<Head>
				<title>Bar Chart by R3ACT</title>
				<meta name="description" content="Bar Chart by R3ACT" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MultilineChart
				data={[portfolioData, schcData, vcitData]}
				dimensions={dimensions}
      />
			<main className={styles.main}>
				<h1 className={styles.title}>
					Bar<a href="#">chart</a>
				</h1>
			</main>

			<footer className={styles.footer}>
				<a href="#" target="_blank" rel="noopener noreferrer">
					Powered by <span className={styles.logo}>R3ACT</span>
				</a>
			</footer>
		</div>
	);
}
