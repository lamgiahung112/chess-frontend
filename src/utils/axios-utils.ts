import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import { IApiError, IHttpResponse } from "./interfaces"

const client = axios.create({ baseURL: "http://localhost:3001" })

const token = localStorage.getItem("chess-app-access-token")

export const HttpRequest = (options: AxiosRequestConfig) => {
	client.defaults.headers.common["Authorization"] = `Bearer ${token}`
	const onSuccess = (response: AxiosResponse) => response.data
	const onError = (error: AxiosError<IHttpResponse>) => {
		// TODO: handle error
		throw new Error(error.response?.data.errors?.message)
	}

	return client(options).then(onSuccess).catch(onError)
}
