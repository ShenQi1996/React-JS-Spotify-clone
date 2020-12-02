import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import "./App.css";
import Login from "./Login/Login";
import { getTokenFromUrl } from "./spotify";
import Player from "./Player/Player";
import { useDataLayerValue } from "./DataLayer/DataLayer";

// alwo us to interact with Spotify
const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue(); // witch this line I can pull anything out of the datalayer

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // give the token to spotify
      spotify.setAccessToken(_token);

      //Test to see if the token gotten to the spotify API account Info
      spotify.getMe().then(user => {
        dispatch({
          //set the user into the datalayer
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcMsF1EVlL84A").then(response =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
