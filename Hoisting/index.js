/*
Q1:Explain the difference in hoisting behavior between var, let, and const with an example. How would you demonstrate these differences in a real-world use case?
What will the following code output, and why?

Answer:
console.log(a);
var a = 10;
let b = 20;
console.log(b);

output will be :
    undefined
    20

Because during the compilation variable declared with var and function declaration 
moved to top of the code, this mechanism is called Hoisting
But only the declaration of variable moved to top, not it's assignment and assign
it undefined until get to it's assignment line, so on consoling 
it give undefined. 
something like this:

var a;
console.log(a);
a = 10;
let b = 20;
console.log(b);

let and const also hoist (they go in Temporal Dead Zone)but they are not assigned undefined and they are not acessible
if we try access them we got Error.

Q2:Modify the code so that it doesn’t throw an error or print undefined.

Answer:
var a = 10
console.log(a)
let b = 20
console.log(b)

Q3:Write a function that demonstrates hoisting by declaring both a function and a 
variable with the same name. Explain the output when the function is called.
Answer:
*/

//Case 1(If we try to access them before there intialization line)
function demonstrate1(){
    return a
    var a=10;
    function a(){
        return 5
    }
    
}
console.log(demonstrate1()) 
// output will be 'function'
// becase function declaration goes to the top then comes variable declaration
//something like this 
//function a(){
//  return 5
// }
//var a;
//console.log(a) --> Function

//Case 2(When we access them after there intialization line)
function demonstrate2(){
    var b=10;
    function b(){
        return 5
    }
    return b
}
console.log(demonstrate2()) 
//output will be 10
//because 10 assign to b at the last 
//so it overrighten
// like this
// function b (){
//  return 5
// }
//  var b;
//  b = 10
//console.log(b) //return---> 10





/*
Q4: What is the scope of variables declared with var, let, and const when used inside loops? Provide an example that uses hoisting to illustrate your explanation.

//var is function Scope 
//if we intialized a var variable inside a function we can't access it outside of
//that function. But if it is initialized inside a block {} like, if,elseif,else,for, it can be accessible
//of outside of that block but with in parent funcion scope
//it also hoisted inside the function scope it is defined

//let and const are block scope means they can only be accessible inside the block 
// where they are initialized

Example:
*/
for(let i = 0; i < 3; i++){
    const a = 2;
    var b = 0
}
console.log(b) // output --> 0 //because variable declared with var is not block scope
// console.log(a) //Error: a is not defined
// console.log(i)  //Error: b is not defined

/*
Q5: How does function expression hoisting differ from function declaration hoisting? Write code to demonstrate the difference.

Answer: function expression with var keyword hoisted but only the declaration part
    not the assignment part so on trying to access above in the code it will give undefined.*/
    console.log(funExpVar) //output: undefined
    var funExpVar = function(){
        console.log('Function Expression with var')
    }
/*  But function expression with let and const go to TDZ and on accessing before intializing would
    give Error */
    // console.log(funExpLet) //Error: Cannot access 'funExpLet' before initialization
    let funExpLet = function(){
        console.log('Function Expression with Let')
    }
    // console.log(funExpConst) //Error: Cannot access 'funExpConst' before initialization
    const funExpConst = function(){
        console.log('Function Expression with Const')
    }

/*    function declaration hoist at the top most and on accesing before intializaion line
    behave normally
*/  
    funVar() //output: Function declaration
    function funVar(){
        console.log('Function declaration')
    }
