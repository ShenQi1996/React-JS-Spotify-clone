//The initial state of the app.   when the app first run.

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //CHANGE to null after done developing....
  //token:
  // "BQCeC4gBTWJ4l9EvD7woFg911o-rurUv9Li1ELtyV2mbjA0LqG-oies-Os9Xjt-bLrf639BXx0BDeXeyAlYyGTw2COWNq4AA2r1hCaBRhKjvukiCW59pulFA5CLqJ7RV3b8Haxo6DlroxFVQvrdF8OfYPF1ePM2zdw",
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
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
