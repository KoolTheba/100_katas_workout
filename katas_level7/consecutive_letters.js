// https://www.codewars.com/kata/5ce6728c939bf80029988b57
// #fundamentals

function solve(s){
    const arr = s.split('');
    const arrUnique = arr.filter((e, i, arr) => arr.indexOf(e) === i);

    if(arrUnique.length !== s.length) return false;

    let isConsec = true;

    arr.map(e => e.charCodeAt())
        .sort((a, b) => a - b)
        .forEach((e, i, arr) => {
        const nextElem = arr[i+1];
        if(nextElem && nextElem != e+1) isConsec = false;
    });

    return isConsec;
}