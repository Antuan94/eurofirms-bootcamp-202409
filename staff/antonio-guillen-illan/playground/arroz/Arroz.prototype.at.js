var Arroz = function () { this.length = 0 }

Arroz.prototype.at = function (index) {
    if (index > -1)
        return this[index]
    else
        return this[this.length + index]
}

console.log('TEST Arroz.prototype.at')

console.log('CASE get element at index 2')

var things = new Arroz
things[0] = 100
things[1] = true
things[2] = 'hola mundo'
things[3] = { a: 1, b: 2, c: 3 }
things[4] = null
things[5] = undefined
things[6] = function () { return 'hello world' }
things.length = 7
var element = things.at(2)
console.log(element)
// hola mundo

console.log('CASE get alement at index 3')

var things = new Arroz
things[0] = 100
things[1] = true
things[2] = 'hola mundo'
things[3] = { a: 1, b: 2, c: 3 }
things[4] = null
things[5] = undefined
things[6] = function () { return 'hello world' }
things.length = 7
var element = things.at(3)
console.log(element)
// { a: 1, b: 2, c: 3 }

/*Cuando es un indice negativo, modificamos codigo de la siguiente
 manera: 
 Arroz.prototype.at = function (index) {
    if (index > -1)
        return this[index]
    else
        return this[this.length + index]
}
 De esta manera ademas hemos acortado el codigo para que sea mas sencillo: 
 de if (index >= 0) a if (index > -1)
*/

console.log('CASE get alement at offset -1')

var things = new Arroz
things[0] = 100
things[1] = true
things[2] = 'hola mundo'
things[3] = { a: 1, b: 2, c: 3 }
things[4] = null
things[5] = undefined
things[6] = function () { return 'hello world' }
things.length = 7
var element = things.at(-1)
console.log(element)
// function () { return 'hello world' }
console.log(element())
// hello world

console.log('CASE get alement at offset -3')

var things = new Arroz
things[0] = 100
things[1] = true
things[2] = 'hola mundo'
things[3] = { a: 1, b: 2, c: 3 }
things[4] = null
things[5] = undefined
things[6] = function () { return 'hello world' }
things.length = 7
var element = things.at(-3)
console.log(element)
// null



/* Cuando el indice (1000) no existe nos devolverá 
undefined */

console.log('CASE get alement at 1000')

var things = new Arroz
things[0] = 100
things[1] = true
things[2] = 'hola mundo'
things[3] = { a: 1, b: 2, c: 3 }
things[4] = null
things[5] = undefined
things[6] = function () { return 'hello world' }
things.length = 7
var element = things.at(-1000)
console.log(element)
// undefined


/* Cuando el indice (-1000) no existe nos devolverá 
undefined
*/

console.log('CASE get alement at -1000')

var things = new Arroz
things[0] = 100
things[1] = true
things[2] = 'hola mundo'
things[3] = { a: 1, b: 2, c: 3 }
things[4] = null
things[5] = undefined
things[6] = function () { return 'hello world' }
things.length = 7
var element = things.at(-1000)
console.log(element)
// undefined 