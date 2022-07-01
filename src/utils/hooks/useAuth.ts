import decode_jwt from "jwt-decode"
import { useNavigate } from "react-router-dom"
import { useMutation } from "react-query"
import { HttpRequest } from "~/utils/axios-utils"
import { IHttpResponse } from "~/utils/interfaces"

//#region Interfaces
interface ITokenData {
	username: string
	iat: number
	exp: number
}

interface ILoginData {
	username: string
	password: string
}

export type { ITokenData, ILoginData }

//#endregion

//#region Util functions
const login = (data: ILoginData) => {
	return HttpRequest({
		method: "post",
		url: "/api/users/access",
		data,
	})
}
//#endregion

//#region Hooks
export const useTokenData = (): ITokenData | undefined => {
	const token = localStorage.getItem("chess-app-token")
	try {
		const decoded: ITokenData = decode_jwt(token!)
		if (!token || Date.now() >= decoded.exp * 1000)
			throw Error("Invalid credentials")
		return decoded
	} catch {
		return undefined
	}
}

export const useLogin = () => {
	return useMutation(login, {
		onSuccess: (data: IHttpResponse) => {
			localStorage.setItem("chess-app-token", data?.payload?.accessToken)
		},
	})
}
//#endregion
