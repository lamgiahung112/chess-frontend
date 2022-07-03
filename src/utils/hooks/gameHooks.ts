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
	return (
		!board[position] || !board[position].startsWith(piece.startsWith("B") ? "B" : "W")
	)
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
			if (!board[currentPosition - 10]) viableMoves.push(currentPosition - 10)

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
			if (!board[currentPosition + 10]) viableMoves.push(currentPosition + 10)

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

	//#region rooks
	if (piece === PIECE.BR || piece === PIECE.WR) {
		// go left
		for (let i = currentPosition - 1; ; i--) {
			if (!isValid(i)) break
			if (!board[i] || notCollapseWithAlly(i, board, piece)) viableMoves.push(i)
			if (board[i]) break
		}
		// go right
		for (let i = currentPosition + 1; ; i++) {
			if (!isValid(i)) break
			if (!board[i] || notCollapseWithAlly(i, board, piece)) viableMoves.push(i)
			if (board[i]) break
		}

		// go down
		for (let i = currentPosition - 10; ; i -= 10) {
			if (!isValid(i)) break
			if (!board[i] || notCollapseWithAlly(i, board, piece)) viableMoves.push(i)
			if (board[i]) break
		}

		// go up
		for (let i = currentPosition + 10; ; i += 10) {
			if (!isValid(i)) break
			if (!board[i] || notCollapseWithAlly(i, board, piece)) viableMoves.push(i)
			if (board[i]) break
		}
	}
	//#endregion

	//#region Knights
	if (piece === PIECE.BKn || piece === PIECE.WKn) {
		console.log(piece)
		if (
			isValid(currentPosition + 20 - 1) &&
			notCollapseWithAlly(currentPosition + 20 - 1, board, piece)
		)
			viableMoves.push(currentPosition + 20 - 1)

		if (
			isValid(currentPosition + 20 + 1) &&
			notCollapseWithAlly(currentPosition + 20 + 1, board, piece)
		)
			viableMoves.push(currentPosition + 20 + 1)

		if (
			isValid(currentPosition - 20 - 1) &&
			notCollapseWithAlly(currentPosition - 20 - 1, board, piece)
		)
			viableMoves.push(currentPosition - 20 - 1)

		if (
			isValid(currentPosition - 20 + 1) &&
			notCollapseWithAlly(currentPosition - 20 + 1, board, piece)
		)
			viableMoves.push(currentPosition - 20 + 1)

		if (
			isValid(currentPosition + 10 - 2) &&
			notCollapseWithAlly(currentPosition + 10 - 2, board, piece)
		)
			viableMoves.push(currentPosition + 10 - 2)

		if (
			isValid(currentPosition + 10 + 2) &&
			notCollapseWithAlly(currentPosition + 10 + 2, board, piece)
		)
			viableMoves.push(currentPosition + 10 + 2)

		if (
			isValid(currentPosition - 10 - 2) &&
			notCollapseWithAlly(currentPosition - 10 - 2, board, piece)
		)
			viableMoves.push(currentPosition - 10 - 2)

		if (
			isValid(currentPosition - 10 + 2) &&
			notCollapseWithAlly(currentPosition - 10 + 2, board, piece)
		)
			viableMoves.push(currentPosition - 10 + 2)
	}

	//#endregion

	//#region Bishops
	if (piece === PIECE.BB || piece === PIECE.WB) {
		// Cheo' phai tren
		let nextPos = currentPosition + 11
		while (isValid(nextPos) && notCollapseWithAlly(nextPos, board, piece)) {
			viableMoves.push(nextPos)
			nextPos += 11
		}

		// cheo trai tren
		nextPos = currentPosition + 10 - 1
		while (isValid(nextPos) && notCollapseWithAlly(nextPos, board, piece)) {
			viableMoves.push(nextPos)
			nextPos += 10 - 1
		}

		// cheo phai duoi
		nextPos = currentPosition - 10 + 1
		while (isValid(nextPos) && notCollapseWithAlly(nextPos, board, piece)) {
			viableMoves.push(nextPos)
			nextPos += -10 + 1
		}

		// cheo trai duoi
		nextPos = currentPosition - 10 - 1
		while (isValid(nextPos) && notCollapseWithAlly(nextPos, board, piece)) {
			viableMoves.push(nextPos)
			nextPos += -10 - 1
		}
	}
	//#endregion

	//#region Queens
	if (piece === PIECE.BQ || piece === PIECE.WQ) {
		// Cheo' phai tren
		let nextPos = currentPosition + 11
		while (isValid(nextPos) && notCollapseWithAlly(nextPos, board, piece)) {
			viableMoves.push(nextPos)
			nextPos += 11
		}

		// cheo trai tren
		nextPos = currentPosition + 10 - 1
		while (isValid(nextPos) && notCollapseWithAlly(nextPos, board, piece)) {
			viableMoves.push(nextPos)
			nextPos += 10 - 1
		}

		// cheo phai duoi
		nextPos = currentPosition - 10 + 1
		while (isValid(nextPos) && notCollapseWithAlly(nextPos, board, piece)) {
			viableMoves.push(nextPos)
			nextPos += -10 + 1
		}

		// cheo trai duoi
		nextPos = currentPosition - 10 - 1
		while (isValid(nextPos) && notCollapseWithAlly(nextPos, board, piece)) {
			viableMoves.push(nextPos)
			nextPos += -10 - 1
		}

		// thang tren
		nextPos = currentPosition + 10
		while (isValid(nextPos) && notCollapseWithAlly(nextPos, board, piece)) {
			viableMoves.push(nextPos)
			nextPos += 10
		}

		// thang duoi
		nextPos = currentPosition - 10
		while (isValid(nextPos) && notCollapseWithAlly(nextPos, board, piece)) {
			viableMoves.push(nextPos)
			nextPos += -10
		}

		// ngang ben phai
		nextPos = currentPosition + 1
		while (isValid(nextPos) && notCollapseWithAlly(nextPos, board, piece)) {
			viableMoves.push(nextPos)
			nextPos += 1
		}

		// ngang ben trai
		nextPos = currentPosition - 1
		while (isValid(nextPos) && notCollapseWithAlly(nextPos, board, piece)) {
			viableMoves.push(nextPos)
			nextPos += -1
		}
	}
	//#endregion

	//#region King
	if (piece === PIECE.BK || piece === PIECE.WK) {
		let nextPos = currentPosition + 10
		if (isValid(nextPos) && notCollapseWithAlly(nextPos, board, piece)) {
			viableMoves.push(nextPos)
		}

		nextPos = currentPosition - 10
		if (isValid(nextPos) && notCollapseWithAlly(nextPos, board, piece)) {
			viableMoves.push(nextPos)
		}

		nextPos = currentPosition + 1
		if (isValid(nextPos) && notCollapseWithAlly(nextPos, board, piece)) {
			viableMoves.push(nextPos)
		}

		nextPos = currentPosition - 1
		if (isValid(nextPos) && notCollapseWithAlly(nextPos, board, piece)) {
			viableMoves.push(nextPos)
		}

		nextPos = currentPosition + 10 + 1
		if (isValid(nextPos) && notCollapseWithAlly(nextPos, board, piece)) {
			viableMoves.push(nextPos)
		}

		nextPos = currentPosition + 10 - 1
		if (isValid(nextPos) && notCollapseWithAlly(nextPos, board, piece)) {
			viableMoves.push(nextPos)
		}

		nextPos = currentPosition - 10 + 1
		if (isValid(nextPos) && notCollapseWithAlly(nextPos, board, piece)) {
			viableMoves.push(nextPos)
		}

		nextPos = currentPosition - 10 - 1
		if (isValid(nextPos) && notCollapseWithAlly(nextPos, board, piece)) {
			viableMoves.push(nextPos)
		}
	}
	//#endregion

	return viableMoves
}
