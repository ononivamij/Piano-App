// selecting all keys by declaring a variable called keys
const keys = document.querySelectorAll(".key");

// creating a variable to select all white keys
const whiteKeys = document.querySelectorAll(".key.white");

const blackKeys = document.querySelectorAll(".key.black");

keys.forEach(key => key.addEventListener("click",handleKeyClick));

function handleKeyClick(){
    playKey(this);
}

function playKey(key){
    const keyAudio = document.getElementById(key.dataset.note);

    keyAudio.currentTime = 0;

    keyAudio.play();

    key.classList.add("active");

    keyAudio.addEventListener("ended",()=>{
        key.classList.remove("active");
    });

}
