function SICalc(){
    let PRINCIPAL = document.getElementById('principal').value;
    const RATE = document.getElementById('rate').value;
    const YEAR = document.getElementById('year').value;
    // console.log(YEAR);
    const TIME = document.getElementById('time').value;
    if(RATE == '' || TIME =='' ){
        SI = 'not valid data';
        var AMOUNT = 'not valid data';
        PRINCIPAL = 'not valid data';
        document.getElementById('displayPrincipal').style.color = "#952323"
        document.getElementById("displaySI").style.color = "#952323"
        document.getElementById("displayAmount").style.color = "#952323"
    }
    else if (YEAR == 'Years'){
        var SI = ((PRINCIPAL * RATE * TIME)/100).toFixed(2);
        AMOUNT = PRINCIPAL - SI;
        document.getElementById('displayPrincipal').style.color = "#000"
        document.getElementById("displaySI").style.color = "#000"
        document.getElementById("displayAmount").style.color = "#000"
    }
    else if (YEAR == 'month'){
        SI = ((PRINCIPAL * RATE * (TIME/12))/100).toFixed(2);
        AMOUNT = PRINCIPAL - SI;
        document.getElementById('displayPrincipal').style.color = "#000"
        document.getElementById("displaySI").style.color = "#000"
        document.getElementById("displayAmount").style.color = "#000"
    }
    displaySI.value = SI;
    displayAmount.value = AMOUNT;
    displayPrincipal.value = PRINCIPAL;
}

function reset(){
    displaySI.value = '';
    displayAmount.value = '';
    displayPrincipal.value = '';
    document.getElementById('principal').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('time').value='';
}