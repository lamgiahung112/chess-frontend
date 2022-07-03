import { createContext, PropsWithChildren, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import io, { Socket } from "socket.io-client"
import { IGameData, gameInitialState } from "~/configs/Game.config"
import { EVENTS } from "~/configs/Socket.config"
import { useTokenData } from "~/utils/hooks"
import { SOCKET_URL } from "../configs/default"

const socket = io(SOCKET_URL)

interface Context {
	socket: Socket
	roomID?: string
	rooms: Record<string, { name: string; participants: number }>
	gameData?: IGameData
	setGameData?: Function
}

const SocketContext = createContext<Context>({ socket, rooms: {} })

const SocketProvider = ({ children }: PropsWithChildren) => {
	const [roomID, setRoomID] = useState("")
	const [rooms, setRooms] = useState({})
	const [gameData, setGameData] = useState<IGameData>(gameInitialState)

	socket.on(EVENTS.SERVER.ROOMS, (value) => {
		setRooms(value)
	})

	socket.on(EVENTS.SERVER.JOINED_ROOM, (value) => {
		setRoomID(value)
		setGameData(gameInitialState)
	})

	socket.on(EVENTS.SERVER.PLAYER_JOIN_CLIENT_ROOM, ({ username }) => {
		console.log(`${username} joined`)
	})

	return (
		<SocketContext.Provider value={{ socket, rooms, roomID, gameData, setGameData }}>
			{children}
		</SocketContext.Provider>
	)
}

export const useSocket = () => useContext(SocketContext)

export default SocketProvider
