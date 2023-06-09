// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(item => item.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(item => item.director === director);
  console.log('EXERCISE 2 -> ', result);
  return result;  
}

//FUNCTION TO CALCULATE AVERAGE SCORES. EXCERCISES 3 & 6
function moviesAverage(filtered) {
  const scores = filtered.map(item => item.score);
  return Number(((scores.reduce((counter,item) => counter + item, 0))/filtered.length).toFixed(2))
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let filtered = array.filter(item => item.director === director);
  let result = moviesAverage(filtered);
  console.log('EXERCISE 3 -> ', result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = (array.map(element => element.title)).sort();
  console.log(result);
  if (result.length > 20) {result.length = 20};
  console.log('EXERCISE 4 -> ', result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const ordered = (array.sort((a, b) => {
    if (a.year > b.year) {return -1;};
    if (a.year < b.year) {return 1;};
    if (a.year = b.year) {array.sort()}
    return 0;
  })).reverse();
  let result = ordered.map(element => element);
  console.log('EXERCISE 5 -> ', result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  filtered = (array.filter(item => item.genre.includes(category) && item.score !== ''));
  let result = moviesAverage(filtered);
  console.log('EXERCISE 6 -> ', result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let result = array.map(item => {
    const num = (item.duration.replace('h', '').replace('min', '')).split(' ');
    const hours = (Number(num[0]))*60;
    const mins = Number(num[1]);
    let onlyMins;
    if(isNaN(mins)){onlyMins = hours}
    else {onlyMins = hours + mins};

    return {...item, duration: onlyMins};
  });
  console.log("EXERCISE 7 ->", result);
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let result = ((array.filter(item => item.year === year)).sort((a, b) => {
    if (a.score > b.score) {return -1;}
    if (a.score < b.score) {return 1;}
    return 0;
  }));
  result.length = 1
  console.log('EXERCISE 8 -> ', result);
  return result;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
