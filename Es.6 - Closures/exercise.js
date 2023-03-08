function printName() {
    let helloName = "Hello Jhon";
    function inner() {
        return helloName;
    }
    return inner;
}

console.log(printName()());