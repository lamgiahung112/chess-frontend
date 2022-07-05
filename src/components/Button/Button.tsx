import { ButtonHTMLAttributes, MouseEventHandler } from "react"
import "./Button.scss"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	primary?: boolean
	secondary?: boolean
	disabled?: boolean
	className?: string
}

const Button = (props: Props) => {
	const componentClasses = `${props.className} button ${
		props.secondary ? "btn-secondary" : "btn-primary"
	}`

	return (
		<button
			disabled={props.disabled}
			className={componentClasses}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	)
}

export default Button
