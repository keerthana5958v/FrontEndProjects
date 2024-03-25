let input= document.getElementById('input').value;
console.log(input)

function getValue(input){
    myArr = input.split(",");
    console.log(myArr);
    console.log(typeof(myArr));
    return myArr;
}

function checkValidity(){
    arr = getValue(document.getElementById('input').value)
    arr.forEach(element => {
        if(element){
            console.log("not valid input")
        }
        else{
            console.log("wefsd")
        }
    });
    console.log(arr)
}

