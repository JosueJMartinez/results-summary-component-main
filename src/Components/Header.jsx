import { Card } from 'react-bootstrap';
import AvgScoreComponent from './AvgScoreComponent';

import styles from '../styles/Header.module.scss';


function Header({percentage, score}) {
	


	return (
		<Card className={styles.header_background_container}>
			<Card.Body>
				<Card.Title className={styles.header_caption}>Your Result</Card.Title>
				<AvgScoreComponent score={score} />
				<Card.Title className={styles.header_title}>Great</Card.Title>
				<Card.Text className={`${styles.header_text} mx-auto`}>
					You scored higher than {percentage}% of the people who have taken these tests.
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default Header;
