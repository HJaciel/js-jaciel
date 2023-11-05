// EJERCICIO 1

const palabra = "Hola , Mundo!";



function contarPalabras(palabra){
   const textoSinPuntuacion = palabra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
   const palabrasSinEspaciosExtras = textoSinPuntuacion.replace(/\s+/g, ' ').trim();
   const c = palabrasSinEspaciosExtras.split(' ').length;
   return c;
}

console.log(contarPalabras(palabra));