import { useState } from "react";

export default function OddCourage() {
    const players = ["Iggy", "Golyat", "Gio", "Caldarion", "Arawn", "Tritan"];
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const handleSetSelectedPlayers = (e) => {
        const thisPlayer = e.target.value;
        if (e.target.checked) {
            setSelectedPlayers((prev) => [...prev, thisPlayer]);
        } else {
            let newSelected = [];
            for(let c of selectedPlayers) {
                if(c !== thisPlayer) {
                    newSelected.push(c);
                }
            }
            setSelectedPlayers(newSelected);
        }
    };

    const handleSelectedPlayers = () => {
        console.log(
            `Selected Players: ${selectedPlayers.map(
                (player) => player + " "
            )}.`
        );
    };

    return (
        <div>
            <h1>New ODD COURAGE Encounter</h1>
            <p>Select PLAYER CHARACTERS to include in this encounter.</p>
            <form>
                {players.map((c, index) => (
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
            <button onClick={handleSelectedPlayers}>
                Submit Selected Players
            </button>
        </div>
    );
}
