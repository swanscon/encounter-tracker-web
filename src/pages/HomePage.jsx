import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <div>
            <h1>Encounter Tracker</h1>
            <p>Build simple encounters with default attributes Initiative *INIT*, Armor Class *AC*, and "dynamic" Hit Points *HP*. </p>
            <h4>Navigate</h4>
            <Link to="/tracker"><button>New Encounter Tracker</button></Link>
            <Link to="/odd-courage"><button>Odd Courage</button></Link>
            <Link to="/merits-horizon"><button>Merit's Horizon</button></Link>
        </div>
    )
}