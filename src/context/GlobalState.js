import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';

const initialstate = {
notes: []
}

// Context
export const GlobalContext = createContext(initialstate);

//Provider 
export const GlobalProvider =({children}) => {
    const[state,dispatch] = useReducer(AppReducer,initialstate);

    //Actions

    function addNotes(notes){
        dispatch({
            type:'ADD_NOTES',
            payload:notes
        });
    }

    function deleteNotes(id){
        dispatch({
            type:'DELTE_NOTES',
            payload:id
        });

    }


    return(<GlobalContext.Provider value={{
        notes:state.notes,
        deleteNotes,
        addNotes
    }}>
        {children}
    </GlobalContext.Provider>);


}