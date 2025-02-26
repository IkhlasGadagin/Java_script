/* 
typing some thing really works understand the concepts deeply the problem we are facing aboy the call backe is the call back hell
that eventually leads to 
the referenct is passed to the called function that holdec the data 
Closer count example
*/

function a() {
    let num = 1
    return function inner() {
        console.log(num++)
    }

}

const ans = a()
ans();
ans();
ans();

console.log("ikhlas")