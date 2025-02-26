const myObject = {
    name: "ikhlas",
    color: "brown",
    weight: "56kg"

}

console.log(myObject["name"])

console.log(Object.keys(myObject));
myObject.role = "SWE"

console.log(Object.keys(myObject));

console.log(myObject["role"])

console.log(Object.entries(myObject));

// console.log(Object.freeze(myObject));
myObject.character = "Good"

console.log(myObject);

console.log(Object.isFrozen(myObject));


