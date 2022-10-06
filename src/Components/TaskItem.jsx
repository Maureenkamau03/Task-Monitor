import React from "react";
import "../styles/TaskItem.css";

function TaskItem({
	title,
	description,
	studentName,
	solution,
	comments,
	completed,
}) {
	return (
		<div className="taskitem">
			<div className="tasktitle_name">
				<h2>Task Title: {title}</h2>
				<h2>Student Name: {studentName}</h2>
			</div>
		</div>
	);
}

export default TaskItem;
