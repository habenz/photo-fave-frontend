import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {login} from '../redux/loginActions.js';

const Login = () => {

	const dispatch = useDispatch();
	const history = useHistory();

	// ok to use compent state for form input, src: redux docs
	const [inputs, setValue] = useState({
		username: '',
		password: ''
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("submit", inputs.username, inputs.password);

		dispatch(login(inputs, history));
		// If password is wrong page won't redirect
		setValue({...inputs, password:''});
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