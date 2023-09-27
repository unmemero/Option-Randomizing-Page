const optionBox = document.getElementById('optionBox');
const optionButton = document.getElementById('optionButton');
const randomButton = document.getElementById('randomChoiceButton');
const randomText = document.getElementById('randomChoiceText');
const optionListFrame = document.getElementById('optionListFrame');
const clearButton = document.getElementById('clearButton');

let options = [];
let index = 0;
optionButton.onclick = function(){
    if(optionBox.value === ''){
        window.alert('Please enter an option')
    }
    else{
        options.push(optionBox.value);
        optionListFrame.innerHTML += '<li>' + options[index] + '</li>';
        index++;
        optionBox.value = '';
    }
}

let randomizerRunning = false;
let randomTime = Math.floor(Math.random() * (6)+10)*1000;
randomButton.onclick = function(){
    randomizerRunning = true;
    let i=0;
    let intervalId = setInterval(function(){
        if(i >= options.length){
            i = 0; // reset the index if it exceeds the length of the array
        }
        randomText.innerHTML = options[i]; // display the current option
        i++;
    }, 200); // change option every 200 milliseconds
    setTimeout(function(){
        clearInterval(intervalId); // stop changing options after randomTime has passed
        randomizerRunning  = false;
    }, randomTime);
}

clearButton.onclick = function(){        
    if(!randomizerRunning) {
        options = [];
        index = 0;
        optionListFrame.innerHTML = '';
    }
    else{
        window.alert("Please wait until the randomizer finishes. Process to last " + (randomTime/1000) + " seconds.");
    }
}