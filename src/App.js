import './App.css';
import {Header} from './components/Header'
import {AddNotes} from './components/AddNotes'
import {NotesList} from './components/NotesList'
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <body>
       <GlobalProvider>
    <div>
     <Header/>
     <div className="container">
       <NotesList/>
      <AddNotes/>
     </div>
    </div>
    </GlobalProvider>
    </body>
  );
}

export default App;
