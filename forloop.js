// the main use of the loop is to iterate the string or the array or unto the condition is khatam 
//inner loop is also opossible types of loop are 
// for , for in , for of 


function abiwakas() {
    for (let i = 0; i <= 10; i++) {
        console.log(`the value out side j ${i}`)
        for (let j = 0; j <= 10; j++) {
            console.log(`the  value inside j loop ${j}J  ${i}I`)

        }

    }

}
abiwakas()

const myObject = {
    name: "ikhlas",
    adress: "gadagin"
}

for (let value in myObject) {
    console.log(value)
}
console.log("for loop")

// for each will not return any thing 
const arr = [2, 3, 4, 2, 4, 2, 2]

const ans = arr.forEach((element) => {
    console.log(element * 2);

})
console.log(ans);
