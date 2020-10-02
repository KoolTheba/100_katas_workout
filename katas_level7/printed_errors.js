// https://www.codewars.com/kata/56541980fa08ab47a0000040
// #fundamentals

function printerError(s) {
    const arr = s.split('').filter(el => (el.charCodeAt() < 97 || 109 < el.charCodeAt()));
    return `${arr.length}/${s.length}`
}