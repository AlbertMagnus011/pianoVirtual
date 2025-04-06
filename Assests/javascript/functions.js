let maxL = 36;
let control  = maxL;
let keys = document.querySelector('.bkeys')
let sounds = document.querySelector('.sounds');
let audioMap = {};
let keyboardAC = [{whiteKey:'1',blackKey:'!'},{whiteKey:'2',blackKey:'@'},{whiteKey:'3'},{whiteKey:'4',blackKey:'$'},{whiteKey:'5',blackKey:'%'},{whiteKey:'6',blackKey:'&'}
    ,{whiteKey:'7'},{whiteKey:'8',blackKey:'('},{whiteKey:'9',blackKey:')'},{whiteKey:'0'},{whiteKey:'q',blackKey:'Q'},{whiteKey:'w',blackKey:'W'},{whiteKey:'e',blackKey:'E'}
    ,{whiteKey:'r'},{whiteKey:'t',blackKey:'T'},{whiteKey:'y',blackKey:'Y'},{whiteKey:'u'},{whiteKey:'i',blackKey:'I'},{whiteKey:'o',blackKey:'O'},{whiteKey:'p',blackKey:'P'}
    ,{whiteKey:'a'},{whiteKey:'s',blackKey:'S'},{whiteKey:'d',blackKey:'D'},{whiteKey:'f'},{whiteKey:'g',blackKey:'G'},{whiteKey:'h',blackKey:'H'},{whiteKey:'j',blackKey:'J'}
    ,{whiteKey:'k'},{whiteKey:'l',blackKey:'L'},{whiteKey:'z',blackKey:'Z'},{whiteKey:'x'},{whiteKey:'c',blackKey:'C'},{whiteKey:'v',blackKey:'V'},{whiteKey:'b',blackKey:'B'}
    ,{whiteKey:'n'},{whiteKey:'m'}];

function init() {
        verifyResolution();
        genereteKeys();
        preloadSounds();
}
    
function verifyResolution(){
        let resolution = window.innerWidth;
        let composerInput = document.querySelector('#composerInput');
        if(resolution >= 1800){
            maxL = 36;
            composerInput.style.width = '1370px';
        }else if(resolution < 1800 && resolution > 1400){
           maxL = 28;
           composerInput.style.width = '1040px';
        }else if(resolution <= 1400 && resolution > 1080){
            maxL = 21;
            composerInput.style.width = '750px';
        }else if(resolution <= 1080 && resolution > 700){
            maxL = 14;
            composerInput.style.width = '440px';
        }else{
            maxL = 8;
            composerInput.style.width = '200px';
        }
    if(control!=maxL){
        genereteKeys();
        preloadSounds();
        control=maxL;
    }
}
function preloadSounds() {
    audioMap = {};
    const visibleKeys = keyboardAC.slice(0, maxL);
    visibleKeys.forEach(key => {
      if (key.whiteKey) {
        audioMap[key.whiteKey] = new Audio(`./Assests/sounds/WKey_${key.whiteKey}.wav`);
      }
      if (key.blackKey) {
        switch (maxL) {
            case 8:
            key.blackKey == "("?'':audioMap[key.blackKey] = new Audio(`./Assests/sounds/BKey_${key.blackKey}.wav`);
                break;
            default:
            audioMap[key.blackKey] = new Audio(`./Assests/sounds/BKey_${key.blackKey}.wav`);
                break;
        }
      }
    });
  }

  function clickButton(){
    let song = document.querySelector('#composerInput').value;
    if(song !== ''){
        let songArray = song.split('');
        playComposition(songArray);
    }
  }

  function playSound(sound) {
    let originalAudio = audioMap[sound];
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);
    if (originalAudio) {
      const audioClone = originalAudio.cloneNode();
      audioClone.play();
    }
    if (keyElement){
        keyElement.classList.add('active');
        setTimeout(function(){
            keyElement.classList.remove('active');
        },300);
    }
  }
  
 function playComposition(songArray){
    let wait = 0;
    for(let songItem of songArray){
        setTimeout(()=>{
            playSound(songItem);
        }, wait);

        wait +=250;
    }    
}