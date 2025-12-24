let set = new Set(['a', 'b', 'c'])

set

let copySet = new Set(set)

set.delete('b')

set

set

copySet

console.log(set === copySet)
