const para = `Amidst the storm's fury, she found a handwritten letter from a lost love. Tearfully, she realized he'd been searching, and their reunion began with rain-kissed cheeks and a promise of forever.`
let splitWord = para.split("")
console.log(splitWord)
let id = document.getElementById('id')
id.innerHTML = ''
document.body.addEventListener('keydown', function(eve){
    console.log(eve.key)
    if(eve.key==splitWord[0]){
        document.getElementById(`id`).style.color = 'green';
        splitWord = splitWord.splice(1, splitWord.length)
    }
})
for(let i = 0 ; i < splitWord.length ; i++){
    id.innerHTML += `<span id='sp${i}'>${splitWord[i]}</span>`
    
}
