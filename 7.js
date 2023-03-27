// Напишите функцию, которая сравнивает два массива и возвращает true,
// если они идентичны.
// Ожидаемый результат:
// ([1, 2, 3], [1, 2, 3]) => true
// ([1, 2, 3], [1, 2, 3, 4]) => false

const compareArr = (arr1, arr2) => {
    if (arr1.join() === arr2.join()) {
        return true
    } else {
        return false
    }

}

console.log(compareArr([1, 2, 3], [1, 2, 3]))