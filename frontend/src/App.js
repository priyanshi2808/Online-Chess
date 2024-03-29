import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Arena from "./Pages/Arena";

function App() {
	return (
		<BrowserRouter>
			<Toaster position="top-right" reverseOrder={false} />
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/arena" element={<Arena />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
