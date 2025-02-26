function getDataFromDataBase() {

    try {
        return new Promise((res, rej) => {
            return setTimeout(() => {
                rej("Failure")
            }, 5000)
        })
    } catch (error) {
        console.log(error)
    }
}



getDataFromDataBase()
    .then((data) => {
        console.log("when the data is Resolved", data)
    })
    .catch((error) => {
        console.log("when the dta is Rejected", error)
    });