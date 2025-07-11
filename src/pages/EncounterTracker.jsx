import { useState } from "react";
import AddCreature from "../components/AddCreature";
import TrackerTable from "../components/TrackerTable";

export default function EncounterTracker() {
    const [creatureList, setCreatureList] = useState([]);
    const [formHidden, setFormHidden] = useState(false);

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
    }

    return (
        <>
            {formHidden ? (<></>) : (<AddCreature updateList={handleUpdateList} />)}
            <TrackerTable creatureList={creatureList} updateFormHidden={handleUpdateFormHidden} />
        </>
    );
}
