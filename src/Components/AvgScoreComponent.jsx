import styles from '../styles/AvgScoreComponent.module.scss';

function AvgScoreComponent() {

  const score = 76;

	return (
		<div className={styles.avg_score_container}>
			<div className={styles.avg_score_filler}></div>
			<div className={styles.avg_score_element_container}>
				
					<div className={styles.avg_score_element_score}>{score}</div>
					<div className={styles.avg_score_element_from_total}>of 100</div>
				
			</div>
		</div>
	);
}

export default AvgScoreComponent;
