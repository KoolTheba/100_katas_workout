// https://www.codewars.com/kata/5610a8eeb9a84d624b000005
// #fundamentals #arrays #prototypes #OOP #inheritance

// My solution appears at:
// https://www.codewars.com/kata/5610a8eeb9a84d624b000005/solutions/javascript

Array.prototype.sortReloaded = function (dir='asc') {
    if(['asc', 'desc'].includes(dir)){
        return this.concat().sort((a, b) => {
            if (a > b) return dir === 'asc' ? 1 : -1;
            if (a < b) return dir === 'asc' ? -1 : 1;
            return 0
          });
    }
    return false;
};
