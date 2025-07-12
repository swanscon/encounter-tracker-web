import { useState } from "react";

export default function MeritsHorizon() {
    const players = [
        {
            init: "",
            name: "Alden",
            ac: "",
            notes: "",
            pc: true,
        },
        {
            init: "",
            name: "Dasatra",
            ac: "",
            notes: "",
            pc: true,
        },
        {
            init: "",
            name: "Robin",
            ac: "",
            notes: "",
            pc: true,
        },
        {
            init: "",
            name: "Drey",
            ac: "",
            notes: "",
            pc: true,
        },
        {
            init: "",
            name: "Xell",
            ac: "",
            notes: "",
            pc: true,
        },
        {
            init: "",
            name: "Kalish",
            ac: "",
            notes: "",
            pc: true,
        },
    ];
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const handleSetSelectedPlayers = (e) => {
        const thisPlayer = e.target.value;
        setSelectedPlayers((prev) => [...prev, thisPlayer]);
    };

    const handleSelectedPlayers = () => {
        console.log(
            `Selected Players: ${selectedPlayers
                .map((player) => player.name + " ")}.`
        );
    };

    return (
        <div>
            <h1>New ODD COURAGE Encounter</h1>
            <form>
                {players.map((c, index) => (
                    <div key={index}>
                        <label htmlFor="checkbox">{c.name}</label>
                        <input
                            name="checkbox"
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
