const numberOfFilms = prompt("Which number of films did you see?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const a = prompt("One of the last watched movies?", "");
b = prompt("how much would you rate it?", "");
c = prompt("One of the last watched movies?", "");
d = prompt("how much would you rate it?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
