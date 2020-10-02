// https://www.codewars.com/kata/59c5f4e9d751df43cf000035
// #fundamentals #strings

function solve(s){
    const separateVowels = s.replace(/[^aeiou]/ig, ' ').split(' ');
    const longest = separateVowels.reduce((longest, vowelGroup) => {
      return vowelGroup.length > longest.length ? vowelGroup : longest;
    }, '');
  
    return longest.length;
};