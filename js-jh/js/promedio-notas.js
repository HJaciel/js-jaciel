// EJERCICIO 2

const estudiantes = [{nombre: "Pedro", notas:[96,97,98,90],},{nombre: "Maria", notas:[94, 95, 86, 87]}];

function calcularPromedioNotas(estudiante){
    let s = 0;
    for (let i = 0 ; i < estudiante.notas.length ; i++){
         s = s + estudiante.notas[i];
    }
    const promedio = s/estudiante.notas.length;
    return {nombre: estudiante.nombre, promedio: promedio};
}


/* estudiantes.forEach((estudiante) => {
    console.log(calcularPromedioNotas(estudiante))
})
 */

const resultados = estudiantes.map(estudiante => calcularPromedioNotas(estudiante));
console.log(resultados);
