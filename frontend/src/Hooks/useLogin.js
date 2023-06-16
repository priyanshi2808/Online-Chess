import { useState } from "react";
import { toast } from "react-hot-toast";
import loginAPI from "../api/loginAPI";

export const useLogin = () => {
	const [errors, setErrors] = useState("");
	const login = async (email, password) => {
		setErrors(null);
		await loginAPI({ email, password })
			.then((response) => {
				if (response.success) {
					toast.success(response.message);
				} else {
					setErrors(response.message);
					toast.error(response.message);
				}
			})
			.catch((error) => {
				setErrors(error.message);
				toast.error(error.message);
			});
	};
	console.log("errors", errors);
	return { login, errors };
};
