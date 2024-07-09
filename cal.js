let display = document.getElementById('display');
 //let string='';
function clearDisplay() {
    display.textContent = '0';
}
function delet(){

    display.textContent= (display.textContent).substring(0, ( display.textContent).length-1);
    
}
function appendToDisplay(value) {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = 'Error';
    }
}