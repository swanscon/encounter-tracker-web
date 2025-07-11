import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <div>
            <h1>Encounter Tracker</h1>
            <p>Build simple encounters with default attributes Initiative *INIT*, Armor Class *AC*, and "dynamic" Hit Points *HP*. </p>
            <h4>Navigate</h4>
            <button><Link to="/tracker">New Encounter Tracker</Link></button>
            <button><Link to="/odd-courage">Odd Courage</Link></button>
            <button><Link to="/merits-horizon">Merit's Horizon</Link></button>
        </div>
    )
}