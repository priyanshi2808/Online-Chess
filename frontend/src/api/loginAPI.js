import axios from "axios";
import config from "../config";

const loginAPI = async (data) => {
	const { email, password } = data;
	return await axios
		.post(config.baseUrl + config.login, {
			email: email,
			password: password,
		})
		.then((res) => {
			console.log("loginAPI", res.data);
			return res.data;
		})
		.catch((err) => {
			return { success: false, message: err.message };
		});
};

export default loginAPI;
