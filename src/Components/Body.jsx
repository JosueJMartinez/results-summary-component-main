import styles from '../styles/Body.module.scss';
import { Card, Button, ListGroup } from 'react-bootstrap';

import reactionSVG from '../assets/images/icon-reaction.svg';
import memorySVG from '../assets/images/icon-memory.svg';
import verbalSVG from '../assets/images/icon-verbal.svg';
import visualSVG from '../assets/images/icon-visual.svg';

function Body({ jsonData }) {
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

	const getIcon = iconStr => {
		const start = iconStr.indexOf('-') + 1;
		const end = iconStr.lastIndexOf('.');
		const icon = iconStr.slice(start, end);
		let actualIcon = null;
		switch (icon) {
			case 'reaction':
				actualIcon = reactionSVG;
				break;
			case 'memory':
				actualIcon = memorySVG;
				break;
			case 'verbal':
				actualIcon = verbalSVG;
				break;
			case 'visual':
				actualIcon = visualSVG;
				break;
			default:
				console.log('no icon found');
		}
		return actualIcon;
	};
	const displayItems = () => {
		const values = jsonData.map((item, idx) => {
			return (
				<ListGroup.Item
					key={idx}
					as='li'
					className={`${styles.body_list_item} ${cssColor[item.category].background}`}
				>
					<span className={`${styles.body_list_item_category} ${cssColor[item.category].font}`}>
						<img src={getIcon(item.icon)} alt='Icon' className={styles.body_list_item_icon} />
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
		<Card className={styles.body_container}>
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
