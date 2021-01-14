import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddNotes = () => {
    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');

    const { addNotes } = useContext(GlobalContext);


    const onSubmit = e => {
        e.preventDefault();
    
        const newNote = {
          id: Math.floor(Math.random() * 100000000),
          title,
          description
        }
    
        addNotes(newNote);
      }


    return (
        <div>
           <h3>Add A New Note</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <br></br>
          <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} placeholder="Enter title..." />
        </div>
        <div className="form-control">
        <br></br>
        <label htmlFor="description">Note</label>
          <textArea id="description" onChange={(e) => setDesc(e.target.value)}  placeholder="Enter notes..." />
        </div>
        <button className="btn">Add Note</button>
      </form>
        </div>
    )
}
