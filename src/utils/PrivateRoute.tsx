import { useTokenData } from "~/utils/hooks"
import { Navigate } from "react-router-dom"
import { PropsWithChildren } from "react"

function PrivateRoute(props: PropsWithChildren) {
	const isValid = useTokenData()

	if (!isValid) return <Navigate to="/" />

	return <>{props.children}</>
}

export default PrivateRoute
