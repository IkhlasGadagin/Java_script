const fun1 = function () {
    console.log("the fun1 is executed")
}

function abi(method) {
    console.log("insode the abi")
    method()
}

abi(fun1)