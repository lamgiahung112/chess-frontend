import { createRef, useEffect } from "react"
import { useSocket } from "~/contexts/socket.context"
import { EVENTS } from "~/configs/Socket.config"
import Button from "../Button"
import { useTokenData } from "~/utils/hooks"
import { Navigate } from "react-router-dom"

function Room() {
	const { username } = useTokenData()!
	const { socket, rooms, roomID } = useSocket()
	const newRoomRef = createRef<HTMLInputElement>()

	useEffect(() => {
		socket.emit(EVENTS.CLIENT.REFRESH_ROOM)
	}, [])

	if (roomID) return <Navigate to={`/game/${roomID}`} />

	function handleCreateRoom() {
		const roomName = newRoomRef.current?.value || ""

		if (!roomName.trim()) return

		socket.emit(EVENTS.CLIENT.CREATE_ROOM, { roomName })
		if (newRoomRef.current?.value) newRoomRef.current.value = ""
	}

	function handleJoinRoom(_roomID: string) {
		socket.emit(EVENTS.CLIENT.JOIN_ROOM, { _roomID, username })
	}

	return (
		<div className="room-container">
			<input placeholder="Room name" ref={newRoomRef} />
			<Button onClick={handleCreateRoom}>Create a room</Button>

			<div className="room-list">
				{Object.keys(rooms).map((key) => (
					<div key={key} onClick={() => handleJoinRoom(key)}>
						{rooms[key].name}
					</div>
				))}
			</div>
		</div>
	)
}

export default Room
