const buttons  = document.querySelectorAll('button');
let screen = document.getElementById('screen');
let screenValue = '';
function square(inputValue){
    return inputValue*inputValue;
}

for (const item of buttons) {
    item.addEventListener('click', (event) =>{
        buttonText=event.target.innerText;
        
        if(buttonText === 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText === '<'){
            screenValue = screen.value.slice(0, screen.value.length-1);
            screen.value = screenValue;
        }
        else if(buttonText == 'Sq'){
            const number = screen.value;
            screenValue = square(number);
            screen.value = screenValue; 
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
        
    } )
}