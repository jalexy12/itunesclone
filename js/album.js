/*
title <string>
duration <number>
producers <array>[string]
genre <string>
label <string>
cover <url:string>
price <number>
release day <date>
tracks <array>[track]
*/
var uniq = require("./classfunctions.js").uniq;
var assertNumber = require("./classfunctions.js").assertNumber;

class Album {

    constructor(data) {

        assertNumber(data.price, 'Price should be a number');
        this.title = data.title;
        this.producers = [];
        this.genre = data.genre;
        this.label = data.label;
        this.cover = data.url;
        this.price = data.price;
        this.release = data.release;
        this.duration = data.duration;
        this.tracks = [];
        this.addTrack = function(track) {
            this.tracks.push(track);
        }
        this.getArtists = function() {
            var artists = [];
            this.tracks.forEach(function(track) {
                artists = artists.concat(track.artists);
            });
            artists = uniq(artists);
            return artists;
        }
    }
};

module.exports = Album;