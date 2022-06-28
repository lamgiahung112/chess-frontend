import decode_jwt from "jwt-decode"
import { HttpRequest } from "~/utils/axios-utils"
import { useMutation, useQueryClient } from "react-query"
import { AxiosError, AxiosResponse } from "axios"
import { IHttpResponse, IApiError } from "~/utils/interfaces"

/******** Interfaces ********/

interface ITokenData {
	username: string
	iat: number
	exp: number
}

interface ILoginData {
	username: string
	password: string
}

/******** Util functions ********/

const login = (data: ILoginData) => {
	return HttpRequest({
		method: "post",
		url: "/api/users/access",
		data,
	})
}

/******** HOOKS ********/

export const useTokenData = (): ITokenData | null => {
	const token = localStorage.getItem("chess-app-token")!

	try {
		const decoded: ITokenData = decode_jwt(token)
		if (!token || Date.now() >= decoded.exp * 1000)
			throw Error("Invalid credentials")
		return decoded
	} catch {
		return null
	}
}

export const useLogin = () => {
	return useMutation(login, {
		onSuccess: (data: IHttpResponse) => {
			localStorage.setItem("chess-app-token", data.payload.accessToken)
		},
	})
}
