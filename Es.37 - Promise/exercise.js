const number = 15;
let numChecker = new Promise((resolve, reject) => {
    let check = number;
    if(check > 10) {
        resolve('maggiore di dieci')
    } else {
        reject('minore di dieci')
    }
})

numChecker.then((msg) => {
    console.log("risultato: " + msg);
}).catch((msg) => {
    console.log("risultato: " + msg);
})