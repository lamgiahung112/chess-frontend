import { Navigate, useParams } from "react-router-dom"
import { NavigationBar } from "~/components"
import GameContainer from "~/components/GameContainer"

function GamePage() {
	const { _roomID } = useParams()

	if (!_roomID) return <Navigate to="/dashboard" />

	return (
		<>
			<NavigationBar />
			<div className="main">
				<GameContainer _roomID={_roomID} />
			</div>
		</>
	)
}

export default GamePage
