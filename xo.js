let z = 2;

function openBorder(){
    let border = document.querySelector('.border');
    let kubik;
    for(let i = 1; i < 21; i++){
        for(let j = 1; j < 21; j++){
            kubik = document.createElement('div');
            kubik.className = 'kubik';
            let w = i + ' ' + j;
            kubik.id = w;
            kubik.onclick = pressButton;
            border.appendChild(kubik);
        }
    }
}
openBorder();

function pressButton(){
    if(this.innerHTML == ''){
        if(z % 2 == 0){
            this.style.background = 'lime';
            let xo = this.innerHTML = 'X';
            z++;
            return search(xo);
        }else {
            this.style.background = 'blue';
            let xo = this.innerHTML = 'O';
            z++;
            return search(xo);
        }
    }
}

function search(xo){
    for(let i = 1; i < 21; i++){
        for(let j = 1; j < 17; j++){
            let c = 0;
            for(let k = 0; k < 5; k++){
                if(document.getElementById(i + ' ' + (j + k)).innerHTML == xo || document.getElementById((j + k) + ' ' + i).innerHTML == xo){
                    c++;
                    if(c != 5){
                        continue;
                    }return endGame(xo);
                }continue;
            }
        }
    }for(let i = 1; i < 17; i++){
        for(let j = 1; j < 17; j++){
            let c = 0;
            for(let k = 0; k < 5; k++){
                if(document.getElementById((i + k) + ' ' + (j + k)).innerHTML == xo){
                    c++;
                    if(c != 5){
                        continue;
                    }return endGame(xo);
                }continue;
            }
        }
    }for(let i = 5; i < 21; i++){
        for(let j = 1; j < 17; j++){
            let c = 0;
            for(let k = 0; k < 5; k++){
                if(document.getElementById((i - k) + ' ' + (j + k)).innerHTML == xo){
                    c++;
                    if(c != 5){
                        continue;
                    }return endGame(xo);
                }continue;
            }
        }
    }
}

function endGame(xo){
    document.querySelector('.border').style.display = 'none';
    let end = document.querySelector('.end');
    end.innerHTML = 'The ' + xo + '-s WIN';
}
