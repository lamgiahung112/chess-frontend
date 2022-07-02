import { PIECE } from "~/configs/Game.config"

const isValid = (position: number): boolean => {
	return (
		Math.floor(position / 10) >= 1 &&
		Math.floor(position / 10) <= 8 &&
		position % 10 >= 1 &&
		position % 10 <= 8
	)
}

const notCollapseWithAlly = (
	position: number,
	board: {
		[num: number]: string
	},
	piece: string
): boolean => {
	return !board[position].startsWith(piece.startsWith("B") ? "B" : "W")
}

export const useGetViableMoves = (
	board: {
		[num: number]: string
	},
	currentPosition: number,
	piece: string
): number[] => {
	if (currentPosition === 0) return []

	const viableMoves: number[] = []

	//#region Black pawns
	if (piece === PIECE.BP) {
		if (isValid(currentPosition - 10)) {
			// forward 1 step
			if (!board[currentPosition - 10])
				viableMoves.push(currentPosition - 10)

			//forward 2 step
			if (
				isValid(currentPosition - 20) &&
				!board[currentPosition - 20] &&
				Math.floor(currentPosition / 10) === 7
			)
				viableMoves.push(currentPosition - 20)

			// attack left enemy
			if (
				isValid(currentPosition - 11) &&
				board[currentPosition - 11] &&
				!board[currentPosition - 11].startsWith("B")
			)
				viableMoves.push(currentPosition - 11)
			// attack right enemy
			if (
				isValid(currentPosition - 9) &&
				board[currentPosition - 9] &&
				!board[currentPosition - 9].startsWith("B")
			)
				viableMoves.push(currentPosition - 9)
		}
	}

	//#endregion

	//#region White pawns
	if (piece === PIECE.WP) {
		if (isValid(currentPosition + 10)) {
			// forward 1 step
			if (!board[currentPosition + 10])
				viableMoves.push(currentPosition + 10)

			//forward 2 step
			if (
				isValid(currentPosition + 20) &&
				!board[currentPosition + 20] &&
				Math.floor(currentPosition / 10) === 2
			)
				viableMoves.push(currentPosition + 20)

			// attack left enemy
			if (
				isValid(currentPosition + 11) &&
				board[currentPosition + 11] &&
				!board[currentPosition + 11].startsWith("W")
			)
				viableMoves.push(currentPosition + 11)
			// attack right enemy
			if (
				isValid(currentPosition + 9) &&
				board[currentPosition + 9] &&
				!board[currentPosition + 9].startsWith("W")
			)
				viableMoves.push(currentPosition + 9)
		}
	}
	//#endregion

	//#region Black rooks
	if (piece === PIECE.BR || piece === PIECE.WR) {
		// go left
		for (let i = currentPosition - 1; ; i--) {
			if (!isValid(i)) break
			if (!board[i] || notCollapseWithAlly(i, board, piece))
				viableMoves.push(i)
			if (board[i]) break
		}
		// go right
		for (let i = currentPosition + 1; ; i++) {
			if (!isValid(i)) break
			if (!board[i] || notCollapseWithAlly(i, board, piece))
				viableMoves.push(i)
			if (board[i]) break
		}

		// go down
		for (let i = currentPosition - 10; ; i -= 10) {
			if (!isValid(i)) break
			if (!board[i] || notCollapseWithAlly(i, board, piece))
				viableMoves.push(i)
			if (board[i]) break
		}

		// go up
		for (let i = currentPosition + 10; ; i += 10) {
			if (!isValid(i)) break
			if (!board[i] || notCollapseWithAlly(i, board, piece))
				viableMoves.push(i)
			if (board[i]) break
		}
	}
	//#endregion
	return viableMoves
}
