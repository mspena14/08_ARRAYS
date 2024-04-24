console.groupCollapsed("Manejo de Arrays")
console.groupCollapsed("Formas de crear arrays")
const array1 = new Array(4)// [ , , , ]
const array2 = Array("a", "b", "c")
const array3 = []

console.log(array1)
console.log(array2)
console.log(array3)
console.groupEnd()

console.group("consultar datos del array")
const array = [1, 2, 3, 4, 5, "hola", "mundo", true, false, "alpha"]

console.log(array)
console.log(`La longitud del array es ${array.length}`)
console.log(array[9])//No se puede usar -1 debe ser la posisción real
console.log(array[array.length - 1])//Alternativa con [] para traer el último elemento del array
console.log(array.at(-1))//Se puede usar el -1 para traer el último elemento
console.log(array.includes("mundo"))//Devuelve un booleano "true"
console.log(array.indexOf("mundo"))//Devuelve el index del elemento y si no está devuelve -1
console.log(array.includes("Mundo"))//valida mayusculas y minusculas
console.log(array.indexOf("Mundo"))//valida mayusculas y minusculas

console.groupEnd()

console.group("Actualizar elementos del array")
console.log(array)
array[5] = "hello"
console.log(array)
/* array.at(6) = "world" */ //No funciona para realizar alguna modificacion al array solo para mostrar info
array.splice(6, 1, "world")//Sive para reemplazar toma como parametro primero el indice, luego cuantos espacios va quitar para ingresar el tercer parametro que es el nuevo valor
console.log(array)

//agregar un elemento 
array[10] = "bravo" //sobrescribe o agrega si no hay algún elemento en esa posicion
array.push("bravo")
array.push("charlie")//push agrega los elementos al final del array

array.unshift("-1")//unishift agrega al inicio del array
array.unshift("-2")

console.log(array)
console.groupEnd()

console.group("Eliminar elementos del array")
array.pop()//Eliminar el elemento de la ultima posicion
console.log(array)
array.pop(0)//No recibe parametros sigue eliminando el último

let backUpElement = array.pop()
console.log(backUpElement)//Se puede guardar el elemento y usarlo luego

delete array[0]//Elimina el contenido pero deja el espacio vacio
array.shift()//Eliminar el elemento de la primer posicion
console.log(array)
console.groupEnd()

console.group("Sumar arrays")
/* const object1 = {
    nombre: "marlon",
    apellido: "peña"
}

const object2 = {
    nombre: "camilo",
    ciudad: "medellin"
}
console.log(object1)
console.log(object2)

Object.assign(object1, object2)
console.log(object1)
let object3 = {
    ...object1,
    ...object2
}
console.log(object3) */
let primerosNumeros = [1, 2, 3, 4, 5]
let segundosNumeros = [6, 7, 8, 9, 10]

console.log(primerosNumeros)
console.log(segundosNumeros)

let sumaNumeros1 = primerosNumeros.concat(segundosNumeros)//asignar elementos
segundosNumeros = segundosNumeros.concat(primerosNumeros, true)//Sumar las listas

console.log(sumaNumeros1)
console.log(segundosNumeros)
console.groupEnd()

console.group("Listar información arrays")
const listaSupermercado = [
    "arroz",
    "pan",
    "arepa",
    "aguapanela",
    "huevos",
    "guaro",
    "pescado",
    "leche",
    "carne"
]
console.groupCollapsed("comun for")
for (let i = 0; i < listaSupermercado.length; i++) {
    const producto = listaSupermercado[i]
    console.log(producto)
}
console.groupEnd()

console.groupCollapsed("while")
contador = 0

while (contador < listaSupermercado.length) {
    console.log(listaSupermercado[contador])
    contador++
}
console.groupEnd()

console.groupCollapsed("for of")
for (let producto of listaSupermercado){
    console.log(producto)
}
console.groupEnd()

console.groupCollapsed("for each")
listaSupermercado.forEach((producto, index) => {
    console.log(`producto #${index + 1} ${producto}`)
})
console.groupEnd()

console.groupCollapsed(".map ")
let listaMayus1 = listaSupermercado.map((producto, index) => {
    return`producto #${index + 1} ${producto.toUpperCase()}`
})

let listaMayus2 = listaSupermercado.map(producto => producto.toUpperCase())

console.log(listaMayus1)
console.log(listaMayus2)
console.log(listaSupermercado)
console.groupEnd()
console.groupEnd()