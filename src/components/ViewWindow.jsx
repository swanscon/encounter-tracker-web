export default function ViewWindow({ creature, closeNotesWindow }) {
    const loadedCreature = creature;
    return (
        <div className="edit-window"  onClick={closeNotesWindow}>
            <h3><b>{loadedCreature.name}</b></h3>
            <p>{loadedCreature.notes}</p>
            <p><i>Click window to close.</i></p>
        </div>
    )
}