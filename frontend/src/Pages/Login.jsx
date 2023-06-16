import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import validators from "../components/validators";
import { useLogin } from "../Hooks/useLogin";
import { toast } from "react-hot-toast";
import loginAPI from "../api/loginAPI";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	// const { login, errors } = useLogin();
	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
		setError(validators(email, password));
		if (error.length === 0) {
			await loginAPI({ email, password })
				.then((response) => {
					if (response.success) {
						toast.success(response.message);
						navigate("/arena");
					} else {
						toast.error(response.message);
					}
				})
				.catch((error) => {
					toast.error(error.message);
				});
		}
	}

	return (
		<div className="main">
			<p className="sign" align="center">
				LOGIN
			</p>
			<form className="form1" onSubmit={handleSubmit}>
				<input
					className="un "
					type="text"
					align="center"
					placeholder="Email"
					name="email"
					required={"true"}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className="pass"
					type="password"
					align="center"
					placeholder="Password"
					name="password"
					required={"true"}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className="submit" align="center" type="submit">
					Login
				</button>
				{error && (
					<div className="text-white lg:text-black w-full text-center pt-[10px]">
						{error}
					</div>
				)}
				<br></br>
				<p fontFamily="sans-serif" align="center">
					Don't have an account yet!
				</p>
				<Link to="/signup" className="signup" align="center">
					Create new Account
				</Link>
			</form>
		</div>
	);
}

export default Login;
