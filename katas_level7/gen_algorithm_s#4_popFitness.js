// https://www.codewars.com/kata/567b468357ed7411be00004a
// #algorithms #arrays #geneticsAlgorithms

const mapPopulationFit = ((population, fitness) => {
    return new Array(population.length).fill().map((e, i) => {
       return {
        chromosome: population[i],
        fitness: fitness(population[i])
        }
    });
});