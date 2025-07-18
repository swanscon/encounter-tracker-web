export default function ViewWindow({ name, content, closeNotesWindow }) {
    return (
        <div className="edit-window">
            <p>Notes for <b>{name}</b></p>
            <p>{content}</p>
            <button onClick={closeNotesWindow}>X</button>
        </div>
    )
}