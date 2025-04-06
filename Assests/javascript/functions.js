let maxL = 36;
let keys = document.querySelector('.bkeys')
let sounds = document.querySelector('.sounds');
let keyboardAC = [{whiteKey:'1',blackKey:'!'},{whiteKey:'2',blackKey:'@'},{whiteKey:'3'},{whiteKey:'4',blackKey:'$'},{whiteKey:'5',blackKey:'%'},{whiteKey:'6',blackKey:'¨'}
    ,{whiteKey:'7'},{whiteKey:'8',blackKey:'^'},{whiteKey:'9',blackKey:'('},{whiteKey:'0'},{whiteKey:'q',blackKey:'Q'},{whiteKey:'w',blackKey:'W'},{whiteKey:'e',blackKey:'E'}
    ,{whiteKey:'r'},{whiteKey:'t',blackKey:'T'},{whiteKey:'y',blackKey:'Y'},{whiteKey:'u'},{whiteKey:'i',blackKey:'I'},{whiteKey:'o',blackKey:'O'},{whiteKey:'p',blackKey:'P'}
    ,{whiteKey:'a'},{whiteKey:'s',blackKey:'S'},{whiteKey:'d',blackKey:'D'},{whiteKey:'f'},{whiteKey:'g',blackKey:'G'},{whiteKey:'h',blackKey:'H'},{whiteKey:'j',blackKey:'J'}
    ,{whiteKey:'k'},{whiteKey:'l',blackKey:'L'},{whiteKey:'z',blackKey:'Z'},{whiteKey:'x'},{whiteKey:'c',blackKey:'C'},{whiteKey:'v',blackKey:'V'},{whiteKey:'b',blackKey:'B'}
    ,{whiteKey:'n'},{whiteKey:'m'}];

function genereteKeys(){
    keys.innerHTML = '';
    let count = 0;
    let countA = 1;
    for(i = 0; i < maxL; i++){
    
        let newKeys = document.createElement('div');
        newKeys.setAttribute('class','keys');
        keys.append(newKeys);
        let newKeyW = document.createElement('div');
        newKeyW.setAttribute('class','white-key');
        newKeys.append(newKeyW);
        newKeyW.innerText = keyboardAC[i].whiteKey;
        if(count<3 && countA === 2 && i < maxL-1){
            let newKeyB = document.createElement('div');
            newKeyB.setAttribute('class','black-key');
            newKeys.append(newKeyB);
            newKeyB.innerText = keyboardAC[i].blackKey;
            count++;
        }else if(count<2  && countA === 1 && i < maxL-1){
                let newKeyB = document.createElement('div');
                newKeyB.setAttribute('class','black-key');
                newKeys.append(newKeyB);
                newKeyB.innerText = keyboardAC[i].blackKey;
                count++;
        }else if(count ===3 && countA === 2){
            countA = 1;
            count = 0;
        }else{
            countA++;
            count = 0;
        }
    }
}

function assignAudio(){
    sounds.innerHTML = '';
    let count = 0;
    let countA = 1;
    for(i = 0; i < maxL; i++){
        let newAudioW = document.createElement('audio');
        newAudioW.setAttribute('id','s_key'+keyboardAC[i].whiteKey);
        newAudioW.setAttribute('src',`./Assests/sounds/WKey_${keyboardAC[i].whiteKey}.wav`)
        sounds.append(newAudioW);
        if(count<3 && countA === 2 && i < maxL-1){
            let newAudioB = document.createElement('audio');
            newAudioB.setAttribute('id','s_key'+keyboardAC[i].blackKey);
            newAudioB.setAttribute('src',`./Assests/sounds/BKey_${keyboardAC[i].blackKey}.wav`);
            sounds.append(newAudioB);
            count++;
        }else if(count<2  && countA === 1 && i < maxL-1){
            let newAudioB = document.createElement('audio');
            newAudioB.setAttribute('id','s_key'+keyboardAC[i].blackKey);
            newAudioB.setAttribute('src',`./Assests/sounds/BKey_${keyboardAC[i].blackKey}.wav`);
            sounds.append(newAudioB);
            count++;
        }else if(count ===3 && countA === 2){
            countA = 1;
            count = 0;
        }else{
            countA++;
            count = 0;
        }
    }
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
    assignAudio();
}