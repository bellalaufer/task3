//Напишите функцию, которая разделяет массив на части заданного размера.
// Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

function nestedArr(arr, num) {

    const res = [];
    for (let i = 0; i < arr.length; i += num) {
        const chunk = arr.slice(i, i + num);
        res.push(chunk);
    }
    return res;
}
console.log(nestedArr([1, 2, 3, 4, 5], 2))