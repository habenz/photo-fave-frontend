import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './Register.module.css'

import {register} from '../redux/loginActions.js';

const Register = () => {

	const dispatch = useDispatch();
	const history = useHistory();


	const [inputs, setValue] = useState({
		username: '',
		password: ''
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("submit", inputs.username, inputs.password);
		dispatch(register(inputs, history));
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