
// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.


function getNumberOfElements(arr) {
    let newArr = []
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (sum <= 10) {
            newArr.push(arr[i])
        }
    }
    return newArr.length + 1
}

console.log(getNumberOfElements([2, 5, 3, 1, 4, 6, 7]))
console.log(getNumberOfElements([1, 2, 3, 4, 5, 6, 7]))

