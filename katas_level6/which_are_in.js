// https://www.codewars.com/kata/550554fd08b86f84fe000a58
// #ARRAYS #SEARCH #ALGORITHMS #LISTS #STRINGS

const inArray = (arr1, arr2) => {
    const prepareStr = (s) => s.normalize().toLowerCase()
    const strCompare = (s2, s1) => prepareStr(s2).includes(prepareStr(s1))

    const matches = []

    for ( let i = 0; i < arr2.length; i++ ) {
        for ( let j = 0; j < arr1.length; j++ ) {
            if ( arr2[i] && arr1[j] && strCompare(arr2[i], arr1[j])) matches.push(arr1[j])
        }
    }
    return [...new Set(matches)].sort()
}