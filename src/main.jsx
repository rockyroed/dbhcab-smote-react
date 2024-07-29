import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ToxicComment from "./pages/ToxicComment"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />
	},
	{
		path: "/toxic-comment",
		element: <ToxicComment />
	}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
