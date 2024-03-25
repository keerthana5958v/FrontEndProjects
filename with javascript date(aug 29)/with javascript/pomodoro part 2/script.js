
// constant time for 1 minute, it is 1 second now change it later
// 1000 --> 1 second
const oneSecond = 1000;
const oneMinute = oneSecond * 60;
let aud = new Audio("alarm.wav");
const run = document.getElementById('run')
const pauseB = document.getElementById('pause')
// const select = document.getElementById('select')

function i(id){
    return document.getElementById(id);
}
let time = i('time')
let second = i('second')

let min = 0;
let strMin;
let sec = 0;
let strSec;

let inter;
function validateTxtContent(){
    if(min < 10){
        strMin = "0" + min
    }else{strMin = min}
    if(sec < 10){
        strSec = "0" + sec
    }else{strSec = sec}
    if(min < 1){
        strMin = "00"
    }
    if(min > 0 && sec < 0){
        min--
        if(min < 10){
            strMin = "0" + min
        }else{strMin = min}
        sec = 60
        strSec = 59
    }
    time.textContent = strMin;
    second.textContent = strSec;
}


function timerRun(minute){
    clearInterval(inter);
    aud.pause();
    min = minute;
    inter = setInterval(function(){
        if(min >= 0){
            sec--
            validateTxtContent()
        }
        if(sec < 1 && min == 0){
            clearInterval(inter)
            validateTxtContent()
            second.textContent = '00';
            aud.play();
        }
        else if(min < 1 && sec < 1){setTimeout(function(){
            sec = 0
            strSec = '00';
            aud.play();
            // clearInterval(inter);
            second.textContent = '00';
            time.textContent = '00'
        }, oneSecond)}
    },oneSecond);

    run.style.display = "none";
    pauseB.style.display = "block";
    // select.style.visibility = 'hidden'
}
// function txt(){
//     if (document.getElementById('select').value== 5)
//     document.getElementById('time').textContent = '05'
//     else{
//         document.getElementById('time').textContent = document.getElementById('select').value
//     }
// }
function pause(){
    pauseB.style.display = "none"
    run.style.display = "block"
    // select.style.visibility = 'visible'
    aud.pause();
    if(min < 10){
    document.getElementById('time').textContent = "0" + min;}
    if(min < 1){
        min = 0
        document.getElementById('time').textContent = "00"
    }
    clearInterval(inter);
}
//////////////////////////////////////////
let C1 ='#5b3256';  //txt 
let C2='#ffc87c';  // bg
let icon = document.querySelectorAll('.container *');

let bool = true
let theme = 1
function dispInfo(){
    const parinfo = i('info');
    const info = i('dispinfo');
    if(bool){
        info.innerHTML = `<i class="fa-solid fa-circle-xmark" onclick="dispInfo()"></i>`
        info.style.color = C1;
        parinfo.style.transform = 'translateX(0%)';
        i('palette').style.display = 'none'
        bool = false
    }
    else{
        info.style.color = C1;
        info.innerHTML = `<i class="fa-solid fa-circle-info" onclick="dispInfo()">`
        parinfo.style.transform = 'translateX(180%)';
        i('palette').style.display = 'block'
        bool = true
    }
}

let clr = document.querySelectorAll('.BGClr')
let txtclrChange1 = document.querySelectorAll('.txtClr')
let txtclrChange2 = document.querySelectorAll('i');
let bgChange = document.querySelectorAll('.bt');

function darkTheme(){
    document.body.style.backgroundColor = C2
    // bg colors -->
    clr.forEach(function(ele){
        ele.style.color = C2
    })
    i('section').style.backgroundColor = C2
    i('info').style.backgroundColor = C2
    icon.forEach(function(ele){ele.style.borderColor = `${C1}66`;});
    /////// text colors -->
    txtclrChange1.forEach( function(ele){
        ele.style.color = C1
    })
    txtclrChange2.forEach( function(ele){
        ele.style.color = C1
    })
    bgChange.forEach( function(ele){
        ele.style.backgroundColor = C1
    })
    i('div').style.borderColor = C1
    i('info').style.borderColor = C1
    i('div').style.boxShadow = `0 0 0 12px ${C1}77`
    i('dispinfo').style.color  = C1

}

function colorSwitch(){
    if(theme==1){
        C1 = '#306030'  //txt
        C2 = '#ffffe0'  //bg
        theme = 2
    }
    else if(theme == 2){
        C1 = '#ef98aa'
        C2 = '#1d2951'
        theme = 3
    }
    else{
        C1 = '#5b3256'
        C2 = '#ffc87c'
        theme = 1
    }
    darkTheme()
}

function changeTime(thiss){
    min = i('time').textContent
    // console.log(min)
    icon.forEach(function(ele){ele.style.border = `2px solid ${C1}66`;});
    thiss.style.border = `2px solid ${C1}`;
    pause()
    sec=0;
    second.textContent = '00';
}