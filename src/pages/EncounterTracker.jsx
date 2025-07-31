import { useState, useEffect } from "react";
import AddCreature from "../components/AddCreature";
import TrackerTable from "../components/TrackerTable";

export default function EncounterTracker({ playerList }) {
    const [creatureList, setCreatureList] = useState([]);
    const [formHidden, setFormHidden] = useState(false);
    // const [foundLocal, setFoundLocal] = useState(false);

    useEffect(() => {
        // if (!localStorage.getItem("myEncounter")) {
            const selectedPlayers = playerList.map((player) => ({
                init: "",
                name: player,
                ac: "",
                hp: "",
                notes: "",
                pc: true,
            }));
            setCreatureList(selectedPlayers);
        // } else {
        //     setFoundLocal((prev) => !prev);
        // }
    }, [playerList]);

    const handleUpdateList = (newCreature) => {
        setCreatureList((prevList) => {
            const updatedList = [...prevList, newCreature];
            return updatedList.sort((a, b) => {
                // Sort by init
                const initA = parseInt(a.init) || 0;
                const initB = parseInt(b.init) || 0;

                if (initA !== initB) {
                    return initB - initA;
                }

                // If init equal, sort by name
                return a.name.localeCompare(b.name);
            });
        });
        localStorage.setItem("myEncounter", JSON.stringify(creatureList));
        const retrieved = localStorage.getItem("myEncounter");
        console.log(JSON.parse(retrieved));
    };

    const handleUpdateWithEditCreature = (prev, cur) => {
        const creatureMatches = (a, b) =>
            a.init === b.init && a.name === b.name && a.ac === b.ac;

        if (creatureList.some((c) => creatureMatches(c, prev))) {
            const updatedList = creatureList.map((c) =>
                creatureMatches(c, prev) ? cur : c
            );

            const sortedList = updatedList.sort((a, b) => {
                const initA = parseInt(a.init) || 0;
                const initB = parseInt(b.init) || 0;

                if (initA !== initB) {
                    return initB - initA;
                }

                return a.name.localeCompare(b.name);
            });

            setCreatureList(sortedList);
        } else {
            console.log("Creature unchanged @EncounterTracker.");
        }
    };

    const handleUpdateFormHidden = () => {
        const prev = formHidden;
        setFormHidden(!prev);
        localStorage.setItem("myFormHidden", formHidden);
    };

    return (
        <>
            {/* OddCourage or MeritsHorizon component depending on what was selected */}
            {formHidden ? <></> : <AddCreature updateList={handleUpdateList} />}
            <TrackerTable
                creatureList={creatureList}
                updateFormHidden={handleUpdateFormHidden}
                updateCreature={handleUpdateWithEditCreature}
            />
        </>
    );
}
