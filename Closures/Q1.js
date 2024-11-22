let intializeCountr = function(){
    let count = 0
    return {
        increment(){
            count++
        },
        decrement(){
            count--
        },
        getValue(){
            return count
        }
    }
}
let counter1 = intializeCountr()
counter1.increment()
counter1.increment()
console.log(counter1.getValue()) // -> 2
counter1.decrement()
console.log(counter1.getValue()) // -> 1
counter1.count = 10
console.log(counter1.getValue()) // -> 1
