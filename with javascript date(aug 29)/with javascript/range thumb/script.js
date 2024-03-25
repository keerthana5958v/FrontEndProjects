const RANGE = document.getElementById('slider');
const T1 = document.getElementById('thumb1');

T1.textContent = 0

RANGE.addEventListener("mousemove",function(event){

    if(event.clientX <= (RANGE.getBoundingClientRect().left)){
        T1.style.left = (RANGE.getBoundingClientRect().left);
    } 
    
    else if (event.clientX >= RANGE.getBoundingClientRect().right) {
        T1.style.right = RANGE.getBoundingClientRect().right;
    } 
    
    else {
        T1.style.left = (event.clientX-T1.clientWidth/2)+"px";
    }
    let width = (RANGE.getBoundingClientRect().right - RANGE.getBoundingClientRect().left)
    let distance = T1.getBoundingClientRect().left - RANGE.getBoundingClientRect().left + 18
    distance = Math.floor(distance)
    if(distance < 1){distance = 0}
    if(distance > width){distance = width}
    let percentage;
    percentage = (distance / width) * 101
    percentage = Math.floor(percentage)
    // console.log(percentage)
    T1.textContent = percentage
})

