import { createRef } from "react"
import { useSocket } from "~/contexts/socket.context"
import { EVENTS } from "~/configs/Socket.config"
import Button from "../Button"

function Room() {
	const { socket, rooms, roomID } = useSocket()
	const newRoomRef = createRef<HTMLInputElement>()

	function handleCreateRoom() {
		const roomName = newRoomRef.current?.value || ""

		if (!roomName.trim()) return

		socket.emit(EVENTS.CLIENT.CREATE_ROOM, { roomName })
		if (newRoomRef.current?.value) newRoomRef.current.value = ""
	}

	return (
		<div className="room-container">
			<input placeholder="Room name" ref={newRoomRef} />
			<Button size="medium" onClick={handleCreateRoom}>
				Create a room
			</Button>

			<div className="room-list">
				{Object.keys(rooms).map((key) => (
					<div key={key}>{rooms[key].name}</div>
				))}
			</div>
		</div>
	)
}

export default Room
