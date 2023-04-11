function repeatHello(callback) {
    let helloLoop = setInterval(callback, 1000);
    setTimeout(() => {
        clearInterval(helloLoop)
    }, 5000);
}

repeatHello(() => console.log("hello!"));
