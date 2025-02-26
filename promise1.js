function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data Fetched successfully resolved")
        }, 6000)
    })

}

getData().then((data) => {
    console.log("data success", data)
})
    .catch((error) => {
        console.log("if the promise is rejected", error);

    })