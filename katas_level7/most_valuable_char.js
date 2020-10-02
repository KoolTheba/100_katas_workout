// https://www.codewars.com/kata/5dd5128f16eced000e4c42ba
// #fundamentals #notALevel7


function solve(st) {
    const dicc = {};
    const arr = st.split('');

    arr.forEach((e, index) => {
      if (!dicc[e]) {
        dicc[e] = {
            first: index,
        };
      } else {
        dicc[e].diff = index - dicc[e].first;
      }
    })

    let maxDiff = { value: 0};

    for (const letter in dicc) {
        if (dicc.hasOwnProperty(letter)) {
            const element = dicc[letter];
            if(maxDiff.value < element.diff) {
                maxDiff.value = element.diff;
                maxDiff.letter = letter;
                maxDiff.first = element.first;
                maxDiff.siblings = null
            };
            if(maxDiff.value === element.diff){
               if (!maxDiff.siblings) maxDiff.siblings = []
               maxDiff.siblings.push({
                value: element.diff,
                letter: letter,
                first: element.first,
                asciiValue: letter.charCodeAt()
               })
            }
        }
    }

    if(maxDiff.siblings) {        
        return maxDiff.siblings.sort((a, b) => a.asciiValue - b.asciiValue)[0].letter;
    }

    return !maxDiff.letter ? st[0] : maxDiff.letter;
}