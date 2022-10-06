import React from "react";
import "../styles/Tasks.css";
import TaskItem from "./TaskItem";

function Tasks({ fetchedTasks }) {
	// Fetching data from the API

	// const selectTask = (task) => {
	// 	const showTask = fetchedTasks.filter;
	// };
	return (
		<div className="tasks">
			{fetchedTasks.map((task) => (
				<TaskItem
					key={task.id}
					id={task.id}
					title={task.title}
					// studentName={task.studentName}
					description={task.description}
					// solotion={task.solution}
					// comments={task.comments}
					completed={task.completed}
				/>
			))}
		</div>
	);
}

export default Tasks;
