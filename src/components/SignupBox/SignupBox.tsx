import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons"

import "./SignupBox.scss"
import Button from "../Button"
import { FormEvent, useState } from "react"
import { useSignup } from "~/utils/hooks"

function SignupBox() {
	const navigate = useNavigate()
	const { mutateAsync: signup } = useSignup()

	const [input, setInput] = useState({
		username: "",
		password: "",
		email: "",
	})

	const onInputChange = (e: FormEvent<HTMLInputElement>) => {
		setInput({
			...input,
			[e.currentTarget.name]: e.currentTarget.value,
		})
	}

	const onSignupButtonClick = async () => {
		await signup(input)
		navigate("/login")
	}

	return (
		<div className="login-container">
			<div className="login-header">
				<Link to="/" className="sprite chess-sprite"></Link>
			</div>
			<div className="login-modal">
				<div className="login-banner">
					<h1>JOIN NOW</h1>
					<h4>and Start Playing Chess!</h4>
				</div>
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
					<FontAwesomeIcon icon={faEnvelope} className="login-input-icon" />
					<input
						className="login-input"
						placeholder="Email"
						name="email"
						type="email"
						value={input.email}
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
				<Button
					primary
					size="medium"
					className="login-button"
					disabled={!(input.email && input.password && input.username)}
					onClick={onSignupButtonClick}
				>
					Sign up
				</Button>
			</div>
			<div className="login-link">
				<span>Already have an account?</span>
				<Link to="/login">Login</Link>
			</div>
		</div>
	)
}

export default SignupBox
