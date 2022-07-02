import { NavigationBar } from "~/components"
import GameContainer from "~/components/GameContainer"
import Room from "~/components/Room"

function Dashboard() {
	return (
		<>
			<NavigationBar />
			<div className="main">
				<GameContainer />
			</div>
		</>
	)
}

export default Dashboard
