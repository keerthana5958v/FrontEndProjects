const TEXT = document.getElementById('textArea');
const CHARCOUNT = document.getElementById('displayCharCount');
const WORDCOUNT =document.getElementById('displayWordCount');
const LONGESTWORDLENGTH = document.getElementById('longestWord');
const AVGWORDLENGTH = document.getElementById('AvgWrdLen');

function charCount(){
    let len = TEXT.value.length;
    CHARCOUNT.textContent = len;
    return len;
}
function wordCount(){
    let wordCount = 0;
    if (TEXT.value != ''){
        wordCount = 1
    }
    for(let i = 0 ; i < charCount() - 1 ; i+=1){
        if(TEXT.value.charAt(i) == " " && TEXT.value.charAt(i+1) != " "){
            wordCount += 1;
        }
    }
    WORDCOUNT.textContent = wordCount;
    return wordCount;
}
function longestWord(){
    
    let arr= TEXT.value.split(' ');
    let no = 0;
    let longestWrd = '';
    for (let i = 0 ; i<arr.length ; i++){
        if (arr[i].length > no){
            no = arr[i].length;
            longestWrd = arr[i];
        }
    }
    LONGESTWORDLENGTH.textContent = longestWrd;
    
}
function averageWordLen(){
    let arr= TEXT.value.split(' ');
    let sum = 0;
    for (let i = 0 ; i < arr.length ; i++){
        sum += arr[i].length;
    }
    let avg = (sum / (arr.length)).toFixed(1);
    AVGWORDLENGTH.textContent = avg;

}

