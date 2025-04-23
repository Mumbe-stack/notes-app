# Notes App
This project is a simple, Notes App built with React.
It allows users to add, edit, delete, and search notes — perfect for practicing essential React skills like state management, list rendering, and handling user input.
Whether you are jotting down quick ideas, managing to-dos, or planning projects, this app provides a good user experience without unnecessary complexity.

# Deliverables
    Managing arrays of data in React with useState

    Handling form inputs and user events

    Dynamically rendering lists of components

    Implementing basic CRUD operations (Create, Read, Update, Delete)

    Filtering data based on user input

# Features
    Add Notes: Create new notes with a title and description.

    Edit Notes: Update the title and description of an existing note.

    Delete Notes: Remove notes you no longer need.

    Search Notes: Instantly filter notes by typing into the search bar.

# Settings (live link)
https://notes-app-git-notes-mumbes-projects.vercel.app/

# Technologies
    React – Front-end JavaScript library for building user interfaces.

    JavaScript  – Core programming language.

    HTML5 & CSS – Markup and styling.

    Vite / Create React App – For fast React project setup (depending on what you used).

# Installation
## git clone 
https://github.com/Mumbe-stack/notes-app

## Navigate into the project folder
cd notes-app

## Install dependencies
npm install

## Start the development server
### For Vite Users 
npm run dev

### For Create React App Users
npm start

# Project Structure
├── public/
│ └── vite.svg
├── src/
│ ├── assets/
│ │ └── simple-image.png │ ├── components/
│ │ ├── EditPanel.jsx
│ │ ├── Note.jsx
│ │ ├── NoteForm.jsx
│ │ └── SearchBar.jsx
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js

#  Workflow
1. Managing Notes
In the main App component:
- Use a state variable to keep track of all notes.
- Notes should be stored as objects with title and description fields.- The app should have functions to add, edit, and delete notes.
- Added notes are stored locally and retained even upon refresh.
- When deleting a note, one has to confirm if they are sure they want to delete the note to avoid accidental deletion of notes.

2. Adding Notes
- Provide a form with fields for the note’s title and description.
- On form submission, create a new note and add it to the notes array.
- The newly added note should appear at the top of the list.

3. Editing Notes
- Allow notes to enter an edit mode when the user clicks an "Edit" button.
- Pre-fill the form with the existing note data.
- Update the note in the list once the user saves changes.

4. Deleting Notes
- Attach a "Delete" button to each note.
- Remove the note from the list when the button is clicked.

5. Searching Notes
- Add a SearchBar component at the top of the page.
- Keep a search term state in the App component.
- As the user types into the search bar, filter the displayed notes in real-time based on whether their title or description includes the search term.

# Why Use This App
    -Perfect for brainstorming ideas quickly
    -Great for making to-do lists without needing complicated software
    -Ideal for temporary notes (e.g., meeting notes, reminders)
    -No account or login required — just open and start writing


# Summary
This Notes App provides a smooth experience for taking and managing notes quickly.
If you are looking for a simple tool to capture your thoughts or learn how basic CRUD operations work in React, this app is a great place to start!
Happy note-taking!

# Contributors
-Mercy Munyongwe (https://github.com/Mumbe-stack)
-Nevil Oporo (https://github.com/Neviloporo)
-Joy Mitchel (https://github.com/JoyMitchel)
-Brian Njuguna (https://github.com/NJUGUNA-png)







