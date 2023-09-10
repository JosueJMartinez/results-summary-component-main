import { useState, useEffect, useRef } from 'react';

import styles from '../styles/MainContainer.module.scss';
import { Container, Card } from 'react-bootstrap';
import Header from './Header';
import Body from './Body';


function MainContainer() {
	const percentage = 72;
	const score = 76;
	const jsonData = [
		{
			category: 'Reaction',
			score: 80,
			icon: './assets/images/icon-reaction.svg',
		},
		{
			category: 'Memory',
			score: 92,
			icon: './assets/images/icon-memory.svg',
		},
		{
			category: 'Verbal',
			score: 61,
			icon: './assets/images/icon-verbal.svg',
		},
		{
			category: 'Visual',
			score: 72,
			icon: './assets/images/icon-visual.svg',
		},
	];
	const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setViewportWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const calculateScore = () => {
		const sum = jsonData.reduce((accumalator, currentNode) => {
			return accumalator + currentNode.score;
		}, 0);
		return Math.floor(sum / jsonData.length);
	};

	const checkMobileOrDesktop=()=>{
		if (viewportWidth < 576) {
			return (
				<Card className={styles.mainContainer_card}>
					<Header percentage={percentage} score={calculateScore()} />
					<Body jsonData={jsonData} />
				</Card>
			);
		} else {
			return (
				<Container fluid='sm' className={styles.mainContainer}>
					<Card className={styles.mainContainer_card}>
						<Header percentage={percentage} score={calculateScore()} />
						<Body jsonData={jsonData} />
					</Card>
				</Container>
			);
		}
	}

	return (
		<main>
			{checkMobileOrDesktop()}
		</main>
	);
}

export default MainContainer;
