import { useState, useEffect, useRef } from 'react';

import styles from '../styles/MainContainer.module.scss';
import { Container, Card } from 'react-bootstrap';
import Header from './Header';
import Body from './Body';

function MainContainer() {

	return (
		<main
		// className={`container-fluid container-sm d-flex flex-column align-items-center justify-content-center vh-100 ${styles.background_container}`}
		>
			{/* <Container fluid='md'> */}
				{/* <Row> */}
					<Card>
						<Header />
						<Body />
					</Card>
				{/* </Row> */}
			{/* </Container> */}

		</main>
	);
}

export default MainContainer;
