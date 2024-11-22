
//Implement a function that partially applies arguments to another function
// using closures.
//(For example, const add5 = partial(add, 5); add5(3) should return 8.)

let add = function(a, b){
    return a+b
}
let partial = function(fun, val){
    return function(a){
        return fun(a, val)
    }
}
let add5 = partial(add, 5)
console.log(add5(3))

//output: 8