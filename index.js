import { Rectagle } from './practices/practice01.js'
import { Computer, Laptop } from './practices/practice03.js'
import './practices/practice02.js'

// Validacion de la implementacion de la clase Rectagle
console.info('Practica 01')
const rect1 = new Rectagle(4, 5)
console.log(rect1.calculateArea()) // Output: 20
rect1.changeDimensions(6, 7)
console.log(rect1.calculateArea()) // Output: 42

const rect2 = rect1.copy()
console.log(rect2.calculateArea()) // Output: 42

console.log(rect1.compare(rect2)) // Output: 'equal'
rect2.changeDimensions(10, 12)
console.log(rect1.compare(rect2)) // Output: 'smaller'

// Validación de la implementacion del nuevo metodo par los Array's
console.info('\nPractica 02')
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.calculateAverage()) // Output: 3

// Validación de la implementación de la clase 'Computer' y la clase 'Laptop'
console.info('\nPractica 03')
const myComputer = new Computer('HP', 'Pavilion')
console.log(myComputer.toString()) // Output esperado: "HP Pavilion, RAM: 4GB, Hard Drive: 512GB, Screen: 17 inches"

const myLaptop = new Laptop('Dell', 'XPS 13')
console.log(myLaptop.toString()) // Output esperado: "Dell XPS 13, RAM: 4GB, Hard Drive: 256GB, Screen: 12 inches, Battery Life: 4 hours"
