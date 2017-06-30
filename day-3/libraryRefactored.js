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
             },

  printPlaylists: function () {
    var playlist = this.playlists;
    for(var i in playlist){
      console.log(i + ": " + playlist[i].name + " - " + playlist[i].tracks.length + " tracks");
    }
  },

  printTracks: function () {
    var tracks = this.tracks;
    for(var i in tracks) {
      console.log(i + ": " + tracks[i].name + " by " + tracks[i].artist + " (" + tracks[i].album + ")");
    }
  },

  printPlaylist: function (playlistId) {
    var playlist = this.playlists;
    var trackNames = this.playlists[playlistId].tracks;
    console.log(playlistId + ": " + playlist[playlistId].name + " - " + trackNames.length + " tracks");

    for (var i in trackNames) {
      var trackId = trackNames[i];
      var track = this.tracks[trackId];
      console.log(trackId + ": " + track.name + " by " + track.artist + " (" + track.album + ")");
    }
  },

  addTrackToPlaylist: function (trackId, playlistId) {
    var exTrack = this.tracks[trackId].id;
    var exPlaylist = this.playlists[playlistId].tracks;
    exPlaylist.push(this.tracks[trackId].id);
  },

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function (name, artist, album) {
    var newTrack = uid();
    this.tracks[newTrack] = {
      id: newTrack,
      name: name,
      artist: artist,
      album: album
    };
    return this.tracks[newTrack];
  },

  addPlaylist: function (name) {
    var newPlaylist = uid();
    this.playlists[newPlaylist] = {
      id: newPlaylist,
      name: name
    };
    return this.playlists[newPlaylist];
  }
};