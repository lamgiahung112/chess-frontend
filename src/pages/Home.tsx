import { useNavigate } from "react-router-dom"
import { useTokenData } from "~/utils/hooks"
import { NavigationBar, LoginBox } from "../components/"

function Home() {
	const isSignedIn = useTokenData()
	const navigate = useNavigate()

	if (isSignedIn) navigate("/dashboard")

	return (
		<>
			<NavigationBar />
			<LoginBox />
		</>
	)
}

export default Home
