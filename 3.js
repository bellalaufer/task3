function getCleanArr(arr) {

    //Способ 1:
    //return arr.filter(Boolean)

    //Способ 2:
    //splice меняет индексацию, поэтому лучше отсчитывать с конца массива

    for (let i = arr.length - 1; i >= 0; i--) {
        if (!arr[i]) {
            arr.splice(i, 1)
        }
    }
    return arr

}



console.log(getCleanArr([0, 1, false, 2, undefined, '', 3, null]))
