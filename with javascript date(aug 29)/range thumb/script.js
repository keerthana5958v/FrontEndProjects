const RANGE = document.getElementById('slider');
const T1 = document.getElementById('thumb1');
RANGE.addEventListener("mousemove",function(event){

    if(event.clientX <= RANGE.getBoundingClientRect().left){
        T1.style.left = '0px';
        T1.style.transform = 'translate(-100%)';
    } 
    
    else if (event.clientX >= RANGE.getBoundingClientRect().right) {
        T1.style.right = '100%'
        T1.style.transform = 'translateX(-100%)';
        // console.log(event);
    } 
    
    else {
        T1.style.left = (event.clientX - RANGE.offsetLeft)+"px";
        // console.log(event);
    }
})

