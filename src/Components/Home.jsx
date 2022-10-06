import React from "react";
import Navbar from "./Navbar";
import "../styles/Home.css";

function Home() {
	return (
		<div>
			{/* <h1>Hello</h1> */}
			<Navbar />
			<div className="hero">
				{" "}
				<p>
					Task monitor helps you to monitor your juniors' tasks more efficiently
				</p>
				<img
					src="https://i.postimg.cc/fTgVt2xn/56438-man-with-task-list.gif"
					alt=""
				/>
			</div>
		</div>
	);
}

export default Home;
