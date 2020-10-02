// https://www.codewars.com/kata/554a44516729e4d80b000012
// #fundamentals #maths #numbers

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    // amount of savings per month
    let moneySaved = 0;
    // number of months passed
    let nMonths = 0;
    // money reduced from the original price
    let reduceOld = startPriceOld;
    let reduceNew = startPriceNew;
    
    while((moneySaved + reduceOld) <= reduceNew){
        nMonths++;
        const percentage = (nMonths % 2 !== 0) ? percentLossByMonth : 2.0;
        reduceOld -= ((startPriceOld*percentage)/100);
        reduceNew -= ((startPriceNew*percentage)/100);
        moneySaved += savingperMonth;
    }
    const moneyLeft = (moneySaved + reduceOld) - reduceNew;
    
    return [nMonths, Math.round(moneyLeft)];
}