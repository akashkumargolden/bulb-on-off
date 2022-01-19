const audio = document.getElementById("bulb-on");

const song = new Audio("songsss.mp3");
audio.onmouseover=() =>{
    song.play();
    document.body.style.backgroundColor="pink";
}
audio.onclick=() =>{
    document.getElementById("myImage").src='idea.png';
    song.pause();
    // document.body.style.backgroundColor="yellow";
}
audio.onmouseout=() =>{
    document.body.style.backgroundColor="blue";
    song.pause();
}
// light off codes

const lightoff =  document.getElementById("bulb-off");
const offsong  = new Audio("offsongs.mp3");

lightoff.onmouseover=() =>{
    offsong.play();
}

lightoff.onmouseout=()=>{
    offsong.pause();
}


lightoff.onclick=() => {
 document.getElementById("myImage").src='lamp.png';
 offsong.pause();
}
