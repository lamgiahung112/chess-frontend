import { useSocket } from "~/contexts/socket.context"
import { useTokenData } from "~/utils/hooks"

function GameContainer() {
	const { socket, roomID, gameData } = useSocket()
	const { username } = useTokenData()!

	return
}

export default GameContainer
