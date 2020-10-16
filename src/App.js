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
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      // give the token to spotify
      spotify.setAccessToken(_token);

      //Test to seee if the token gotten to the spotify API account Info
      spotify.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }

    console.log("I have a token 🎶🎶🎶->>", _token);
  }, []);

  console.log("😲😲😲", user);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
