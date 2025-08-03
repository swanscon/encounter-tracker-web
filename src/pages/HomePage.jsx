import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/containers.css";
import NewWindow from "../components/NewWindow";

export default function HomePage({ clearPlayers }) {
    const [showWindow, setShowWindow] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        clearPlayers([]);
    }, []);

    const handleShowWindow = () => {
        const prevEncounterFound = localStorage.getItem("myEncounter") !== null;
        if (prevEncounterFound) {
            const prev = showWindow;
            setShowWindow(!prev);
        } else {
            navigate("/tracker");
        }
    };

    return (
        <div>
            <h1>Encounter Tracker</h1>
            <p>
                Build simple encounters with default attributes Initiative
                *INIT*, Armor Class *AC*, and "dynamic" Hit Points *HP*.{" "}
            </p>
            <h4>Navigate</h4>
            {showWindow ? <NewWindow /> : <></>}
            <div className="button-container">
                <div>
                    <button onClick={handleShowWindow}>
                        Encounter Tracker
                    </button>
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
