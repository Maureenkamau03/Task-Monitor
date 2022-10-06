import React from "react";
import "../styles/Tasks.css";
import TaskItem from "./TaskItem";

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
			{fetchedTasks.map((task) => (
				<TaskItem
					key={task.id}
					title={task.title}
					studentName={task.studentName}
					description={task.description}
					solotion={task.solution}
					comments={task.comments}
					completed={task.completed}
				/>
			))}
		</div>
	);
}

export default Tasks;
