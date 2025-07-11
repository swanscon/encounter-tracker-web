import { useState } from "react";

export default function OddCourage() {
    const players = [
        {
            init: "",
            name: "Iggy",
            ac: "",
            notes: "",
            pc: true,
        },
        {
            init: "",
            name: "Golyat",
            ac: "",
            notes: "",
            pc: true,
        },
        {
            init: "",
            name: "Gio",
            ac: "",
            notes: "",
            pc: true,
        },
        {
            init: "",
            name: "Caldarion",
            ac: "",
            notes: "",
            pc: true,
        },
        {
            init: "",
            name: "Arawn",
            ac: "",
            notes: "",
            pc: true,
        },
        {
            init: "",
            name: "Tritan",
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
                .forEach((player) => player.name + " ")}.`
        );
    };

    return (
        <div>
            <h1>New ODD COURAGE Encounter</h1>
            <form>
                {players.map((c, index) => (
                    <>
                        <label htmlFor="checkbox">{c.name}</label>
                        <input
                            name="checkbox"
                            key={index}
                            type="checkbox"
                            onChange={handleSetSelectedPlayers}
                        />
                    </>
                ))}
            </form>
            <button onClick={handleSelectedPlayers}>
                Submit Selected Players
            </button>
        </div>
    );
}
