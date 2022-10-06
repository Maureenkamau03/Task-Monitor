import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Tasks from "./Components/Tasks";

function App() {
	return (
		<div className="App">
			{/* <Router>
				<Navbar />
				<Routes>
					<Route path="/Tasks" element={}></Route>
					<Route exact path="/" element={} />
				</Routes>
			</Router> */}
			<Home />
			<Tasks />
		</div>
	);
}

export default App;
