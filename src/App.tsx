import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.scss"
import { Home } from "./pages"

function App() {
	return (
		<div className="app-container">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
