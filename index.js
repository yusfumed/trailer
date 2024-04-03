var btn = document.querySelector(".btn");
var trailerContainer = document.querySelector(".trailer-container.active");
var closeIcon = document.querySelector(".close-icon");
var video = document.querySelector("video");

btn.addEventListener("click",()=>{
    trailerContainer.classList.remove("active");
})

closeIcon.addEventListener("click",()=>{
    trailerContainer.classList.add("active");
    video.currentTime = 0;
    video.pause();
})
