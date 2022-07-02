import { useEffect, useState } from "react"
import { useSocket } from "~/contexts/socket.context"
import { useGetViableMoves, useTokenData } from "~/utils/hooks"
import Coordinates from "./Coordinates"
import "./GameContainer.scss"

function GameContainer() {
	const { socket, roomID, gameData, setGameData } = useSocket()
	const { username } = useTokenData()!

	const [currentPiece, setCurrentPiece] = useState(0)
	const [viableMoves, setViableMoves] = useState<number[]>([])

	useEffect(() => {
		const positions = useGetViableMoves(
			gameData!.board,
			currentPiece,
			gameData!.board[currentPiece]
		)
		setViableMoves(positions)
	}, [currentPiece])

	const handleMove = (position: number) => {
		setGameData!({
			...gameData,
			board: {
				...gameData?.board,
				[currentPiece]: undefined,
				[position]: gameData?.board[currentPiece],
			},
		})
		setCurrentPiece(0)
	}

	return (
		<div className="board-container">
			<div className="board">
				<Coordinates onClick={() => setCurrentPiece(0)} />

				{currentPiece && (
					<div
						className={`piece square-${currentPiece} highlight`}
					></div>
				)}

				{Object.keys(gameData?.board!).map((key) => (
					<div
						key={key}
						className={`piece ${
							gameData?.board[Number(key)]
						} square-${key}`}
						onClick={() => setCurrentPiece(Number(key))}
					></div>
				))}

				{viableMoves.map((position) => (
					<div
						key={position}
						className={`square-${position} hint`}
						onClick={() => handleMove(position)}
					>
						<div className="hint-circle"></div>
					</div>
				))}
			</div>
		</div>
	)
}

export default GameContainer
