let add = a => (b => a + b)
let inc1 = add(1)

console.log(add(9))
console.log(add(9)(10))
console.log(inc1(9))
 