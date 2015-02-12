/* jshint node: true */
"use strict";

var Album = require('./album.js');
var Track = require('./track.js');

var firstAlbum = new Album({
    title: 'album title goes here...',
    duration: 10 * 85,
    price: 1.29
});

// adding a comment
var firstTrack = new Track({
    title: 'this is track one',
    duration: 84,
    price: 0.99
});
firstTrack.addArtist('foo');
firstTrack.addArtist('abc');

firstAlbum.addTrack(firstTrack);

var secondTrack = new Track({
    title: 'this is track two',
    duration: 90,
    price: 1.10
});
secondTrack.addArtist('abc');
secondTrack.addArtist('xyz');
firstAlbum.addTrack(secondTrack);




console.log('Album: ', firstAlbum);
console.log('Artists: ', firstAlbum.getArtists());
