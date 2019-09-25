const initialState = [];

const ideasReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'CREATE_IDEA' :
      return [...state, action.newIdea]
    case 'DELETE_IDEA' :
      return action.ideas
    default :
      return state
  }
}

export default ideasReducer;