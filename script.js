// first you create a arry for song which want to play

var songs = ["cheap-thrills.mp3","amor.mp3","don,t.mp3"];
// now create an arry of poster you want to use
var poster = ["thills.jpg,amor.jpg,otelia.jpg"];

var songtitle = document.getElementById("songtitle");
var fillbar = document.getElementById("fill");

// now create an object for audio class

var song = new Audio();
var currentSong: 0;

// now i want to play song when body or window is load

window.onload = playSong;    
function playSong ();
    song.src = songs[currentSong];
    song.title.textContent = songs[currentSong];
    song.play();