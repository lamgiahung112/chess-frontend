import { Navigate } from "react-router-dom"
import { useTokenData } from "~/utils/hooks"
import { NavigationBar, LoginBox, SignupBox } from "../components"

interface IProps {
	isSignUpPage?: boolean
	isLoginPage?: boolean
}

function Home(props: IProps) {
	const isSignedIn = useTokenData()

	if (isSignedIn) return <Navigate to="/dashboard" />

	return (
		<>
			<NavigationBar />
			{!props.isSignUpPage && <LoginBox />}
			{props.isSignUpPage && <SignupBox />}
		</>
	)
}

export default Home
