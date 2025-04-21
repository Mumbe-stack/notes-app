import { useState } from 'react';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(false); 

  const addNote = (note) => {
    setNotes([note, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNote = (updatedNote) => {
    setNotes(notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={darkMode ? 'App dark-mode' : 'App'}>
      <div className="header">
        <h1>Notes App </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
      <SearchBar search={search} setSearch={setSearch} />
      <NoteForm addNote={addNote} />
      <div className="notes-list">
      {filteredNotes.length > 0 ? (
      filteredNotes.map((note) => (
      <Note key={note.id} note={note} deleteNote={deleteNote} updateNote={updateNote} />
     ))
    ) : (
    <p>No notes found...</p>
    )}
    </div>

    </div>
  );
}

export default App;
