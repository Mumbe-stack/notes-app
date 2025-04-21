import { useState } from 'react';

function NoteForm({ addNote }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() && description.trim()) {
      const newNote = {
        id: Date.now(), 
        title,
        description,
      };
      addNote(newNote);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;
