let expresion = '';

function presionarBoton(valor) {
    expresion += valor;
    document.getElementById('pantalla').value = expresion;
}

function calcular() {
    try {
        document.getElementById('pantalla').value = eval(expresion);
        expresion = '';
    } catch (e) {
        document.getElementById('pantalla').value = 'Error';
        expresion = '';
    }
}

function limpiar() {
    expresion = '';
    document.getElementById('pantalla').value = expresion;
}

function mostrarReloj() {
    const reloj = new Date().toLocaleTimeString();
    document.getElementById('reloj').textContent = reloj;
}

setInterval(mostrarReloj, 1000);
