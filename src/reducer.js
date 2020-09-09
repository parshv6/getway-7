export const initialState = {
  term: null,
};

export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM", //when we put input in google it will go to set_search_term
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };

    default:
      return state;
  }
};

export default reducer;
