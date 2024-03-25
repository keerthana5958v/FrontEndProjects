const FULLBOX = document.getElementById('fullbox');
const SWITCH = document.getElementById('roundSwitch');

const ARC1 = document.getElementById('arc1');
const ARC2 = document.getElementById('arc2');
const ARC3 = document.getElementById('arc3');

const SUN = document.getElementById('sun');
const MOON = document.getElementById('moon');

const CLOUD1 = document.getElementById('cloud1');
const CLOUD2 = document.getElementById('cloud2');
const CLOUD3 = document.getElementById('cloud3');

const BATMAN = document.getElementById('iAmBatman');

const TXT = document.getElementById('batmantxt');
var isMoved = false;

function switchRight(){
    SWITCH.style.transform = "translate(150px)";
    SWITCH.style.backgroundColor = "rgb(225,230,255)";
    SWITCH.style.border = ' 4px solid rgb(245,245,255)';
    SWITCH.style.borderStyle = 'outset';

    ARC1.style.transform = "rotateY(180deg)";
    ARC2.style.transform = "rotateY(180deg)";
    ARC3.style.transform = "rotateY(180deg)";
    ARC3.style.backgroundColor = "rgb(53,71,95)"
    ARC2.style.backgroundColor = "rgb(17,41,73)"
    ARC1.style.backgroundColor = "rgb(23,26,54)"
    ARC1.style.zIndex = 1
    ARC2.style.zIndex = 2
    ARC3.style.zIndex = 3

    SUN.style.transform = 'translate(-85px , 50px)';
    MOON.style.transform = 'translate(0px ,0px)';

    CLOUD1.style.transform = 'translate(-45px)';
    CLOUD2.style.transform = 'translate(-45px)';
    CLOUD3.style.transform = 'translate(-45px)';

    CLOUD1.style.backgroundColor = 'rgb(133, 150, 181)';
    CLOUD2.style.backgroundColor = 'rgb(133, 150, 181)';
    CLOUD3.style.backgroundColor = 'rgb(133, 150, 181)';
}
function switchLeft(){
    SWITCH.style.transform = "translate(0px)";
    SWITCH.style.backgroundColor = "rgb(230,250,255)";
    SWITCH.style.border = '4px solid rgb(122,179,239) ';
    SWITCH.style.borderStyle = 'inset';

    ARC1.style.transform = "rotateY(0deg)";
    ARC2.style.transform = "rotateY(0deg)";
    ARC3.style.transform = "rotateY(0deg)";
    ARC1.style.backgroundColor = "rgb(222,236,251)"
    ARC2.style.backgroundColor = "rgb(190,218,247)"
    ARC3.style.backgroundColor = "rgb(122,179,239)"
    ARC3.style.zIndex = 1
    ARC2.style.zIndex = 2
    ARC1.style.zIndex = 3

    SUN.style.transform = 'translate(0px , 0px)';
    MOON.style.transform = 'translate(-25px , -35px)';

    CLOUD1.style.transform = 'translate(0)';
    CLOUD2.style.transform = 'translate(0px)';
    CLOUD3.style.transform = 'translate(0px)';

    CLOUD1.style.backgroundColor = 'rgb(245, 250, 255)';
    CLOUD2.style.backgroundColor = 'rgb(245, 250, 255)';
    CLOUD3.style.backgroundColor = 'rgb(245, 250, 255)';
}
function clicked(){
    if (!isMoved) {
        switchRight();
        document.body.style.backgroundColor = 'rgb(9, 11, 31';
        BATMAN.style.opacity =1;
        TXT.style.color = 'rgb(210,6,27)';
        TXT.style.top = '15%';
        isMoved = true;
    } else {
        switchLeft();
        document.body.style.backgroundColor = 'rgb(189, 211, 255)';
        BATMAN.style.opacity = 0;
        isMoved = false;
        TXT.style.color = 'transparent';
        TXT.style.top = '80%';
    }
}