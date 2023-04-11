const user = {
  id: 1,
  name: "John",
  age: 25,
};

let objectUser = localStorage.setItem("User", JSON.stringify(user));
console.log(JSON.parse(objectUser));

