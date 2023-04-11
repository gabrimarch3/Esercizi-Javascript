const isLogged = true;
const logInChecker = (isLogged) => {
    return new Promise((resolve, reject) => {
        if(isLogged == true) {
            resolve(Math.random())
        } else {
            reject(new Error("User must log in!"))
        }
    })
}

const getUserData = (number) => {
    return new Promise((resolve, reject) => {
        if(number > 0.5) {
            resolve({name: "Jhon", age: 25});
        } else {
            reject(new Error("Number is less than 0.5!"))
        }
    })
}

logInChecker(isLogged)
.then(getUserData)
.then((userData) => console.log(userData))
.catch((error) => console.log(error))
.finally(() => console.log("Esercizio riuscito! Halleluja"))
