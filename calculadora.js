function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function appendNumber(number) {
    let display = document.getElementById('display').innerText;
    if (display === '0') {
        document.getElementById('display').innerText = number;
    } else {
        document.getElementById('display').innerText += number;
    }
}

function appendSymbol(symbol) {
    let display = document.getElementById('display').innerText;
    if (symbol === '√') {
        display = '√(' + display + ')';
        document.getElementById('display').innerText = display;
    } else {
        document.getElementById('display').innerText += symbol;
    }
}

function calculateResult() {
    let display = document.getElementById('display').innerText;
    try {
        // Reemplaza el símbolo de división y multiplicación por los correctos
        display = display.replace(/÷/g, '/').replace(/×/g, '*').replace(/√/g, 'Math.sqrt');
        document.getElementById('display').innerText = eval(display);
        
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
    }
}
