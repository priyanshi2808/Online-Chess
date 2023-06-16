import axios from "axios";
import config from "../config";

const signupAPI = async (data) => {
	const { name, email, password } = data;
	return await axios
		.post(config.baseUrl + config.signup, {
			name: name,
			email: email,
			password: password,
		})
		.then((res) => {
			console.log("Signup", res.data);
			return res.data;
		})
		.catch((err) => {
			return { success: false, message: err.message };
		});
};

export default signupAPI;
