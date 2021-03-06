import React, { useRef } from 'react'
import Card from "../Card"

const styles = {
	card: {
		width:"400px",
		color:"#445626",
		boxShadow: "10px 10px 5px grey",
		position: "relative",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, 20%)"
	}
};	


function LoginForm({ onLogin }) {

	const formRef = useRef();
	const userNameRef = useRef();
	const passwordRef = useRef();

	return (
		<div style={styles.card}>
		<Card title="Login with Username and Password">
			<form
				ref={formRef}
				onSubmit={(e) => {
					e.preventDefault();
					return onLogin({
						username: userNameRef.current.value,
						password: passwordRef.current.value
					});
				}}
			>
				<div className="form-group">
					<input className="form-control btn-basic"  ref={userNameRef} type='text' name="username" placeholder='Enter Username' /><br />
					<input className="form-control btn-basic" ref={passwordRef} type='password' name="password" placeholder='Password' /><br />
					<button className="btn btn-success" type='submit'>
						Submit
						</button>
				</div>
			</form>
		</Card>
		</div>
	)
}


export default LoginForm