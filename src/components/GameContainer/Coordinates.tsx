import { HTMLAttributes } from "react"

function Coordinates(props: HTMLAttributes<SVGElement>) {
	return (
		<svg viewBox="0 0 100 100" className="coordinate" {...props}>
			<text x="0.75" y="3.5" className="coordinate-light">
				8
			</text>
			<text x="0.75" y="15.75" className="coordinate-dark">
				7
			</text>
			<text x="0.75" y="28.25" className="coordinate-light">
				6
			</text>
			<text x="0.75" y="40.75" className="coordinate-dark">
				5
			</text>
			<text x="0.75" y="53.25" className="coordinate-light">
				4
			</text>
			<text x="0.75" y="65.75" className="coordinate-dark">
				3
			</text>
			<text x="0.75" y="78.25" className="coordinate-light">
				2
			</text>
			<text x="0.75" y="90.75" className="coordinate-dark">
				1
			</text>
			<text x="10" y="99" className="coordinate-dark">
				a
			</text>
			<text x="22.5" y="99" className="coordinate-light">
				b
			</text>
			<text x="35" y="99" className="coordinate-dark">
				c
			</text>
			<text x="47.5" y="99" className="coordinate-light">
				d
			</text>
			<text x="60" y="99" className="coordinate-dark">
				e
			</text>
			<text x="72.5" y="99" className="coordinate-light">
				f
			</text>
			<text x="85" y="99" className="coordinate-dark">
				g
			</text>
			<text x="97.5" y="99" className="coordinate-light">
				h
			</text>
		</svg>
	)
}

export default Coordinates
