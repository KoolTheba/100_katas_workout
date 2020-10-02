// https://www.codewars.com/kata/559e10e2e162b69f750000b4
// #arrays #fundamentals

const dominator = (arr) =>  {
    const mid = parseInt(arr.length/2);

    let counted = arr.reduce((acc, curr) => { 
            if (curr in acc) {
                acc[curr]++;
            } else {
                acc[curr] = 1;
            }
            return acc;
    }, {});

    let item = Object.keys(counted).reduce((a, b) => counted[a] > counted[b] ? a : b);

    return Number(item) > 0 && counted[item] > mid ? Number(item) : -1;
}