let spacesText = '      x-124 324324              '

spacesText = spacesText.replaceAll(' ', '')

console.log(parseInt(spacesText) || 0)

console.log(!!spacesText)
console.log(spacesText !== '')

console.log(spacesText.trim())

console.log(!!spacesText.trim())
console.log(spacesText.trim() !== '')

let validatedText = spacesText.trim()
let validetedInt = parseInt(spacesText)
validetedInt
validatedText
validatedText = +validatedText
validatedText
console.log(validetedInt > 0)

/**
 * <input type="text">
 * <input type="number">
 *
 */

let objA = {
  x: '42',
}
let objB = {
  x: 42, // положительное число
}
let objBB = {
  x: -42,
}
let objC = {
  x: 42n,
}
// объекты с разной структурой

// IncomeCategory
