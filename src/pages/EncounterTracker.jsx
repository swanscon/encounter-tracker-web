import { useState, useEffect } from "react";
import AddCreature from "../components/AddCreature";
import TrackerTable from "../components/TrackerTable";

export default function EncounterTracker({ playerList }) {
    const [creatureList, setCreatureList] = useState([]);
    const [formHidden, setFormHidden] = useState(false);

    useEffect(() => {
        let selectedPlayers = [];
            for (let player of playerList) {
                const selectedPlayer = {
                    init: "",
                    name: player,
                    ac: "",
                    notes: "",
                    pc: true,
                };
                selectedPlayers.push(selectedPlayer);
            }
        setCreatureList(selectedPlayers);
    }, []);

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
    };

    const handleUpdateFormHidden = () => {
        const prev = formHidden;
        setFormHidden(!prev);
    };

    return (
        <>
            {/* OddCourage or MeritsHorizon component depending on what was selected */}
            {formHidden ? <></> : <AddCreature updateList={handleUpdateList} />}
            <TrackerTable
                creatureList={creatureList}
                updateFormHidden={handleUpdateFormHidden}
            />
        </>
    );
}
