import { useState } from 'react';

function Note({ note, deleteNote, updateNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(note.title);
  const [editDescription, setEditDescription] = useState(note.description);

  const handleUpdate = () => {
    updateNote({ ...note, title: editTitle, description: editDescription });
    setIsEditing(false);
  };

  return (
    <div className="note">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          ></textarea>
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p>{note.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteNote(note.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default Note;
