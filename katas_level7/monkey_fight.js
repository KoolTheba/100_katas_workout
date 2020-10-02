// https://www.codewars.com/kata/570ef4d6127ad17515000b87
// #fundamentals #objects #properties #OOP

// My solution appears HERE! https://www.codewars.com/kata/570ef4d6127ad17515000b87/solutions/javascript

function biteMeMonkey (monkObj, clientObj, terrain) {
  
    const powerLevels = {
    orangutans: 5,
    chimpanzees: 3,
    gorillas: 9,
    crew: 1
    }
  
    function getFightValue (ob1, ob2){
      Object.keys(ob1).forEach(key => {
      if (ob2.hasOwnProperty(key)) {
        ob1.hitPoints += ob1[key] * ob2[key]
        }
      })
      return ob1.hitPoints;
    }
  
    let primN = getFightValue(monkObj, powerLevels);
    let humanN = getFightValue(clientObj, powerLevels);
  
    terrain === 'island' ? humanN += 20 : primN += 10
  
    if (monkObj.janeReporting4Duty === true) {
      primN *= (monkObj.chimpanzees/2);
    }
  
    return primN >= humanN 
    ? "Abandon ship! Save your own skin and blame it on the 'modestly-sized' yacht!"
    : "Everything's good, I'll see you in the office on Monday."
}