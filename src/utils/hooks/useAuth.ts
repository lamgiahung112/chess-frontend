import decode_jwt from "jwt-decode"

interface TokenData {
	username: string
	iat: number
	exp: number
}

interface AuthData {
	payload: TokenData | null
	isError: boolean
}

const useAuth = (): AuthData => {
	const token = localStorage.getItem("token")!
	const data: AuthData = {
		payload: null,
		isError: false,
	}

	try {
		const decoded: TokenData = decode_jwt(token)
		data.payload = decoded
		if (!token || Date.now() >= decoded.exp * 1000)
			throw Error("Invalid credentials")
	} catch {
		data.payload = null
		data.isError = true
	}

	return data
}

export default useAuth
