import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons"

import "./LoginBox.scss"
import Button from "../Button"
import { FormEvent, useState } from "react"
import { useLogin } from "~/utils/hooks"
import { IHttpResponse } from "~/utils/interfaces"

function LoginBox() {
	const navigate = useNavigate()
	const { mutateAsync: login } = useLogin()
	const [input, setInput] = useState({
		username: "",
		password: "",
	})

	const onInputChange = (e: FormEvent<HTMLInputElement>) => {
		setInput({
			...input,
			[e.currentTarget.name]: e.currentTarget.value,
		})
	}

	const onLoginButtonClick = async () => {
		const data: IHttpResponse = await login(input)
		if (!data.errors) navigate("/dashboard")
	}

	return (
		<div className="login-container">
			<div className="login-header">
				<Link to="/" className="sprite chess-sprite"></Link>
			</div>
			<div className="login-modal">
				<div className="login-input-container">
					<FontAwesomeIcon icon={faUser} className="login-input-icon" />
					<input
						className="login-input"
						placeholder="Username"
						name="username"
						value={input.username}
						onChange={onInputChange}
					/>
				</div>
				<div className="login-input-container">
					<FontAwesomeIcon icon={faLock} className="login-input-icon" />
					<input
						className="login-input"
						placeholder="Password"
						name="password"
						type="password"
						value={input.password}
						onChange={onInputChange}
					/>
				</div>

				<div className="login-utils">
					<div style={{ display: "flex" }}>
						<input
							type="checkbox"
							id="remmeber-password-cb"
							className="pointer"
						/>
						<label
							htmlFor="remmeber-password-cb"
							className="checkbox-label pointer"
						>
							Remember me
						</label>
					</div>
					<div>
						<Link to="/">Forgot password?</Link>
					</div>
				</div>
				<Button
					primary
					size="large"
					className="login-button"
					onClick={onLoginButtonClick}
				>
					Log in
				</Button>
			</div>
			<div className="login-link">
				<span>New?</span>
				<Link to="/signup">Signup - and start playing!</Link>
			</div>
		</div>
	)
}

export default LoginBox
