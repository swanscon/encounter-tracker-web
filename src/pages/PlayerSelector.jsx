import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PlayerSelector({ party, addPlayers }) {
    const oddCourage = [
        "Iggy",
        "Golyat",
        "Gio",
        "Caldarion",
        "Arawn",
        "Tritan",
    ];
    const meritsHorizon = [
        "Alden",
        "Dasatra",
        "Robin",
        "Dreynea",
        "Xell",
        "Kalish",
    ];
    const [playerList, setPlayerList] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if (party === "Odd Courage") {
            setPlayerList(oddCourage);
        } else {
            setPlayerList(meritsHorizon);
        }
    }, [party]);

    const handleSetSelectedPlayers = (e) => {
        const thisPlayer = e.target.value;
        if (e.target.checked) {
            setSelectedPlayers((prev) => [...prev, thisPlayer]);
        } else {
            let newSelected = [];
            for (let c of selectedPlayers) {
                if (c !== thisPlayer) {
                    newSelected.push(c);
                }
            }
            setSelectedPlayers(newSelected);
        }
    };

    const handleSubmitSelectedPlayers = () => {
        addPlayers(selectedPlayers);
        navigate("/tracker");
    };

    return (
        <div>
            <h1>New {party} Encounter</h1>
            <p>Select PLAYER CHARACTERS to include in this encounter.</p>
            <form>
                {playerList.map((c, index) => (
                    <div key={index}>
                        <label htmlFor="checkbox">{c}</label>
                        <input
                            name="checkbox"
                            value={c}
                            type="checkbox"
                            onChange={handleSetSelectedPlayers}
                        />
                    </div>
                ))}
            </form>
            <button onClick={handleSubmitSelectedPlayers}>
                Submit Selected Players
            </button>
        </div>
    );
}
