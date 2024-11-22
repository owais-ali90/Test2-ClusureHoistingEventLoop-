/*
Create a function that generates a list of functions, where each function 
returns its index in the list.
(For example, if the list has three functions, calling the first function
 should return 0, the second 1, and so on.)
*/

let fatherFunc = function(n){
    let func = []
    for(let i = 0; i < n; i++){
        func.push(function(){
            return i
        })
    }
    return func
}
let son = fatherFunc(3)
console.log(son[1]())//output 1
console.log(son[0]())//output 0