import { useState } from "react";
import TextBox from "./TextBox";
import "../styles/tables.css";
import "../styles/tooltip.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faSkull } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import EditWindow from "./EditWindow";
import ViewWindow from "./ViewWindow";

export default function TrackerTable({
    creatureList,
    updateFormHidden,
    updateCreature,
}) {
    const [hidden, setHidden] = useState(false);
    const [killedCreatures, setKilledCreatures] = useState([]);
    const [editWindowHidden, setEditWindowHidden] = useState(true);
    const [editCreature, setEditCreature] = useState({});
    const [notesWindowHidden, setNotesWindowHidden] = useState(true);
    const [viewCreature, setViewCreature] = useState({});

    const handleHidden = () => {
        const prev = hidden;
        setHidden(!prev);
        updateFormHidden();
    };

    const handleCloseViewWindow = () => {
        setNotesWindowHidden(true);
    }

    const handleViewNotes = (creature) => {
        setNotesWindowHidden(false);
        setViewCreature({
            name: creature.name,
            notes: creature.notes.length > 0 ? creature.notes : "No notes to display."
        });
    };

    const handleCloseEditWindow = () => {
        setEditWindowHidden(true);
    };

    const handleEditCreature = (creature) => {
        setEditWindowHidden(false);
        setEditCreature(creature);
    };

    const handleSaveEditCreature = (prev, cur) => {
        updateCreature(prev, cur);
    };

    const handleKillCreature = (name) => {
        if (killedCreatures.includes(name)) {
            setKilledCreatures((prev) => prev.filter((n) => n !== name));
            console.log(`Creature: ${name} revived.`);
        } else {
            setKilledCreatures((prev) => [...prev, name]);
            console.log(`Creature: ${name} has died.`);
        }
    };

    return (
        <>
            <h3>Encounter Tracker</h3>
            <div className="table-container">
                {editWindowHidden ? (
                    <></>
                ) : (
                    <EditWindow
                        closeEditWindow={handleCloseEditWindow}
                        creature={editCreature}
                        updateCreature={handleSaveEditCreature}
                    />
                )}
                {notesWindowHidden ? (
                    <></>
                ) : (
                    <ViewWindow 
                        creature={viewCreature}
                        closeNotesWindow={handleCloseViewWindow}
                    />
                )}
                <table>
                    <thead>
                        {creatureList.length > 0 ? (
                            <tr>
                                <th>INIT</th>
                                <th>Name</th>
                                <th>AC</th>
                                <th>HP</th>
                                <th>Notes</th>
                                <th className="tooltip" onClick={handleHidden}>
                                    {hidden === true ? (
                                        <>
                                            <FontAwesomeIcon
                                                icon={faCaretDown}
                                            />
                                            <span className="tooltip-text">
                                                Show Creature Form
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <FontAwesomeIcon icon={faCaretUp} />
                                            <span className="tooltip-text">
                                                Hide Creature Form
                                            </span>
                                        </>
                                    )}
                                </th>
                            </tr>
                        ) : (
                            <></>
                        )}
                    </thead>
                    <tbody>
                        {creatureList.map((c, idx) =>
                            !killedCreatures.includes(c.name) ? (
                                <tr key={idx}>
                                    <td>{c.init}</td>
                                    {c.pc ? (
                                        <td>
                                            <b>{c.name}</b>
                                        </td>
                                    ) : (
                                        <td>{c.name}</td>
                                    )}
                                    <td>{c.ac}</td>
                                    <td>
                                        <TextBox initialValue={c.hp} />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon
                                            icon={faEye}
                                            onClick={() =>
                                                handleViewNotes(c)
                                            }
                                        />{" "}
                                        {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
                                    </td>
                                    <td
                                        onClick={() =>
                                            handleKillCreature(c.name)
                                        }
                                    >
                                        <FontAwesomeIcon icon={faSkull} />
                                    </td>
                                    <td onClick={() => handleEditCreature(c)}>
                                        <FontAwesomeIcon
                                            icon={faEllipsisVertical}
                                        />
                                    </td>
                                </tr>
                            ) : (
                                <tr key={idx} className="killed-creature">
                                    <td>{c.init}</td>
                                    {c.pc ? (
                                        <td className="killed-creature-name">
                                            <b>{c.name}</b>
                                        </td>
                                    ) : (
                                        <td className="killed-creature-name">
                                            {c.name}
                                        </td>
                                    )}
                                    <td>{c.ac}</td>
                                    <td>Dead</td>
                                    <td>
                                        <FontAwesomeIcon
                                            icon={faEye}
                                            onClick={() =>
                                                handleViewNotes(c.notes)
                                            }
                                        />{" "}
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </td>
                                    <td
                                        onClick={() =>
                                            handleKillCreature(c.name)
                                        }
                                    >
                                        <FontAwesomeIcon icon={faSkull} />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon
                                            icon={faEllipsisVertical}
                                        />
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}
