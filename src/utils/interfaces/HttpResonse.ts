import IApiError from "./APIError"

interface IHttpResponse {
	payload?: any
	errors?: IApiError
}

export default IHttpResponse
