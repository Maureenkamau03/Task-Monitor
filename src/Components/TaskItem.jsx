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
				{/* <h2>Student Name: {studentName}</h2> */}
			</div>
			<div className="desc">Description: {description}</div>
			<form action="">
				<label htmlFor="solution">Solution</label>
				<input
					type="text"
					name=""
					id=""
					placeholder="Add a description of how you solved the probem"
				/>
				<label htmlFor="">Comment</label>
				<input
					type="text"
					name=""
					id=""
					placeholder="If task not done or challenges encountered leave a comment here"
				/>
			</form>
		</div>
	);
}

export default TaskItem;
