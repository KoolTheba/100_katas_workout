// https://www.codewars.com/kata/5b5097324a317afc740000fe
// #fundamentals #arrays

function binaryCleaner(a) {
    const a1 = a.filter((n) => (n < 2));
    const a2 = a.map((n, i) => n > 1 ? i : null).filter(n => n !== null);
    return [a1, a2]
}