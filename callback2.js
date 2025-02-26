// the function that accepts another function as the parameter

function fetchData(closer) {
    setTimeout(() => {
        return closer(30)
    }, 5000)
}

function getAllData(a) {
    console.log(a)

}

fetchData(getAllData)