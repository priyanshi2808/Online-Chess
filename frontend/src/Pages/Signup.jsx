import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import signupAPI from "../api/signupAPI";
import "./signup.css";

function Signup() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
		const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (regExp.test(email)) {
			if (password.length >= 8) {
				await signupAPI({ name, email, password })
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
				SIGNUP
			</p>
			<form className="form1" onSubmit={handleSubmit}>
				<input
					className="un "
					type="text"
					align="center"
					placeholder="Name"
					name="name"
					required={"true"}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
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
					Signup
				</button>

				<br></br>
				<p fontFamily="sans-serif" align="center">
					Already have an account
				</p>
				<Link to="/login" className="login" align="center">
					Login here
				</Link>
			</form>
		</div>
	);
}

export default Signup;
