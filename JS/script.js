const numberOfFilms = prompt("Which number of films did you see?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

for (let i = 0; i < 2; i++) {
	const a = prompt("One of the last watched movies?", "");
	b = prompt("how much would you rate it?", "");

	if (a != null && b != null && a != "" && b != "" && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log("done");
	} else {
		console.log("error");
		i--;
	}
}

if (personalMovieDB.count < 10) {
	console.log("you have seen quite a few films");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log("you are a classic spectator");
} else if (personalMovieDB.count >= 30) {
	console.log("you are a movie fan");
} else {
	console.log("something goes wrong");
}

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Your favorite film on number ${i}`);
	}
}
writeYourGenres();
