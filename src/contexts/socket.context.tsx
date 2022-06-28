import { createContext, PropsWithChildren, useContext } from "react"
import io from "socket.io-client"
import { SOCKET_URL } from "../configs/default"

const socket = io(SOCKET_URL)

const SocketContext = createContext({ socket })

const SocketProvider = ({ children }: PropsWithChildren<{}>) => {
	return (
		<SocketContext.Provider value={{ socket }}>
			{children}
		</SocketContext.Provider>
	)
}

export const useSocket = () => useContext(SocketContext)

export default SocketProvider
