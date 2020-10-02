// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/
// #fundamentals #strings

const DNAStrand = (dna) => {
    const dicc = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C',
    }
    return dna.split('').map(e => dicc[e] || e).join('')
}