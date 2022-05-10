const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '18');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const film1 = prompt('Один из последних просмотренных фильмов?', '');
const film1star = prompt('На сколько оцените его?', '');

const film2 = prompt('Один из последних просмотренных фильмов?', '');
const film2star = prompt('На сколько оцените его?', '');

personalMovieDB.movies[film1] = film1star;
personalMovieDB.movies[film2] = film2star;

console.log(personalMovieDB);