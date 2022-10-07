import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ShowTask from "./Components/ShowTask";
import Tasks from "./Components/Tasks";

function App() {
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
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					{fetchedTasks.map((task) => (
						<Route
							path={`/tasks/${task.id}`}
							element={
								<ShowTask
									id={task.id}
									title={task.title}
									description={task.description}
									studentName={task.studentName}
									solution={task.solution}
									comments={task.comments}
									completed={task.completed}
								/>
							}
						/>
					))}
					<Route path="/" element={<Home />} />
					<Route
						path="/tasks"
						element={<Tasks fetchedTasks={fetchedTasks} />}
					/>
					<Route path="/tasks/1" element={<h1>404 Not Found</h1>} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
