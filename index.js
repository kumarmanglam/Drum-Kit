window.addEventListener('keydown', playdown)
function playdown(e){
  // console.log(e.keyCode)
  const audioEl = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const keyEl = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // console.log(audioEl)
  // console.log(keyEl);
  keyEl.classList.add("playing")
  if(!audioEl) return ;
  audioEl.play();
  audioEl.currentTime = 0;
}
function removeTransition(e){
  if(e.propertyName != 'transform') return
  this.classList.remove('playing')
}
const keys = document.querySelectorAll(".key")
console.log(keys);
keys.forEach(item => item.addEventListener('transitionend', removeTransition)); 
keys.forEach(item => item.addEventListener('click', handleClick));

function handleClick(e) {
  const keyElement = e.currentTarget;
  const keyCode = keyElement.getAttribute("data-key");
  
  keyElement.classList.add("playing");
  
  const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (audioElement) {
    audioElement.play();
    audioElement.currentTime = 0;
  }
  
  setTimeout(() => {
    keyElement.classList.remove("playing");
  }, 50);
}