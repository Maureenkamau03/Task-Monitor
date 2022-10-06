import React from "react";
import "../styles/Tasks.css";
import TaskItem from "./TaskItem";
import { Routes, Route } from "react-router-dom";

function Tasks() {
	// Fetching data from the API
	const [fetchedTasks, setFetchedTasks] = React.useState([]);
	// const [taskSelected, settaskSelected] = React.useState(null);

	React.useEffect(() => {
		getTasks();
	}, []);
	const getTasks = () => {
		fetch("http://localhost:8000/tasks")
			.then((res) => res.json())
			.then((data) => {
				setFetchedTasks(data);
			});
	};
	console.log(fetchedTasks);
	// const selectTask = (task) => {
	// 	const showTask = fetchedTasks.filter;
	// };
	return (
		<div className="tasks">
			<Routes>
				{fetchedTasks.map((task) => (
					<Route
						path={`/tasks/${task.id}`}
						element={<TaskItem task={task}
						title={task.title}
						description={task.description}
						studentName={task.studentName}
						solution={task.solution}
						comments={task.comments}
						com
						/>}
					/>
				))}
			</Routes>
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
