const COLOR = ["peru","green","bisque","khaki","gray","darkcyan","coral"]

function func(){
    for(let x = 0 ; x < COLOR.length ; x++){
        document.body.innerHTML += `<div class="box" id="${COLOR[x]}" onclick="colourChanger('${COLOR[x]}')">${COLOR[x]}</div>`
    }
}
function colourChanger(color){
    let box = document.getElementById(color);
    if(box.style.backgroundColor != color){
        box.style.backgroundColor = color
    }
    else{
        box.style.backgroundColor = "transparent"
    }
}