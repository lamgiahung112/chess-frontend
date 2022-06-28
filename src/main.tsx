import ReactDOM from "react-dom/client"
import App from "./App"
import SocketProvider from "./contexts/socket.context"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<SocketProvider>
		<App />
	</SocketProvider>
)
