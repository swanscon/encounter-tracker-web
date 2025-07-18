import { useState } from "react";
import "../styles/popup.css";

export default function EditWindow({
    creature,
    closeEditWindow,
    updateCreature,
}) {
    const [newCreature, setNewCreature] = useState(creature);

    const handleChange = (e) => {
        const prev = newCreature;
        e.preventDefault();
        const field = e.target.name;
        setNewCreature({
            ...newCreature,
            [field]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateCreature(creature, newCreature); // Pass prev + cur
        closeEditWindow(); // Optional: close modal after saving
    };

    return (
        <div className="edit-window">
            <p>Edit Window</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="init">INIT</label>
                    <input
                        name="init"
                        onChange={handleChange}
                        value={newCreature.init}
                    />
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        name="name"
                        onChange={handleChange}
                        value={newCreature.name}
                    />
                </div>
                <div>
                    <label htmlFor="ac">AC</label>
                    <input
                        name="ac"
                        onChange={handleChange}
                        value={newCreature.ac}
                    />
                </div>
                <button type="submit">Save</button>
                <button style={{ backgroundColor: "red" }}>DELETE</button>
            </form>
            <button onClick={closeEditWindow}>X</button>
        </div>
    );
}
