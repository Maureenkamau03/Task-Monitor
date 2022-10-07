import React from "react";
import "../styles/Home.css";
import Footer from "./Footer";

function Home() {
	return (
		<div>
			<div className="hero">
				{" "}
				<div className="herotext">
					<h1>Monitoring tasks has never been this easy</h1>
					<p>
						Has it been tedious to physically track your juniours' tasks
						manually? Don't sweat it! Task monitor helps you to monitor your
						juniors' tasks more efficiently.
					</p>
					<button>Learn More</button>
					<button id="download">Download APP</button>
				</div>
				<img
					src="https://i.postimg.cc/rwQ1TJ9V/output-onlinegiftools-1.gif"
					alt=""
				/>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
