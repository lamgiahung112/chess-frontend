import ReactDOM from "react-dom/client"
import App from "./App"
import SocketProvider from "./contexts/socket.context"
import { QueryClientProvider, QueryClient } from "react-query"

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
	<QueryClientProvider client={client}>
		<SocketProvider>
			<App />
		</SocketProvider>
	</QueryClientProvider>
)
