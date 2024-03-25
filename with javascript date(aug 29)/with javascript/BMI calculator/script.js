
const DISPLAY = document.getElementById('display');

function q(id){
    return document.getElementById(id);
}
function plus(){
    let W = q('weight');
    W.value = (+W.value) + 1;
    W.textContent = W;
}
function minus(){
    let W = q('weight');
    W.value = (+W.value) - 1;
    W.textContent = W;
}


function calcBMI(){
    let H = q('height').value;
    let W = q('weight').value;
    let BMI;
    BMI = +((W) / ((H/100)*(H/100)));
    if(!BMI || BMI === Infinity || BMI === undefined || H === null || W === null  || BMI > 50 || BMI < 10){
        DISPLAY.textContent = 'Enter proper value'
        setTimeout(function(){
            DISPLAY.textContent = '';
        },5000)
    }
}
function result(){
    calcBMI()
    let propVal;
    let H = q('height').value;
    let W = q('weight').value;
    let BMI;
    BMI = +((W) / ((H/100)*(H/100)));
    propVal = !(!BMI || BMI === Infinity || BMI === undefined || H === null || W === null  || BMI > 50 || BMI < 10)

    if(BMI < 18.5 && propVal){
        q("r1").style.display = 'block';
    }
    if(18.5 < BMI && BMI <= 24 && propVal){
        q("r2").style.display = 'block';
    }
    if(BMI > 24 && propVal){
        q("r3").style.display = 'block';
    }
    BMI = BMI.toFixed(2);
    if(BMI[BMI.length - 1]== 0 && BMI[BMI.length - 2]== 0){
        BMI = BMI.substring(0,2);
    }
    else if(BMI[BMI.length - 1]== 0 ){
        BMI = BMI.substring(0,4);
    }
    const D = document.getElementsByClassName("disbmi")
    for(let i = 0 ; i < D.length ; i++){
        D[i].textContent = BMI
    }
}
function reset(){
    q("r1").style.display = 'none';
    q("r2").style.display = 'none';
    q("r3").style.display = 'none';
}
