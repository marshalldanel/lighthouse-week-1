var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

console.log(library.tracks.t01.name);
// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
var printPlaylists = function () {
  var playlist = library.playlists;
  for(var i in playlist){
    console.log(i + ": " + playlist[i].name + " - " + playlist[i].tracks.length + " tracks");
  }
};

// printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var tracks = library.tracks;
  for(var i in tracks) {
    console.log(i + ": " + tracks[i].name + " by " + tracks[i].artist + " (" + tracks[i].album + ")");
  }
};

// printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var playlist = library.playlists;
  var trackNames = library.playlists[playlistId].tracks;
  console.log(playlistId + ": " + playlist[playlistId].name + " - " + trackNames.length + " tracks");

  for (var i in trackNames) {
    var trackId = trackNames[i];
    var track = library.tracks[trackId];
    console.log(trackId + ": " + track.name + " by " + track.artist + " (" + track.album + ")");
  }
};

// printPlaylist("p01");

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var exTrack = library.tracks[trackId].id;
  var exPlaylist = library.playlists[playlistId].tracks;
  exPlaylist.push(library.tracks[trackId].id);
};


// addTrackToPlaylist("t03", "p01");

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

// adds a track to the library

var addTrack = function (name, artist, album) {
  var newTrack = uid();
  library.tracks[newTrack] = {
    id: newTrack,
    name: name,
    artist: artist,
    album: album
  };
  return library.tracks[newTrack];
};

addTrack("Body Wonderland", "Jack Johnson", "You");
console.log(library);
// adds a playlist to the library

var addPlaylist = function (name) {
  var newPlaylist = uid();
  library.playlists[newPlaylist] = {
    id: newPlaylist,
    name: name
  };
  return library.playlists[newPlaylist];
};

addPlaylist("Party On");
console.log(library.playlists);

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

};