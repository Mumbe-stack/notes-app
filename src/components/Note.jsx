
import React from 'react';

function Note({ note, deleteNote, onEdit }) {
  const formattedDate = new Date(note.createdAt || new Date()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <div className="note-date">Created: {formattedDate}</div>
      
      <div className="note-buttons">
        <button className="edit" onClick={onEdit}>Edit</button>
        <button
          className="delete"
          onClick={() => {
            if (window.confirm('Are you sure you want to delete this note?')) {
              deleteNote(note.id);
            }
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Note;
