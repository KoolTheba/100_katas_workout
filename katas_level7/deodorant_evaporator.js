// https://www.codewars.com/kata/5506b230a11c0aeab3000c1f
// #fundamentals

function evaporator(evap_per_day, threshold){ 
    let days = 0;
    let total = 100;

    while(total >= threshold){
        total -= total * evap_per_day / 100;
        days++;
    }

    return days;
}