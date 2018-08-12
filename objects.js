var playlist = {Broadcast: "Pendulum"};

function updatePlaylist(playlist, artistName, songTitle) {
  object.assign({}, playlist, {[artistName]: songTitle});
  return playlist
}