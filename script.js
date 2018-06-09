// first you create a arry for song which want to play

var songs = ["cheap-thrills.mp3", "amor.mp3", "don,t.mp3"];
// now create an arry of poster you want to use
var poster = ["thills.jpg", "amor.jpg", "otelia.jpg"];

var songtitle = document.getElementById("songtitle");
var fillbar = document.getElementById("fill");

// now create an object for audio class

var song;
var currentSong = 0;

// now i want to play song when body or window is load

function playSomething() {
    song = new Audio();
    
    song.src = "songs/" + songs[currentSong];
    console.log(song.src);
    song.title.textContent = songs[currentSong];
    song.play();
}
