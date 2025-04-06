let maxL = 36;
let keys = document.querySelector('.bkeys')
let sounds = document.querySelector('.sounds');
let audioMap = {};
let keyboardAC = [{whiteKey:'1',blackKey:'!'},{whiteKey:'2',blackKey:'@'},{whiteKey:'3'},{whiteKey:'4',blackKey:'$'},{whiteKey:'5',blackKey:'%'},{whiteKey:'6',blackKey:'&'}
    ,{whiteKey:'7'},{whiteKey:'8',blackKey:'('},{whiteKey:'9',blackKey:')'},{whiteKey:'0'},{whiteKey:'q',blackKey:'Q'},{whiteKey:'w',blackKey:'W'},{whiteKey:'e',blackKey:'E'}
    ,{whiteKey:'r'},{whiteKey:'t',blackKey:'T'},{whiteKey:'y',blackKey:'Y'},{whiteKey:'u'},{whiteKey:'i',blackKey:'I'},{whiteKey:'o',blackKey:'O'},{whiteKey:'p',blackKey:'P'}
    ,{whiteKey:'a'},{whiteKey:'s',blackKey:'S'},{whiteKey:'d',blackKey:'D'},{whiteKey:'f'},{whiteKey:'g',blackKey:'G'},{whiteKey:'h',blackKey:'H'},{whiteKey:'j',blackKey:'J'}
    ,{whiteKey:'k'},{whiteKey:'l',blackKey:'L'},{whiteKey:'z',blackKey:'Z'},{whiteKey:'x'},{whiteKey:'c',blackKey:'C'},{whiteKey:'v',blackKey:'V'},{whiteKey:'b',blackKey:'B'}
    ,{whiteKey:'n'},{whiteKey:'m'}];

function update(){
    verifyResolution();
}

function genereteKeys(){
    keys.innerHTML = '';
    const visibleKeys = keyboardAC.slice(0, maxL);
    visibleKeys.forEach(key =>{
            
        let newKeys = document.createElement('div');
        newKeys.setAttribute('class','keys');
        keys.append(newKeys);
        if(key.whiteKey){
            let newKeyW = document.createElement('div');
            newKeyW.setAttribute('class','white-key');
            newKeyW.setAttribute('data-key',`${key.whiteKey}`);
            newKeys.append(newKeyW);
            newKeyW.innerText = key.whiteKey;
        }
        if(key.blackKey){
            let newKeyB = document.createElement('div');
            newKeyB.setAttribute('class','black-key');
            newKeyB.setAttribute('data-key',`${key.blackKey}`);
            newKeys.append(newKeyB);
            newKeyB.innerText = key.blackKey;
        }
    })
}
    
function verifyResolution(){
        let resolution = window.innerWidth;
        let composerInput = document.querySelector('#composerInput');
        if(resolution >= 1800){
            maxL = 36;
            composerInput.style.width = '1420px';
        }else if(resolution < 1800 && resolution > 1400){
           maxL = 28;
           composerInput.style.width = '1090px';
        }else if(resolution <= 1400 && resolution > 1080){
            maxL = 21;
            composerInput.style.width = '800px';
        }else if(resolution <= 1080 && resolution > 700){
            maxL = 14;
            composerInput.style.width = '490px';
        }else{
            maxL = 8;
            composerInput.style.width = '250px';
        }
        genereteKeys();
        preloadSounds();
}
function preloadSounds() {
    audioMap = {};
    const visibleKeys = keyboardAC.slice(0, maxL);
    visibleKeys.forEach(key => {
      if (key.whiteKey) {
        audioMap[key.whiteKey] = new Audio(`./Assests/sounds/WKey_${key.whiteKey}.wav`);
      }
      if (key.blackKey) {
        audioMap[key.blackKey] = new Audio(`./Assests/sounds/BKey_${key.blackKey}.wav`);
      }
    });
  }
  
  function playSound(sound) {
    let originalAudio = audioMap[sound];
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);
    console.log(sound);
    console.log(keyElement);
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