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
	const [complete, setComplete] = React.useState(completed);
	const inputChangeHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const submitHandler = (e) => {
		e.preventDefault();
		//patch
		const toSubmit = { ...formData, completed: true };
		fetch("http://localhost:8000/tasks/" + id, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(toSubmit),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Success:", data);
				setComplete(true);
			});
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
			</div>
			<div className="desc">Description: {description}</div>
			{!complete ? (
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
			) : (
				<div>
					<p>Done</p>
				</div>
			)}
		</div>
	);
}

export default TaskItem;
