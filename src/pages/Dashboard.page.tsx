import { NavigationBar } from "~/components"
import Room from "~/components/Room"
import { useSocket } from "~/contexts/socket.context"

function Dashboard() {
	const { roomID } = useSocket()
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
