//Variables
let songIndex=0;
let audioElement= new Audio('Alan Walker/Catch Me If You Can.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItems'))

let songs= [
    {songName: "Catch Me If You can", path:"Alan Walker/Catch Me If You Can.mp3", coverPath:"thumbnails/catch me if you can.jpg"},
    {songName: "Fake A Smile", path:"Alan Walker/Fake A Smile.mp3", coverPath:"thumbnails/fake a smile.jpg"},
    {songName: "Lovesick", path:"Alan Walker/_Lovesick.mp3", coverPath:"thumbnails/love sick.jpg"},
    {songName: "Man On The Moon", path:"Alan Walker/Man On The Moon.mp3", coverPath:"thumbnails/man on the moon.jpg"},
    {songName: "On My Way", path:"Alan Walker/On My Way.mp3", coverPath:"thumbnails/on my way.jpg"},
    {songName: "Space Melody", path:"Alan Walker/Space Melody.mp3", coverPath:"thumbnails/space melody.jpg"},
    {songName: "World We Used To Know", path:"Alan Walker/World We Used To Know.mp3", coverPath:"thumbnails/world we use to know.jpg"}
]

songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
});

//Handle Play and Pause
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')
        gif.style.opacity=1
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-pause')
        masterPlay.classList.add('fa-play')
        gif.style.opacity=0
    }
})


// //Event Listeners
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= myProgressBar.value * audioElement.duration/100;
})