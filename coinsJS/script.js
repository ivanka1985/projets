let euro1 = document.getElementById("euro1");
let euro2 = document.getElementById("euro2");
let euro3 = document.getElementById("euro3");


function lancerAnimation(){
  euro1.classList.add("rot1");
  euro2.classList.add("rot2");
  euro3.classList.add("rot3");
}

function arreterAnimation(){
euro1.classList.remove("rot1");
euro2.classList.remove("rot2");
euro3.classList.remove("rot3");
}


/******
let animationPaused = false;
let rot1 = document.querySelector('.rot1');
let rot2 = document.querySelector('.rot2');
let rot3 = document.querySelector('.rot3');

let stopAnimation = () => {
  if (!animationPaused) {
    rot1.style.animationPlayState = 'paused';
    rot2.style.animationPlayState = 'paused';
    rot3.style.animationPlayState = 'paused';
    animationPaused = true;
  }
};

let resumeAnimation = () => {
  if (animationPaused) {
    rot1.style.animationPlayState = 'running';
    rot2.style.animationPlayState = 'running';
    rot3.style.animationPlayState = 'running';
    animationPaused = false;
  }
};

let stopButton = document.querySelector('.btn:nth-child(1)');
let resumeButton = document.querySelector('.btn:nth-child(2)');

stopButton.addEventListener('click', stopAnimation);
resumeButton.addEventListener('click', resumeAnimation);

*****/