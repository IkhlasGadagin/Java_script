//call back function the function that accepts another function as the parameter 

function fetch(callback) {
    setTimeout(() => {
        const data = "ikhlas"
        callback(data, "server Error")

    }, 5000)


}

function work(data, error) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(data)

    }

}



fetch(work)