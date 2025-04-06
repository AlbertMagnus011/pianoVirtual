
document.body.addEventListener('keypress', (event)=>{
    playSound(event.key);   
})
document.querySelector('#play').addEventListener('click', clickButton);
window.addEventListener('resize', verifyResolution);
init();