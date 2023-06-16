import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import loginAPI from "../api/loginAPI";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
		const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (regExp.test(email)) {
			if (password.length >= 8) {
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
			} else {
				toast.error("Password mush be atleast 8 character long");
			}
		} else {
			toast.error("Enter Vaild Email!");
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
