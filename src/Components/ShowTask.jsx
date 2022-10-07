import React from "react";

function ShowTask({
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
		e.target.reset();
	};
	return (
		<div className="taskitem">
			<div className="tasktitle_name">
				<h2>Task Title: {title}</h2>
			</div>
			<div className="desc">
				<span>Description: </span>
				{description}
			</div>
			{!complete ? (
				<form action="" onSubmit={submitHandler}>
					<label htmlFor="solution">Solution: </label>
					<input
						type="text"
						name="solution"
						value={formData.solution}
						onChange={inputChangeHandler}
						placeholder=" how you solved the problem"
					/>
					<label htmlFor="">Comment:</label>
					<input
						type="text"
						name="comments"
						id=""
						value={formData.comments}
						onChange={inputChangeHandler}
						placeholder="Challenges? leave a comment here"
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

export default ShowTask;
