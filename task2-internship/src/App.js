import React, { useState } from "react";
import "./App.css";
import { Spinner } from "react-bootstrap";

function App() {
	const [user, setUser] = useState([]);
	const [done, setDone] = useState(false);
	const [isButton, setIsButton] = useState(false);

	const getUsers = async () => {
		setIsButton(true);
		const response = await fetch("https://reqres.in/api/users");
		const res = await response.json();
		setUser(res.data);
		console.log(res.data);
		setInterval(() => {
			setDone(true);
		}, 3000);
	};

	return (
    <div className="App">
		<nav className="main-nav">
			<div className="logo">
			<h2>Cookie</h2>
			</div>

			<div className="button-class">
			<button className="button"onClick={getUsers}>Get Users</button>
			</div>
		</nav>
	    <div className="card-body">
			{
			isButton ? (
					done ? (
						user.map((user) => (
					<div className="card">
					<img src={user.avatar} alt="userimage"/>
					<h1>{user.first_name} {user.last_name}</h1>
					<h2>{user.email}</h2>
					</div>
				
						))
					) : (
						<Spinner className="Spin" animation="border" role="status">
							<span className="visually-hidden">Loading...</span>
						</Spinner>
					)
				) : (
					<div class="h1-body">
						<h1>Click On Get Users to get the data!</h1>
					</div>
				)
			}
		</div>
    </div>
	);
}

export default App;