const arr = [1, 2, 3, 2, 2, 7, 8]
const ans = arr.reduce((acc, curr) => {

    return acc + curr

}, 0)

console.log(ans)