// import React from "react";
import Button from "./Buttton";
import styles from "../Dashboard/dash.module.css";
const SemesterButton = () => {
	return (
		<article className={styles.button_section}>
			<Button className={styles.f_semester}>First Semester</Button>
			<Button className={styles.s_semester}>Second Semester</Button>
		</article>
	);
};

export default SemesterButton;
