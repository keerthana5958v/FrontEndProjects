const SECTION = document.getElementById('Wrapper');
const PUNCH = document.getElementById('looserPunch')
const RC = document.getElementById('selectRC'); 
const BUTTON = document.getElementById('StBtn');
const REFRESH = document.getElementById('reload');

const SCORE = document.getElementById('score');
var count=1;
let score = 0;
function increaseScore(){
    score++;
    SCORE.textContent = "YOUR SCORE: "+score;
    return score
}

function createRows(n){
     var outer = ""
     let count =0;
     for (let i=0; i<n; i++){
        outer+="<div class='rowWrap'>";
        for (let j=0; j<n; j++){
            outer+=`<div class='box' id='box${count}'> <div class="bg" onclick="this.style.backgroundColor = 'transparent';increaseScore()"> </div></div>`;
            count++;
        }
        outer+="</div>";
    }
    SECTION.innerHTML = outer;
    // BUTTON.style.display = 'none';
    RC.style.display = 'none';
    let randId = `box${Math.floor(Math.random() * (n * n))}`
    var RANDBOX = document.getElementById(randId);
    RANDBOX.innerText = '\uD83D\uDCA3'; 
    RANDBOX.style.cursor = "pointer";
    RANDBOX.style.color = "transparent";
    RANDBOX.style.backgroundColor = "blue";
    RANDBOX.addEventListener("click", function(){
        RANDBOX.style.color = "black";
        RANDBOX.style.backgroundColor = "transparent";
        PUNCH.style.top = '30%';
        REFRESH.style.display = 'block';
    })
    return RANDBOX;
}
function startGame(){
    RC.style.display = 'block';
    BUTTON.style.display = 'none';
}



