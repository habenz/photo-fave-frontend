import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Register.module.css'

import {register, test} from '../redux/loginActions.js';

const API_URL_BASE = 'http://localhost:5000'

const Register = () => {

	const dispatch = useDispatch();
	const loginStatus = useSelector(state => state.login.isLoggedIn);
	const history = useHistory();


	const [inputs, setValue] = useState({
		username: '',
		password: ''
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("submit", inputs.username, inputs.password);
		dispatch(register(inputs))
		// setValue({username: "", password:''})
		history.push('/');
	}

	const handleChange = (event) => {
		setValue({...inputs, [event.target.name]: event.target.value})
	}

	return (
		<div id="reg" className={styles.pageWrapper}>
			<form className={styles.form} onSubmit = {handleSubmit}>
				<h1 className={styles.head}> Photo Fave </h1>
				<input type='text' name='username' 
					placeholder='username' value={inputs.username} 
					required onChange={handleChange}
					className={styles.input}/>
				<input type='password' name='password'
					placeholder='password' value={inputs.password} 
					required onChange={handleChange}
					className={styles.input}/>
				<button className={styles.submit} onSubmit = {handleSubmit}>Sign Up!</button>
			</form>

		</div>
		)
}

export default Register;