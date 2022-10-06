import React from "react";
import "../styles/TaskItem.css";
import SolutionForm from "./SolutionForm";

function TaskItem({ title, description, studentName, props }) {
	return (
		<div className="taskitem">
			<div className="tasktitle_name">
				<h2>Task Title: {title}</h2>
				{/* <h2>Student Name: {studentName}</h2> */}
			</div>
			<div className="desc">Description: {description}</div>
			<SolutionForm props={props} />
		</div>
	);
}

export default TaskItem;
