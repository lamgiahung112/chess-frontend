import { NavigationBar } from "~/components"
import Room from "~/components/Room"

function Dashboard() {
	return (
		<>
			<NavigationBar />
			<div className="main">
				<Room />
			</div>
		</>
	)
}

export default Dashboard
