import { useState } from "react";
import { toast } from "react-hot-toast";
import loginAPI from "../api/loginAPI";

export const useLogin = () => {
	const [error, setError] = useState(null);
	const login = async (email, password) => {
		setError(null);
		await loginAPI({ email, password }).then((response) => {
			return response.data;
			// if (response.success) {
			// 	toast.success(response.message);
			// 	return response.data;
			// } else {
			// 	setError(response.message);
			// 	toast.error(response.message);
			// 	return response.data;
			// }
			// console.log("uselogin", response.message);
		});
	};
	console.log("hookError", error);
	return { login, error };
};
