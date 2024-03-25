function create(){
    let w = "";
    count = 1;
    for(let i = 0 ; i < 4 ; i++){
        w += `<div class="row">`;
        for(let j = 0 ; j < 4 ; j++){
            w += `<div class="box" id='#${count}'></div>`;
            count++;
        }
        w += "</div>";
    }
    document.getElementById('wrap').innerHTML = w;
}
create()

function randomNum(upperLimit){
    return Math.floor(Math.random() * (upperLimit) + 1);
}
let score = 0 
let x = function(){
    document.getElementById(lid).style.filter = 'brightness(100%)';
    score++
    document.getElementById("score").textContent = score;
    randomColor();
    if(score%10 == 0){
        document.body.style.backgroundColor = `rgb(${randomNum(255)},${randomNum(255)},${randomNum(255)})`;
    }
}

function randomColor(){
    let color;
    color = `rgb(${randomNum(255)},${randomNum(255)},${randomNum(255)})`;
    let boxs = document.querySelectorAll('.box');
    boxs.forEach(function(Element){
        Element.style.backgroundColor = color;
    });
    lighterBox();
}

randomColor()

function lighterBox(){
    lid = `#${randomNum(16)}`;
    // console.log(lid)
    document.getElementById(lid).style.filter = 'brightness(70%)';
    for(let j = 1; j < 17 ; j++){
        if(`#${j}` === lid){
            document.getElementById(`#${j}`).addEventListener("click" , x)
        }
        else{document.getElementById(`#${j}`).removeEventListener("click", x);}
    }
}

