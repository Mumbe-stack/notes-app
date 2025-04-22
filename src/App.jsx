import { useState, useEffect } from 'react';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import SearchBar from './components/SearchBar';
import EditPanel from './components/EditPanel';
import './App.css';

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  })
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [noteBeingEdited, setNoteBeingEdited] = useState(null);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([{ ...note, createdAt: new Date().toISOString() }, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    if (noteBeingEdited?.id === id) setNoteBeingEdited(null);
  };

  const updateNote = (updatedNote) => {
    setNotes(
      notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={darkMode ? 'App dark-mode' : 'App'}>
      <div className="header">
        <h1>Notes App</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <SearchBar search={search} setSearch={setSearch} />
      <NoteForm addNote={addNote} />

      <div className="notes-list">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <Note
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              onEdit={() => setNoteBeingEdited(note)}
            />
          ))
        ) : (
          <p>No notes found...</p>
        )}
      </div>

      {noteBeingEdited && (
        <EditPanel
          note={noteBeingEdited}
          updateNote={updateNote}
          onClose={() => setNoteBeingEdited(null)}
        />
      )}
    </div>
  );
}

export default App;
