
export default (state, action) => {
    switch(action.type) {
      case 'DELETE_NOTES':
        return {
          ...state,
          notes: state.notes.filter(notes => notes.id !== action.payload)
        }
      case 'ADD_NOTES':
        return {
          ...state,
          notes: [action.payload, ...state.notes]
        }
      default:
        return state;
    }
  }