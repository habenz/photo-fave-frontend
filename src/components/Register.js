import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import {register, test} from '../redux/loginActions.js';

const API_URL_BASE = 'http://localhost:5000'

const Register = () => {

	const dispatch = useDispatch();
	const loginStatus = useSelector(state => state.login.isLoggedIn);

	const [inputs, setValue] = useState({
		username: '',
		password: ''
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("submit", inputs.username, inputs.password);
		dispatch(register(inputs));
		console.log('login state', loginStatus)
		setValue({username: "", password:''})
	}

	const handleChange = (event) => {
		setValue({...inputs, [event.target.name]: event.target.value})
	}

	return (
		<div id="reg" >
			<form onSubmit = {handleSubmit}>
				<input type='text' name='username' placeholder='username' value={inputs.username} required onChange={handleChange}/>
				<input type='password' name='password' placeholder='password' value={inputs.password} required onChange={handleChange}/>
				<button onSubmit = {handleSubmit}>Sign Up!</button>
			</form>

		</div>
		)
}

export default Register;