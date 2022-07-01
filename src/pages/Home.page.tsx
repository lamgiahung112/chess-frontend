import { Navigate } from "react-router-dom"
import { useTokenData } from "~/utils/hooks"
import { NavigationBar, LoginBox } from "../components"

function Home() {
	const isSignedIn = useTokenData()

	if (isSignedIn) return <Navigate to="/dashboard" />

	return (
		<>
			<NavigationBar />
			<LoginBox />
		</>
	)
}

export default Home
