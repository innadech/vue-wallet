let array = ['foo', 'bar', 'baz', 'bye']

// console.log(array.join(''))

// console.log(array.at(2))

// console.log(array.forEach(() => {}))

// console.log(array.flat().at(2))

let newSet = new Set(array)
let what = newSet.delete('baz')

console.log(newSet)
console.log(what)
what = newSet.delete('baz')
console.log(what)
