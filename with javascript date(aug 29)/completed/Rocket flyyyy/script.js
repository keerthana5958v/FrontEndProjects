const ROCKET = document.getElementById('rocky');
const DISPLAY = document.getElementById('displayMyTimer');

var aud = new Audio('MiAud.mp3');



function countDwn(){
    let ctDwn = 11;
    const RocketFlyyy = setInterval(function(){
        ctDwn--;
        aud.play();
        DISPLAY.textContent = ctDwn;
        if (ctDwn == 0){
            aud.play();
        }
        if(ctDwn== -1){
            // ctDwn=0;
            clearInterval(RocketFlyyy);
            ROCKET.style.marginBottom = '1000px';
            DISPLAY.textContent = '';
            // setInterval(window.location.reload(), 50000);
            setTimeout(function(){
                window.location.reload();
             }, 4500);
        }
    },1000)
}
