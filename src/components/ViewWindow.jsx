export default function ViewWindow({ creature, closeNotesWindow }) {
    const loadedCreature = creature;
    return (
        <div className="edit-window">
            <p>Notes for <b>{loadedCreature.name}</b></p>
            <p>{loadedCreature.notes}</p>
            <button onClick={closeNotesWindow}>X</button>
        </div>
    )
}