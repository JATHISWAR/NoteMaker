import React, { useContext } from 'react';
import { Notes } from './Notes';
import { GlobalContext } from '../context/GlobalState';

export const NotesList = () => {
    const { notes } = useContext(GlobalContext);
  
    return (
      <>
        <h3>Notes</h3>
        <ul className="list">
          {notes.map(note => (<Notes key={note.id} note={note} />))}
        </ul>
      </>
    )
  }