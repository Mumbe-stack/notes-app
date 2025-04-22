import { useState } from 'react';

function Note({ note, deleteNote, updateNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(note.title);
  const [editDescription, setEditDescription] = useState(note.description);
  
  const createdAt = note.createdAt || new Date().toISOString();
  
  const handleUpdate = () => {
    updateNote({ 
      ...note, 
      title: editTitle, 
      description: editDescription,
      createdAt: createdAt 
    });
    setIsEditing(false);
  };
  
  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

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
          <div className="note-date">Created: {formattedDate}</div>
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p>{note.description}</p>
          <div className="note-date">Created: {formattedDate}</div>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => {
          if (window.confirm('Are you sure you want to delete this note?')) {
          deleteNote(note.id)
        }
          }}>Delete</button>
          </>
      )}
    </div>
  );
}

export default Note;