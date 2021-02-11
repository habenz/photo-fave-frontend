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

	const validateNewUserInfo = ({username,password}) => {
		if (username.length < 3){
			return [false, 'Username must be at least 3 characters'];
		} else if (password.length < 7){
			return [false, 'Password must be at least 7 characters'];
		} 
		return [true, 'no issue'];
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		const [isValid, issueStatement] = validateNewUserInfo(inputs);
		if (isValid){
			dispatch(register(inputs, history));
		} else {
			alert(issueStatement);
			setValue({
				username: '',
				password: ''
			});
		}
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