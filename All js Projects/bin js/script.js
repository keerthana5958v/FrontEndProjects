function clearInput() {
    document.getElementById('getTxt').value = '';
    document.getElementById('displayOP').textContent = '0';
}

function checkInput() {
    const inputValue = document.getElementById('getTxt').value;
    const inputBase = document.getElementById('select1').value;
    
    let validCharacters;
    switch (inputBase) {
        case 'binary':
            validCharacters = '01';
            break;
        case 'octal':
            validCharacters = '01234567';
            break;
        case 'hex':
            validCharacters = '0123456789ABCDEFabcdef';
            break;
        case 'decimal':
            validCharacters = '0123456789';
            break;
    }

    const validInput = [...inputValue].every(char => validCharacters.includes(char));

    if (!validInput) {
        document.getElementById('displayOP').textContent = 'Invalid Input';
        document.getElementById('displayOP').style.color = '#eb3d3d';
    } else {
        document.getElementById('displayOP').textContent = '0';
        calculate();
    }
}

function calculate() {
    const inputValue = document.getElementById('getTxt').value;
    const inputBase = document.getElementById('select1').value;
    const outputBase = document.getElementById('select2').value;
    const resultElement = document.getElementById('displayOP');
    resultElement.style.color = 'black'; // Set your desired text color

    if (isValidBase(inputBase) && isValidBase(outputBase)) {
        try {
            const decimalValue = parseInt(inputValue, getBaseValue(inputBase));
            
            if (!isNaN(decimalValue)) {
                const result = decimalToAnyBase(decimalValue, outputBase);
                console.log('Result:', result); // Log the result
                resultElement.textContent = result;
            } else {
                console.log('Failed to parse input as decimal');
                resultElement.textContent = 'Invalid Input';
                resultElement.style.color = '#eb3d3d';
            }
        } catch (error) {
            console.log('Error:', error.message);
            resultElement.textContent = 'Invalid Input';
            resultElement.style.color = '#eb3d3d';
        }
    }
}






function decimalToAnyBase(decimal, base) {
    if (base === 10) {
        return decimal.toString();
    }

    if (decimal === 0) {
        return '0';
    }

    let remainder = '';
    while (decimal > 0) {
        let currentRemainder = decimal % base;
        if (base === 16 && currentRemainder >= 10 && currentRemainder <= 15) {
            currentRemainder = String.fromCharCode('A'.charCodeAt(0) + currentRemainder - 10);
        }
        remainder = currentRemainder.toString() + remainder;
        decimal = Math.floor(decimal / base);
    }

    return remainder;
}


function getBaseValue(base) {
    switch (base) {
        case 'binary':
            return 2;
        case 'octal':
            return 8;
        case 'hex':
            return 16;
        case 'decimal':
            return 10;
        default:
            return 10;
    }
}

function isValidBase(base) {
    return ['binary', 'octal', 'hex', 'decimal'].includes(base);
}
