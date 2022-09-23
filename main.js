const convertir = document.getElementById('convertir');
const temperatura = document.getElementById('temperatura');
const tempError = document.getElementById('tempError');
const termometro = document.getElementById('termometro');
const marcador = document.getElementById('marcador');
const reset = document.getElementById('reset');
var confirmacion = false;
temperatura.addEventListener('input', () => {
  if(temperatura.value < 32) {
    tempError.style.display = 'block';
    tempError.textContent = 'La temperatura debe ser mayor a 32';
    confirmacion = false;
  } else if (temperatura.value > 212) {
    tempError.style.display = 'block';
    tempError.textContent = 'La temperatura debe ser menor a 212';
    confirmacion = false;
  }
  else {
    tempError.style.display = 'none';
    confirmacion = true;
  }
});
var porcentaje = 0;
function progress(i) {
    setTimeout(function() {
      marcador.textContent = `${i}°C`;
      marcador.style.height = `${i}%`;
    }, i * 10);
}

convertir.addEventListener('click', () => {
  const resultado = document.getElementById('resultado');

  if(confirmacion) {
    const celsius = ((temperatura.value - 32) * 5 / 9).toFixed(1);
    porcentaje =  (celsius * 100 / 100).toFixed(1);
    resultado.textContent = `${celsius} °C`;
    for(let i = 0; i <=porcentaje; i++) {
      progress(i);
    }
  }
});

reset.addEventListener('click', () => {
  temperatura.value = '';
  resultado.textContent = '';
  marcador.textContent = '';
  marcador.style.height = '0%';
});
// Language: javascript