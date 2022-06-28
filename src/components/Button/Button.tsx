import { PropsWithChildren, FC } from "react"
import "./Button.scss"

interface Props extends PropsWithChildren {
	primary?: boolean
	secondary?: boolean
	size?: String
	disabled?: boolean
	className?: string
}

const Button: FC<Props> = (props) => {
	const componentClasses = `${props.className} button ${
		props.secondary ? "btn-secondary" : "btn-primary"
	} btn-sz-${props.size || "small"}`

	return (
		<button disabled={props.disabled} className={componentClasses}>
			{props.children}
		</button>
	)
}

export default Button
