import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"

const client = axios.create({ baseURL: "http://localhost:3001" })

const token = localStorage.getItem("chess-app-access-token")

export const HttpRequest = (options: AxiosRequestConfig) => {
	client.defaults.headers.common["Authorization"] = `Bearer ${token}`
	const onSuccess = (response: AxiosResponse) => response.data
	const onError = (error: AxiosError) => {
		// TODO: handle error
		console.log(error)
		return error
	}

	return client(options).then(onSuccess).catch(onError)
}
