// https://www.codewars.com/kata/5d774cfde98179002a7cb3c8
// #fundamentals #OOP

function makeClass(...properties){
    return class{
      constructor(...args){
          properties.forEach(i => this[properties[i]] = args[i])
      }
    }
}