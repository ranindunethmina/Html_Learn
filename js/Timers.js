// 1. setTimeout - executes a function once after a specific delay
// setTimeout(callback, delay)
let timeout = setTimeout(() => { 
    console.log('Hellow...')
}, 5000)

// cancel the timeout
clearTimeout(timeout)

// 2. setInterval - executes function repeatedly, with a fixed time delay between each call
// setInterval(callback, interval)
let greet = () => {
    console.log('Hellow World!')
}
let interval = setInterval(greet, 1000);
// cancel the interval
// clearInterval(interval)