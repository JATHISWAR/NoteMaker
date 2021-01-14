import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Notes = ({ note }) => {
    const { deleteNotes } = useContext(GlobalContext);
  
    return (
      <li>
        <b>{note.title} </b> <br/><br/> {note.description}
        <button onClick={() => deleteNotes(note.id)} className="delete-btn">x</button>

        
      </li>
    
    )
  }

