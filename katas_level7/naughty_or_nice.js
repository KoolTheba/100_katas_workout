// https://www.codewars.com/kata/52a6b34e43c2484ac10000cd
// #fundamentals #arrays

const getNiceNames = (people) => people.filter((p) => p.wasNice).map(p => p.name);

const getNaughtyNames = (people) => people.filter((p) => !p.wasNice).map(p => p.name);