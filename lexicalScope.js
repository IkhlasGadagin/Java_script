// the function from the outer in acceebaple by the inner function 

const num = 10

function outer() {
    const num = 100

    function inner() {
        const num = 1000
        console.log(num)
    }
    inner()
}

outer()