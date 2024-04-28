let intervalId = setInterval(() => {
    console.log('Hellow')
}, 500);

setTimeout(() => {
    clearInterval(intervalId)
}, 5000)