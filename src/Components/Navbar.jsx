import React from "react";
// import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import "../../src/index.css";

function Navbar() {
	return (
		<div className="nav">
			<div className="logo">
				<h1>TaskMonitor</h1>
			</div>
			<p>Tasks</p>
			{/* <NavLink to="/">Home</NavLink> */}
			{/* <NavLink to="/Tasks">Tasks</NavLink> */}
		</div>
	);
}

export default Navbar;
