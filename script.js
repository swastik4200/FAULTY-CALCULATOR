// FAULTY CALCULATOR 
let random = Math.random()
let a = prompt("Enter the fist number")
let b = prompt("Enter the second number")
let c = prompt("Enter the operation")
let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "*",
}


if (random > 0.1) // it performs correct operation
{
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)

}
else {
    c = obj(c)
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
