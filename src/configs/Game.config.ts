import { type } from "os"

enum PIECE {
	// Pawns
	P1,
	P2,
	P3,
	P4,
	P5,
	P6,
	P7,
	P8,
	// Rooks
	R1,
	R2,
	// Knights
	K1,
	K2,
	// Bishops
	B1,
	B2,
	// Queen
	Q,
	// King
	K,
}

interface IMove {
	piece: PIECE
	turn: "WHITE" | "BLACK"
	from: {
		x: string
		y: number
	}
	to: {
		x: string
		y: number
	}
}

interface IGameData {
	board: Record<
		string,
		Array<{
			piece: PIECE | ""
			side?: "WHITE" | "BLACK"
		}>
	>
	moves: IMove[]
	turn: "WHITE" | "BLACK"
}

const gameInitialState: IGameData = {
	board: {
		// A1 -> A8
		a: [
			{ piece: PIECE.R1, side: "WHITE" },
			{ piece: PIECE.P1, side: "WHITE" },
			{ piece: "" },
			{ piece: "" },
			{ piece: "" },
			{ piece: "" },
			{ piece: PIECE.P1, side: "BLACK" },
			{ piece: PIECE.R1, side: "BLACK" },
		],
		// B1 -> B8
		b: [
			{ piece: PIECE.K1, side: "WHITE" },
			{ piece: PIECE.P2, side: "WHITE" },
			{ piece: "" },
			{ piece: "" },
			{ piece: "" },
			{ piece: "" },
			{ piece: PIECE.P2, side: "BLACK" },
			{ piece: PIECE.K1, side: "BLACK" },
		],
		// C1 -> C8
		c: [
			{ piece: PIECE.B1, side: "WHITE" },
			{ piece: PIECE.P3, side: "WHITE" },
			{ piece: "" },
			{ piece: "" },
			{ piece: "" },
			{ piece: "" },
			{ piece: PIECE.P3, side: "BLACK" },
			{ piece: PIECE.B1, side: "BLACK" },
		],
		// D1 -> D8
		d: [
			{ piece: PIECE.Q, side: "WHITE" },
			{ piece: PIECE.P4, side: "WHITE" },
			{ piece: "" },
			{ piece: "" },
			{ piece: "" },
			{ piece: "" },
			{ piece: PIECE.P4, side: "BLACK" },
			{ piece: PIECE.Q, side: "BLACK" },
		],
		// E1 -> E8
		e: [
			{ piece: PIECE.K, side: "WHITE" },
			{ piece: PIECE.P5, side: "WHITE" },
			{ piece: "" },
			{ piece: "" },
			{ piece: "" },
			{ piece: "" },
			{ piece: PIECE.P5, side: "BLACK" },
			{ piece: PIECE.K, side: "BLACK" },
		],
		// F1 -> F8
		f: [
			{ piece: PIECE.B2, side: "WHITE" },
			{ piece: PIECE.P6, side: "WHITE" },
			{ piece: "" },
			{ piece: "" },
			{ piece: "" },
			{ piece: "" },
			{ piece: PIECE.P6, side: "BLACK" },
			{ piece: PIECE.B2, side: "BLACK" },
		],
		// G1 -> G8
		g: [
			{ piece: PIECE.K2, side: "WHITE" },
			{ piece: PIECE.P7, side: "WHITE" },
			{ piece: "" },
			{ piece: "" },
			{ piece: "" },
			{ piece: "" },
			{ piece: PIECE.P7, side: "BLACK" },
			{ piece: PIECE.K2, side: "BLACK" },
		],
		// H1 -> H8
		h: [
			{ piece: PIECE.R2, side: "WHITE" },
			{ piece: PIECE.P8, side: "WHITE" },
			{ piece: "" },
			{ piece: "" },
			{ piece: "" },
			{ piece: "" },
			{ piece: PIECE.P8, side: "BLACK" },
			{ piece: PIECE.R2, side: "BLACK" },
		],
	},
	moves: [],
	turn: "WHITE",
}

export type { IGameData, IMove, PIECE }
export { gameInitialState }
