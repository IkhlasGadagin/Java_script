
function getImportantData() {
    try {
        return Promise.resolve("error in the promise")
    } catch (error) {

        console.log(error);

    }
}

getImportantData().then(result => {
    console.log("the resolved Ans ", result);

})
    .catch(error => {
        console.log("Rejected", error)
    })