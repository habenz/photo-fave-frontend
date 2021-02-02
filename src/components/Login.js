import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const API_URL_BASE = 'http://localhost:5000'

const Login = () => {

	const [inputs, setValue] = useState({
		username: '',
		password: ''
	});

	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	console.log(inputs.username, inputs.password);
	// 	fetch(API_URL_BASE+"/add", {
	// 		method: 'POST',
	// 		//mode?
	// 		body: JSON.stringify(inputs)
	// 	})
	// 		.then((response) => console.log(response))
	// 		.then(() => setValue({username: "", password:''}))

	// }
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("submit", inputs.username, inputs.password);
		const url = API_URL_BASE+"/users/add";
		console.log(url);
		console.log('inputs', JSON.stringify(inputs));
		fetch(url , {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			//mode?
			body: JSON.stringify(inputs)
		})
			.then((response) => response.json())
			.then((json) => console.log(json))
			.then(() => setValue({username: "", password:''}))

	}

	const handleChange = (event) => {
		setValue({...inputs, [event.target.name]: event.target.value})
	}

	return (
		<div className="login-wrapper">
			<form onSubmit = {handleSubmit}>
				<input type='text' name='username' placeholder='username' value={inputs.username} required onChange={handleChange}/>
				<input type='password' name='password' placeholder='password' value={inputs.password} required onChange={handleChange}/>
				<button>Log In</button>
			</form>

			<div >
				<h3> Not Registered Yet? </h3>
				<Link to="/register">Sign Up </Link>
			</div>

		</div>
		)
}

export default Login;