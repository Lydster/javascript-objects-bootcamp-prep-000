var playlist = {Broadcast: "Pendulum"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}