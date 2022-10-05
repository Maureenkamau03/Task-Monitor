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
	return <div></div>;
}

export default Tasks;
