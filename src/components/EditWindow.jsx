import { useState } from "react";
import "../styles/popup.css";
import "../styles/forms.css";

export default function EditWindow({
    creature,
    closeEditWindow,
    updateCreature,
}) {
    const [newCreature, setNewCreature] = useState(creature);

    const handleChange = (e) => {
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
            <p>Editing Creature: <b>{creature.name}</b></p>
            <form className="edit-form" onSubmit={handleSubmit}>
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
                <button style={{ backgroundColor: "#4e1616" }}>DELETE</button>
                <button onClick={closeEditWindow}>Close</button>
            </form>
            
        </div>
    );
}
