import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {login} from '../redux/loginActions.js';

import styles from './Login.module.css'

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
	const imgUrl = "https://images.unsplash.com/photo-1606758018956-8556510f2ae3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80"
	return (
		<div className={styles.pageWrapper}>
			<img className={styles.img} src={imgUrl} alt="mountains"/>
			<div className={styles.loginWrapper}>
				<form className={styles.form} onSubmit = {handleSubmit}>
					<h2> Photo Fave </h2>
					<input type='text' name='username' placeholder='username' value={inputs.username} required onChange={handleChange}/>
					<input type='password' name='password' placeholder='password' value={inputs.password} required onChange={handleChange}/>
					<button>Log In</button>
				</form>

				<div className={styles.goToRegister}>
					<h3> Not Registered Yet? </h3>
					<Link to="/register">Sign Up </Link>
				</div>

			</div>
		</div>
		)
}

export default Login;