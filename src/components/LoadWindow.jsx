import { useState } from "react";

export default function LoadWindow({ loadEncounter, closeLoadWindow }) {
    const [warning, setWarning] = useState(false);

    const handleLoadEncounter = () => {
        loadEncounter();
        closeLoadWindow();
    };

    const handleClearEncounter = () => {
        localStorage.clear();
        closeLoadWindow();
    }

    const handleToggleWarning = () => {
        const prev = warning;
        setWarning(!prev);
    };
    return (
        <div className="edit-window">
            <p>
                A previous encounter was found. Would you like
                to load local data?
            </p>
            <button onClick={handleLoadEncounter}>Yes</button>
            <button onClick={handleToggleWarning}>No</button>
            {warning ? (
                <>
                    <p>Are you sure? Previous local data will be lost.</p>
                    <button onClick={handleClearEncounter}>Yes I'm Sure</button>
                    <button onClick={handleToggleWarning}>No</button>
                </>
            ) : (
                <></>
            )}
        </div>
    );
}
