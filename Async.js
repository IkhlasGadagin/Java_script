function getImportantData() {
    return new Promise((res, rej) => {

        setTimeout(() => {
            return res("Promise responded")
        }, 5000)

    })
}


function getPaymentDetails() {
    return new Promise((res, req) => {
        return setTimeout(() => {
            return res("payment Success")
        }, 8000)
    })

}


async function fetchData() {

    try {
        const result = await getImportantData();
        const payment = await getPaymentDetails();
        console.log(result, payment);

    } catch (error) {
        console.log(error, "promise is rejected");

    }
}

fetchData()