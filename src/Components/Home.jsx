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
				<div className="herotext">
					<p>
						Has it been tedious to physically track your juniours' tasks
						manually?
					</p>
					<p>
						Don't sweat it! Task monitor helps you to monitor your juniors'
						tasks more efficiently.
					</p>
				</div>
				<img
					src="https://i.postimg.cc/fTgVt2xn/56438-man-with-task-list.gif"
					alt=""
				/>
			</div>
		</div>
	);
}

export default Home;
