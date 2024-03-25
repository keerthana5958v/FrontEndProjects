function isEven(){
    const INP = parseInt(document.getElementById('getInp').value);
    if (!isNaN(INP)){
        if (INP%2==0){
            display.value = `${INP} is even`;
        }
        else{
            display.value = `${INP} is not even`;
        }
    }

}

function divBy5(){
    const INP = parseInt(document.getElementById('getInp').value);
    if (!isNaN(INP)){
        if (INP%5==0){
        display.value = `${INP} is divisible by 5`;
    }
    else{
        display.value = `${INP} is not divisible by 5`;
    }
    }
}

function EndWith0(){
    const INP = parseInt(document.getElementById('getInp').value);
    if (!isNaN(INP)){
        if (INP%10==0){
        display.value = `${INP} ends with zero`;
    }
    else{
        display.value = `${INP} does not end with zero`;
    }
    }
}

function isPrime(n){
    const INP = parseInt(document.getElementById('getInp').value);
    if (!isNaN(INP)){
        if (n <= 1) {
            return false;
        }
        if (n <= 3) {
            return true;
        }
        if (n%2 === 0 || n % 3 === 0) {
            return false;
        }
        for (let i = 5; i * i <= n; i += 6) {
            if (n % i === 0) {
                return false;
            }
        }
    }
    return true;
}
function checkPrime(){
    const INP = parseInt(document.getElementById('getInp').value);
    if (isPrime(INP)){
        display.value = `${INP} is prime`;
    }
    else{
        display.value = `${INP} is not prime`;
    }
}