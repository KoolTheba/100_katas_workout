// https://www.codewars.com/kata/5d49c93d089c6e000ff8428c
// #fundamentals #arrays #lists #dataStructures

const save = (sizes, hd) => {
    let sum = 0;
    let turns = 0;
    for(let i = 0; i < sizes.length; i++, turns++){
      if((sum + sizes[i]) > hd) break;
      sum += sizes[i];
    }
    return turns;
}