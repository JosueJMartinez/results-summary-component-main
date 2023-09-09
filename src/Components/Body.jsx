import { useState, useEffect, useRef } from 'react';

import styles from '../styles/Body.module.scss';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';

import reactionSVG from '../assets/images/icon-reaction.svg';
import memorySVG from '../assets/images/icon-memory.svg';
import verbalSVG from '../assets/images/icon-verbal.svg';
import visualSVG from '../assets/images/icon-visual.svg';
/* import { BackCreditCard } from './BackCreditCard';
import { FrontCreditCard } from './FrontCreditCard';
import { CreditCardForm } from './CreditCardForm';
import { CompleteNotification } from './CompleteNotification'; */

function Body() {
	const jsonData = [
		{
			category: 'Reaction',
			score: 80,
			icon: reactionSVG,
		},
		{
			category: 'Memory',
			score: 92,
			icon: memorySVG,
		},
		{
			category: 'Verbal',
			score: 61,
			icon: verbalSVG,
		},
		{
			category: 'Visual',
			score: 72,
			icon: visualSVG,
		},
	];
	const cssColor = {
		Reaction: {
			background: `${styles.body_list_item_red} `,
			font: `${styles.body_list_item_category_red}`,
		},
		Memory: {
			background: `${styles.body_list_item_yellow} `,
			font: `${styles.body_list_item_category_yellow}`,
		},
		Verbal: {
			background: `${styles.body_list_item_green} `,
			font: `${styles.body_list_item_category_green}`,
		},
		Visual: {
			background: `${styles.body_list_item_blue} `,
			font: `${styles.body_list_item_category_blue}`,
		},
	};
	/* const [creditFormData, setCreditFormData] = useState({
		cardName: '',
		cardNumber: '',
		cardCvc: '',
		cardExpMonth: '',
		cardExpYear: '',
		complete: false,
	});

	const [mainFormStyle, setMainFormStyle] = useState({});

	const isInitialMount = useRef(true);

	useEffect(() => {
		const handleWindowResize = () => {
			if (window.innerWidth < 1200) {
				setMainFormStyle({});
			} else if (window.innerWidth < 1340) {
				setMainFormStyle({
					right: `${window.innerWidth - 1190}px`,
				});
			} else {
				setMainFormStyle({
					right: `${(window.innerWidth - 983) / 2}px`,
				});
			}
		};

		if (isInitialMount.current) {
			handleWindowResize();
		}
		window.addEventListener('resize', handleWindowResize);
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	const handleCreditCardChange = newCreditData => {
		setCreditFormData(newCreditData);
	}; */
	const displayItems = () => {
		const values = jsonData.map((item, idx) => {
			return (
				<ListGroup.Item
					key={idx}
					as='li'
					className={`${styles.body_list_item} ${cssColor[item.category].background}`}
				>
					<span className={`${styles.body_list_item_category} ${cssColor[item.category].font}`}>
						<img src={item.icon} alt='Icon' className={styles.body_list_item_icon} />
						{item.category}
					</span>
					<span className={styles.body_list_item_score}>
						<span className={styles.body_list_item_score_number}>{item.score}</span> / 100
					</span>
				</ListGroup.Item>
			);
		});
		return values;
	};

	return (
		<Card>
			<Card.Body>
				<Card.Title className={styles.body_title}>Summary</Card.Title>
				<ListGroup as='ul'>{displayItems()}</ListGroup>
				<Button variant='primary' className={styles.body_btn}>
					Continue
				</Button>
			</Card.Body>
		</Card>
	);
}

export default Body;
