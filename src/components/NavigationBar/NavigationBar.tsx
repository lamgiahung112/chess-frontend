import { Link } from "react-router-dom"
import { useTokenData } from "~/utils/hooks"
import Button from "../Button"

import "./NavigationBar.scss"

function NavigationBar() {
	const isSignedIn = useTokenData()

	return (
		<div className="navbar-container">
			<Link to="/" className="sprite chess-sprite"></Link>
			<Link to="/" className="sprite play-sprite">
				<span className="sprite-title">Play</span>
			</Link>
			<Link to="/" className="sprite puzzle-sprite">
				<span className="sprite-title">Puzzle</span>
			</Link>
			<Link to="/" className="sprite learn-sprite">
				<span className="sprite-title">Learn</span>
			</Link>
			<Link to="/" className="sprite watch-sprite">
				<span className="sprite-title">Watch</span>
			</Link>
			<Link to="/" className="sprite news-sprite">
				<span className="sprite-title">News</span>
			</Link>
			<Link to="/" className="sprite social-sprite">
				<span className="sprite-title">Social</span>
			</Link>
			<Link to="/" className="sprite more-sprite">
				<span className="sprite-title">More</span>
			</Link>
			<input className="navbar-search-input" placeholder="Search" />

			{!isSignedIn && (
				<>
					<Button secondary>Sign up</Button>
					<Button>Log in</Button>
				</>
			)}
		</div>
	)
}

export default NavigationBar
