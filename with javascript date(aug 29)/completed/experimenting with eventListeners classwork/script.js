const X = document.getElementById('div');
document.body.addEventListener('mousedown', function(event){
    console.log(event);
    X.style.top = event.clientY+"px";
    X.style.left = event.clientX+"px";
})