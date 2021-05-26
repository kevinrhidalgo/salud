import React, { useRef } from 'react'
import Card from "../Card"

const styles = {
	card: {
	  margin: 200,
	  color:"#445626"
	}
};
// class RegisterForm extends React.Component {
function RegisterForm({ onRegister }) {
	// refs
	const formRef = useRef();
	const userNameRef = useRef();
	const passwordRef = useRef();

	return (
		<div style={styles.card}>
		<Card title="Register a New User">
			<form
				ref={formRef}
				onSubmit={(e) => {
					e.preventDefault();
					return onRegister({
						username: userNameRef.current.value,
						password: passwordRef.current.value
					});
				}}
			>
				<div className="form-group">
					<input className="form-control btn-dark" ref={userNameRef} type='text' name="username" placeholder='Enter Username' /><br />
					<input className="form-control btn-dark" ref={passwordRef} type='password' name="password" placeholder='Password' /><br />
					<button className="btn btn btn-primary" type='submit'>Submit</button>
				</div>
			</form>
		</Card>
		</div>
	)
}


export default RegisterForm