// https://www.codewars.com/kata/56311e4fdd811616810000ce
// #fundamentals #algorithms #numbers #dataStructures #classes #basicLanguageFeatures #OOP #controlFlow

function List(){
    this.countSpecDigits=function(integersList, digitsList){
      const count = (arr, val) => arr.join('').split('').filter((n) => (n === `${val}`)).length;
      return digitsList.map((e) => [e, count(integersList, e)]);
    }
}