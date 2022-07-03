import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.scss"
import PrivateRoute from "./utils/PrivateRoute"

import { Home, Dashboard } from "./pages"

function App() {
	return (
		<div className="app-container">
			<Router>
				<Routes>
					<Route path="/login" element={<Home isLoginPage />} />
					<Route path="/signup" element={<Home isSignUpPage />} />
					<Route
						path="/dashboard"
						element={
							<PrivateRoute>
								<Dashboard />
							</PrivateRoute>
						}
					/>
				</Routes>
			</Router>
		</div>
	)
}

export default App
