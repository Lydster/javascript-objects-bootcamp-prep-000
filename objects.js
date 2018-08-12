var playlist = {Broadcast: "Pendulum"};

function updatePlaylist(playlist, artistName, songTitle) {
  return object.assign(playlist, {[artistName]: songTitle});
}