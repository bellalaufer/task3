// Напишите функцию, которая убирает повторяющиеся значения.
// Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]


function removeRepeats(arr) {

    return arr.filter((el, index) => arr.indexOf(el) === index)
}

console.log(removeRepeats([1, 2, 3, 1, 2]));