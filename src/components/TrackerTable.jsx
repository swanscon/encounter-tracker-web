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

export default function TrackerTable({ creatureList, updateFormHidden }) {
    const [hidden, setHidden] = useState(false);
    const [killedCreatures, setKilledCreatures] = useState([]);

    const handleHidden = () => {
        const prev = hidden;
        setHidden(!prev);
        updateFormHidden();
    };

    const handleViewNotes = (note) => {
        let noteStr = note.trim();
        if (noteStr.length === 0) {
            noteStr = "No notes for creature. Edit to add new notes.";
        }
        alert(noteStr);
    };

    const handleKillCreature = (creature) => {
        console.log(`Creature: ${creature} has died.`);
        setKilledCreatures((prev) => [...prev, creature]);
    };

    return (
        <>
            <h3>Encounter Tracker</h3>
            <div className="table-container">
                <table>
                    <thead>
                        {creatureList.length > 0 ? (
                            <tr>
                                <th>INIT</th>
                                <th>Name</th>
                                <th>AC</th>
                                <th>Current HP</th>
                                <th>Notes</th>
                                <th className="tooltip" onClick={handleHidden}>
                                    {hidden === true ? (
                                        <>
                                            <FontAwesomeIcon
                                                icon={faCaretDown}
                                            />
                                            <span className="tooltip-text">
                                                Hide Creature Form
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <FontAwesomeIcon icon={faCaretUp} />
                                            <span className="tooltip-text">
                                                Show Creature Form
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
                                        <TextBox />
                                    </td>
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
                            ) : (
                                <tr key={idx} className="killed-creature">
                                    <td>{c.init}</td>
                                    {c.pc ? (
                                        <td className="killed-creature-name">
                                            <b>{c.name}</b>
                                        </td>
                                    ) : (
                                        <td className="killed-creature-name">{c.name}</td>
                                    )}
                                    <td>{c.ac}</td>
                                    <td>
                                        Dead
                                    </td>
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
