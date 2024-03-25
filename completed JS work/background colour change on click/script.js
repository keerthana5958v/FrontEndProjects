function randNumGen(maxVal){
    return Math.round(Math.random() * maxVal);
}
function getRGBVal(){
    return `rgb(${randNumGen(255)},${randNumGen(255)},${randNumGen(255)})`;
}

function BGColor(){
    document.body.style.backgroundColor = getRGBVal();
}
function buttonColor(){
    myBtn.style.backgroundColor = getRGBVal();
}
