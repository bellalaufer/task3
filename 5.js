// Напишите функцию, возвращает новый массив без предоставленных значений.
// Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]



function cutOutNum(arr, a, b) {

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === a || arr[i] === b)
            arr.splice(i, 1)
    }
    return arr
}

console.log(cutOutNum([1, 2, 3, 1, 2], 1, 2))