function getDataFromDataBase() {

    try {
        return new Promise((res, rej) => {
            return setTimeout(() => {
                res("The Data Got successfully")
            }, 5000)
        })
    } catch (error) {
        console.log(error)
    }
}

function daPayment() {

    try {
        return new Promise((res, rej) => {
            setTimeout(() => {
                return res("the payment done successfully")
            }, 5000)
        })
    } catch (error) {
        console.log(error);

    }
}


getDataFromDataBase()
    .then((data) => {
        console.log("when the data is Resolved", data)
    })
    .then(daPayment)
    .then((data) => {
        console.log("the payment is donr", data)
    })
    .catch((error) => {
        console.log("when the dta is Rejected", error)
    });