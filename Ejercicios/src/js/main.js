console.group("Ejercicios Arrays")
// Ejercicios Arrays
console.group("Ejercicio 1")
// 1. Crea un array llamado frutas que contenga al menos 5 nombres de frutas diferentes.
let frutas = [
    "manzana",
    "pera",
    "naranja",
    "sandia",
    "piña"
]
console.log(frutas)
console.groupEnd()

console.group("Ejercicio 2")
// 2. Utiliza un bucle for para recorrer el array frutas e imprimir cada elemento en la consola.
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}
console.groupEnd()

console.group("Ejercicio 3")
// 3. Utiliza un foreach para recorrer el array frutas e imprimir cada fruta en mayúscula en la consola.
frutas.forEach(fruta => {
    console.log(fruta.toUpperCase())
})
console.groupEnd()

console.group("Ejercicio 4")
// 4. Crea un array llamado números que contenga los números del 1 al 10.
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numeros)
console.groupEnd()

console.groupCollapsed("Ejercicio 5")
// 5. Utiliza un bucle while para recorrer el array numeros e imprimir cada elemento en la consola.
let contador = 0

while (contador < numeros.length) {
    console.log(numeros[contador])
    contador++
}
console.groupEnd()

console.groupCollapsed("Ejercicio 6")
// 6. Agrega una nueva fruta al final del array frutas.
frutas.push("mandarina")
console.log(frutas)
console.groupEnd()

console.groupCollapsed("Ejercicio 7")
// 7. Elimina el segundo elemento del array números.
// delete numeros[1]
numeros.splice(1, 1)
console.log(numeros)
console.groupEnd()

console.groupCollapsed("Ejercicio 8")
// 8. Invierte el orden de los elementos en el array frutas.
frutas.reverse()
console.log(frutas)
console.groupEnd()

console.group("Ejercicio 9")
// 9. Ordena el array numeros en orden descendente.
numeros.sort((a, b) => b - a)
console.log(numeros)
console.groupEnd()

console.groupCollapsed("Ejercicio 10")
// 10. Crea una función llamada buscarFruta que tome como argumento una fruta y devuelva true 
//si esa fruta está en el array frutas, y false en caso contrario.
function buscarFruta(fruta) {
    return frutas.includes(fruta)
}
console.log(buscarFruta("manzana"))
console.groupEnd()

console.groupCollapsed("Ejercicio 11")
// 11. Imprime en la consola el primer elemento del array frutas.
console.log(frutas[0])
console.groupEnd()

console.groupCollapsed("Ejercicio 12")
// 12. Imprime en la consola el último elemento del array numeros.
console.log(numeros.at(-1))
console.groupEnd()

console.groupCollapsed("Ejercicio 13")
// 13. Utiliza el método forEach para imprimir cada fruta pero convertida a array.
frutas.forEach
console.groupEnd()
// 14. Utiliza un bucle for of para imprimir cada número del array numeros en la consola.
// 15. Crea un nuevo array llamado duplicados que contenga el doble de cada número en el array
// numeros utilizando el método map.
// 16. Crea dos arrays llamados array1 y array2, cada uno con al menos 3 números.
// 17. Calcula la suma de los elementos de array1 y array2 por separado y muestra los resultados
// en la consola.
// 18. Crea una función llamada buscarNumero que tome como argumentos un número y un
// array de números, y devuelva true si el número está en el array, y false en caso contrario.
// 19. Crea un array llamado edades que contenga al menos 5 números (edades).
// 20. Filtra el array edades para obtener un nuevo array llamado mayoresDeEdad que contenga
// solo las edades mayores o iguales a 18.
// 21. Crea un array llamado precios que contenga al menos 3 números (precios de productos).
// 22. Utiliza el método map para crear un nuevo array llamado preciosConIVA que contenga los
// precios con un 21% de IVA aplicado a cada uno.
console.group("Ejercicio 23")
// 23. Crea un array llamado duplicados que contenga algunos números duplicados.
let duplicados = [1, 1, 2, 2, 2, 3, 3, 4, 4, 3, 5, 5, 6]
console.log(duplicados)
console.groupEnd()

console.group("Ejercicio 24")
// 24. Elimina los elementos duplicados del array duplicados y muestra el nuevo array sin duplicados en la consola.
let arraySinDuplicados = []

for (let i = 0; i < duplicados.length; i++) {
    let duplicado = false
    for (let j = 0; j < arraySinDuplicados.length; j++) {
        if (duplicados[i] === arraySinDuplicados[j]) {
            duplicado = true
            break
        }
    }
    if (!duplicado) {
        arraySinDuplicados.push(duplicados[i])
    }
}

console.log(arraySinDuplicados)
// 25. Crea dos arrays llamados array1 y array2, cada uno con al menos 3 nombres.26. Concatena los dos arrays en uno nuevo llamado concatenado y muestra el resultado en la
// consola.
// 27. Crea un array llamado colores que contenga al menos 5 colores diferentes.
// 28. Cuenta cuántos elementos tiene el array colores y muestra el resultado en la consola.

console.groupEnd()