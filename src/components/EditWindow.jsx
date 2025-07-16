import { useEffect, useState } from "react"
import '../styles/popup.css'

export default function EditWindow({ creature, updateWindowHidden }) {
    const [previous, setPrevious] = useState({});
    const [updated, setUpdated] = useState({});

    useEffect(() => {
        setPrevious(creature);
    }, []);

    return (
        <div className="edit-window">
            <p>Edit Window</p>
            <button onClick={updateWindowHidden}>X</button>
        </div>
    )
}