function i(id){
    return document.getElementById(id);
}
const parent = i('parent');

let idNum = 1

function createBox(n){
    for(let i = 0 ; i < n ; i++){
        const box = document.createElement('div')
        parent.appendChild(box);
        box.classList.add('box')
        box.setAttribute('id',`b${idNum}`)
        let bxClr = window.getComputedStyle(document.querySelector(".box")).getPropertyValue('background-color');

        const boxes = document.querySelectorAll(".box");

        boxes.forEach(function(box) {
            const childElements = box.querySelectorAll("*");
            childElements.forEach(function(element) {
                element.style.backgroundColor = box.style.backgroundColor;
            });
        });
        document.getElementById(`b${idNum}`).style.backgroundColor = randomColor();

        const bChild1 = document.createElement('div')
        box.appendChild(bChild1);
        bChild1.classList.add('bchild')
        bChild1.classList.add('bchild1')

        const bChild2 = document.createElement('div')
        box.appendChild(bChild2);
        bChild2.classList.add('bchild')
        bChild2.classList.add('bchild2')

        const bChild3 = document.createElement('div')
        box.appendChild(bChild3);
        bChild3.classList.add('bchild')
        bChild3.classList.add('bchild3')

        const bChild4 = document.createElement('div')
        box.appendChild(bChild4);
        bChild4.classList.add('bchild')
        bChild4.classList.add('bchild4')

        const bChild5 = document.createElement('div')
        box.appendChild(bChild5);
        bChild5.classList.add('bchild')
        bChild5.classList.add('bchild5')

        idNum++;
        // colourBoxes()
        
    }
}

function infiniteScrollHandler(ev){
    const relativeBottomPosition = document.body.getBoundingClientRect().bottom;
    const windowHeight = this.innerHeight;
    if(relativeBottomPosition - windowHeight < 10){
        createBox(12)
    }
}
// window.addEventListener("scroll", function(){
//     const scrolledToBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
//     if (scrolledToBottom) {
//         createBox(10);
//     }
// });
window.addEventListener('scroll',infiniteScrollHandler);
createBox(20)

function randomNum(upperLimit){
    return Math.floor(Math.random() * (upperLimit) + 1);
}
function randomColor(){
    let randColor = `rgb(${randomNum(255)},${randomNum(255)},${randomNum(255)})`;
    return randColor;
}
// function colourBoxes(){
//     // randcolor1 = randomColor();
//     document.querySelectorAll(".box").forEach(function(Element){
//         Element.style.backgroundColor = randomColor();
//     });
// }
