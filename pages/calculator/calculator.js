let screen = document.getElementById('display');
buttons = document.querySelectorAll('button');
let screenValue = '';



for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        
        else if (buttonText == '%') {
            screen.value = (screenValue/100);
            screenValue = screen.value;
        }
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
            screenValue = screen.value;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

