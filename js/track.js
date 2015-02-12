/* jshint node: true, esnext: true */
"use strict";

/*
title <string>
duration <number>
lyrics <string>
bpm <number>
artist(s) <array>[string]
featuring artist(s) <array>[string]
song writer(s) <array>[string]
producer <array>[string]
genre <string>
price <number>
release day <date>

album <album>
*/
var uniq = require("./classfunctions.js").uniq;
var assertNumber = require("./classfunctions.js").assertNumber;

class Track {

    constructor(data = {}) {
        assertNumber(data.price, 'Price should be a number');
        this.title = data.title;
        this.duration = data.duration;
        this.genre = data.genre;
        this.price = data.price;
        this.releaseDay = new Date(data.releaseDay);

        this.artists = [];
        this.featuringArtists = [];
        this.songWriters = [];
        this.producers = [];
    }

    addArtist(featuringArtist){
        this.artists.push(featuringArtist);
    }

    addFeaturingArtist(featuringArtist){
        this.featuringArtists.push(featuringArtist);
    }

    addSongWriter(songWriter){
        this.songWriters.push(songWriter);
    }

    addProducer(producer){
        this.producer.push(producer);
    }
}


module.exports = Track;
