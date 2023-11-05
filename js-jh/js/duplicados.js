// EJERCICIO 3

const numeros = [2,1,2,3,1,4,5,1]

function encontrarDuplicados (numeros){
    let duplicados = [];
    for (let i = 0; i < numeros.length ; i++){
        for (let j = i+1 ; j < numeros.length ; j++){
            if (numeros[i]==numeros[j]  && !duplicados.includes(numeros[i])){
                duplicados.push(numeros[i]);
            }
        }
    }
    return duplicados 
}

console.log(encontrarDuplicados(numeros));