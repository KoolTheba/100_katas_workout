// https://www.codewars.com/kata/5bbb8887484fcd36fb0020ca
// #fundamentals

const catchSignChange = arr => {
    let count = 0;
    arr = arr.map(e => {
      return e === 0 ? 1 : e;
    });
    for(let i = 0; i <= arr.length -2; i++){
        if(Math.sign(arr[i]) !== Math.sign(arr[i+1])) count++;
    }
    return count;
};