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

interface ISignupData {
	username: string
	email: string
	password: string
}

export type { ITokenData, ILoginData, ISignupData }

//#endregion

//#region Util functions
const login = (data: ILoginData) => {
	return HttpRequest({
		method: "post",
		url: "/api/users/access",
		data,
	})
}

const signup = (data: ISignupData) => {
	return HttpRequest({
		method: "post",
		url: "/api/users",
		data,
	})
}
//#endregion

//#region Hooks
export const useTokenData = (): ITokenData | undefined => {
	const token = localStorage.getItem("chess-app-token")
	try {
		const decoded: ITokenData = decode_jwt(token!)
		if (!token || Date.now() >= decoded.exp * 1000) throw Error("Invalid credentials")
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

export const useSignup = () => {
	return useMutation(signup)
}
//#endregion
