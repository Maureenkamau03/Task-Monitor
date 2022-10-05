import React from "react";
// import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Tasks from "./Components/Tasks";

function App() {
	return (
		<div className="App">
			{/* <Navbar /> */}

			<Tasks />

			<Home />
		</div>
	);
}

export default App;
