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

            newKeyW.addEventListener('click', () => {
                const sound = newKeyW.dataset.key;
                playSound(sound);
            });
        }
        if(key.blackKey){
            switch (maxL) {
                case 8:
                    if(key.blackKey != "("){
                        let newKeyB = document.createElement('div');
                        newKeyB.setAttribute('class','black-key');
                        newKeyB.setAttribute('data-key',`${key.blackKey}`);
                        newKeys.append(newKeyB);
                        newKeyB.innerText = key.blackKey;

                        newKeyB.addEventListener('click', () => {
                            const sound = newKeyB.dataset.key;
                            playSound(sound);
                        });
                    }
                    break;
                default:            
                        let newKeyB = document.createElement('div');
                        newKeyB.setAttribute('class','black-key');
                        newKeyB.setAttribute('data-key',`${key.blackKey}`);
                        newKeys.append(newKeyB);
                        newKeyB.innerText = key.blackKey;

                        newKeyB.addEventListener('click', () => {
                            const sound = newKeyB.dataset.key;
                            playSound(sound);
                        });
                    break;
            }
        }
    })
}