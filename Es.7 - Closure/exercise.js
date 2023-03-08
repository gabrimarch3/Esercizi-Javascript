function printName() {
    let helloName = "Hello Jhon";
    function inner() {
        setTimeout( () => {
            console.log(helloName);
        }, 1000)
    }
    return inner;
}

printName()();