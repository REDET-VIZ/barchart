import { useState, useEffect, useRef } from "react";
import useInterval from '../hooks/useInterval'
import styles from "../styles/Home.module.css";

	const getRandomColor = () => {
		var letters = "0123456789ABCDEF";
		var color = "#";
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}


export default function Circles() {
	
	// generate 50 random coordinates
	const generateDataset = () =>
		Array(50)
			.fill(0)
			.map(() => [Math.random() * 80 + 10, Math.random() * 35 + 10]);

	const [dataset, setDataset] = useState(generateDataset());

	useInterval(() => {
		const newDataset = generateDataset();
		setDataset(newDataset);
	}, 100);

	return (
		<main className={styles.main}>
			<svg viewBox="0 0 100 50">
				{dataset.map(([x, y], i) => (
					<circle
						cx={x}
						cy={y}
						fill={getRandomColor()}
						r="1"
						key='i'
					/>
				))}
			</svg>
		</main>
	);
}