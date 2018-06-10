// first you create a arry for song which want to play

var songs = ["cheap-thrills.mp3", "amor.mp3", "don,t.mp3"];
// now create an arry of poster you want to use
var poster = ["thills.jpg", "amor.jpg", "otelia.jpg"];

var songtitle = document.getElementById("songTitle");
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

// now for play and pause button

function playOrPauseSong(){
    if(song.paused) {
        song.play();
        $("#play img").attr("src","pause.png");
    }
        else {
            song.pause();
        $("#play img").attr("src","play.png");

        }
    }
// now call the function on button click event

//  now we can access seekbar
song.addEventListener('timeupdate',function(){
    var position = song.currentTime / song.duration;
    fillBar.style.width = position * 100 +'%';
})

// now work on next button 
function next(){
    currentSong++;
    if(currentSong>2){
        currentSong = 0;
    }
    playSong();
    $("#play img").attr("src","pause.png");
    // now set the poster
    $("#image img").attr("src",poster[currentSong]);
    // now for background image
    $("#bg img").attr("src",poster[currentSong]);  
}


function pre(){
    currentSong--;
    if(currentSong<0){
        currentSong = 2;
    }
    playSong();
    $("#play img").attr("src","pause.png");
    // now set the poster
    $("#image img").attr("src",poster[currentSong]);
    // now for background image
    $("#bg img").attr("src",poster[currentSong]);  
}
