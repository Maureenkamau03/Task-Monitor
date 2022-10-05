import React from "react";
import "../styles/Tasks.css";

function Tasks() {
	// Fetching data from the API
	const [fetchedTasks, setFetchedTasks] = React.useState([]);

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
	return (
		<div>
			{fetchedTasks.map((task) => (
				<taskCard
					key={task.id}
					title={task.title}
					studentName={task.studentName}
					description={task.descirption}
					solotion={task.solution}
					comments={task.comments}
					completed={task.completed}
				/>
			))}
		</div>
	);
}

export default Tasks;
