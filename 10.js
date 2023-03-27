//Напишите функцию, которая создаст массив из уникальных значений, 
// которые есть в каждом из предоставленных массивов.
// Ожидаемый результат: 
// ([1, 2], [2, 3]) => [2]
// (['a', 'b'], ['b', 'c'], ['b', 'e', 'c']) => ['b']


const func = (...arrays) => {
    const result = arrays[0].filter((element) => {
        let indexOfElement = arrays[1].indexOf(element);
        if (indexOfElement >= 0) {
            return element;
        }
    });
    return result;
};

console.log(func(['a', 'b'], ['b', 'c'], ['b', 'e', 'c']));