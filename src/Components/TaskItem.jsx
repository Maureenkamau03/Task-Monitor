import React from "react";
import "../styles/TaskItem.css";

function TaskItem({
	id,
	title,
	description,
	studentName,
	solution,
	comments,
	completed,
}) {
	const [formData, setFormData] = React.useState({
		solution: "",
		comments: "",
		completed: false,
	});
	const inputChangeHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const submitHandler = (e) => {
		e.preventDefault();
		const solutionData = {
			// setFormData({ solution:"", comments: "", completed: "" });
		};
	};

	return (
		<div
			className="taskitem"
			key={id}
			onClick={() => {
				// selectTask(task);
			}}
		>
			<div className="tasktitle_name">
				<h2>Task Title: {title}</h2>
				{/* <h2>Student Name: {studentName}</h2> */}
			</div>
			<div className="desc">Description: {description}</div>
			<form action="" onSubmit={submitHandler}>
				<label htmlFor="solution">Solution </label>
				<input
					type="text"
					name="solution"
					value={formData.solution}
					onChange={inputChangeHandler}
					placeholder="Add a description of how you solved the probem"
				/>
				<label htmlFor="">Comment</label>
				<input
					type="text"
					name="comments"
					id=""
					value={formData.comments}
					onChange={inputChangeHandler}
					placeholder="If task not done or challenges encountered leave a comment here"
				/>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}

export default TaskItem;
