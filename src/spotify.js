// Sending the user to spotify API to login
export const authEndpoint = "https://accounts.spotify.com/authorize";

// After done with login will redirect to local host
const redirectUri = "http://localhost:3000/";

// ClientId is from spotify
const clientId = "2bdb6b002fcc42d6aa9d47474de23d14";

// what the user can do.   will only be in the scopes
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash //http://localhost:3000/#access_token=BQBsQVPhwWaWmZBm9dpnH3G1S3QS...
    .substring(1) // #accessToken=mysupersecretkey&name=sam^a....
    .split("&") // #accessToken=mysupersecretkey&...    <- split up to &
    .reduce((initial, item) => {
      // #accessToken=mysupersecretkey&name=sam^a //split up to =
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const LoginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
