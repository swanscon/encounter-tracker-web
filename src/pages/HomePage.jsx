import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../styles/containers.css";

export default function HomePage({ clearPlayers }) {
    useEffect(() => {
        clearPlayers([]);
    }, []);

    return (
        <div>
            <h1>Encounter Tracker</h1>
            <p>
                Build simple encounters with default attributes Initiative
                *INIT*, Armor Class *AC*, and "dynamic" Hit Points *HP*.{" "}
            </p>
            <h4>Navigate</h4>
            <div className="button-container">
                <div>
                    <Link to="/tracker">
                        <button>New Encounter Tracker</button>
                    </Link>
                </div>
                <div>
                    <Link to="/odd-courage">
                        <button>Odd Courage</button>
                    </Link>
                </div>
                <div>
                    <Link to="/merits-horizon">
                        <button>Merit's Horizon</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
