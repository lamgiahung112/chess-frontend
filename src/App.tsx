import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.scss"
import PrivateRoute from "./utils/PrivateRoute"

import { Home, Dashboard } from "./pages"
import GamePage from "./pages/Game.page"

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
					<Route
						path="/game/:_roomID"
						element={
							<PrivateRoute>
								<GamePage />
							</PrivateRoute>
						}
					/>
				</Routes>
			</Router>
		</div>
	)
}

export default App
