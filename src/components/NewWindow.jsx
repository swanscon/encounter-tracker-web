import { Link, useNavigate } from "react-router-dom";
export default function NewWindow() {
    const navigate = useNavigate();

    const handleNewEncounter = () => {
        localStorage.removeItem("myEncounter");
        navigate("/tracker");
    };

    return (
        <div className="edit-window">
            <p>Previous encounter found. Clicking on 'New Encounter' will remove any saved data.</p>
            <button onClick={handleNewEncounter}>New Encounter</button>
            <Link to="/tracker">
                <button>Last Used</button>
            </Link>
        </div>
    );
}
