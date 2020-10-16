//The initial state of the app.   when the app first run.

export const initialState = {
  user: null,
  playerlists: [],
  playing: false,
  item: null,
};

// reducer is just here to listen to actions .
const reducer = (state, action) => {
  console.log(action);

  //Action -> type, [playload] <<-- can name anything you want
  //   Action -> type = "SET_USER" , [playload] = "user"

  // switch between different actions .
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
