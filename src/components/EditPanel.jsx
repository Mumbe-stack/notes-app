import { useState, useEffect } from 'react';

function EditPanel({ note, updateNote, onClose }) {
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);

  useEffect(() => {
    setTitle(note.title);
    setDescription(note.description);
  }, [note]);

  const handleSave = () => {
    updateNote({
      ...note,
      title,
      description,
      createdAt: note.createdAt || new Date().toISOString(),
    });
    onClose();
  };

  return (
    <div className="edit-panel">
      <div className="edit-panel-header">
        <h2>Edit Note</h2>
        <button onClick={onClose}>✖</button>
      </div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Edit title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Edit description"
      ></textarea>
      <button className="save-btn" onClick={handleSave}>Save</button>
    </div>
  );
}

export default EditPanel;
