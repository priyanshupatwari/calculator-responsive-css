let inputField = document.getElementById('inputField');
buttons = document.querySelectorAll('button');
// -> buttons in array
let inputFieldValue = '';
for (eachButton of buttons) {
    // ->Create this function for every button through this LOOP
    eachButton.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            inputFieldValue += buttonText; // add `*` without removing the previous value
            inputField.value = inputFieldValue; //DISPLAY on webPage
        }
        else if (buttonText == 'C') {
            inputFieldValue = "";
            inputField.value = inputFieldValue; //DISPLAY on webPage
        }
        else if (buttonText == '=') {
            inputField.value = eval(inputFieldValue); //DISPLAY on webPage
        }//If none of above
        else {
            inputFieldValue += buttonText;
            inputField.value = inputFieldValue; //DISPLAY on webPage
        }
    })
    
}

