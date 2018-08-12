var playlist = {'Phil Ochs': "Pendulum"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}

function removeFromPlayist(playlist, artistName) {
  delete playlist.artistName[1];
}