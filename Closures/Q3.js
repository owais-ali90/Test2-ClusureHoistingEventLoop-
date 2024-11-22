// Write a function that creates a timer using closures.
// The timer should start at 0, increment by 1 every second, 
//and provide a method to pause and resume the timer.

let initializeTimer = function(){
    let time = 0
    let state = null
    return {
        start(){
            state = setInterval(()=>{time++}, 1000)
            console.log('Timer Started')
        },
        pause(){
            clearInterval(state)
            console.log('Timer Paused')
        },
        resume(){
            state = setInterval(()=>{time++}, 1000)
            console.log('Timer Started')
        },
        reset(){
            time = 0
            console.log('Timer Reseted')
        },
        showTime(){
            return time
        },
        
    }
}
let timer1 = initializeTimer()
let delayer = function(fun,time) {
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            fun()
            res(true)
        },6000)
    })
}
let control = async function(){
    timer1.start()       // start timer
    await delayer(timer1.pause, 6000)   //wait for 6 seconds and pause
    console.log('time: '+timer1.showTime()) //show what is the time
    timer1.start() //resume the counter
    await delayer(timer1.pause, 3000) //wait for 3 seconds and pause
    console.log('time: '+timer1.showTime()) //show what is the time
    timer1.reset() //reset time to zero
    console.log('time: '+timer1.showTime()) 
    timer1.start()
    await delayer(timer1.pause, 2000)
    console.log('time: '+timer1.showTime())
    
}
control()
