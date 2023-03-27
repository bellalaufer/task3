// Заполните массив следующим образом: в первый элемент запишите '1', 
// во второй '22', в третий '333' и так далее.

function getArr(n) {
    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(String(i))
    }
    const newArr = [];
    for (let i = 1; i < arr.length; i++) {
        newArr.push(arr[i].repeat(i))
    }
    return newArr
}

// Вариант 2:
// function getArr(n) {
//   const arr = Array.from({ length: n }, (_, i) => i.toString());
//   return arr.slice(1).map((s, i) => s.repeat(i + 1));
// }

console.log(getArr(10))


// let arr = []
// for (let i = 1; i < 10; i++) {
//     arr.push( `${i}`.repeat(i) ) ;
// }
// console.log(arr);