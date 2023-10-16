'use strict'

// =====Первая домашняя работа=====

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?'),
  firstAnswer = prompt('Один из послдених просмотренных фильмов?'),
  secAnswer = prompt('На сколько оцените его?'),
  threeAnswer = prompt('Один из послдених просмотренных фильмов?'),
  fourAnswer = prompt('На сколько оцените его?'),
  personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
  },
  personalArray = personalMovieDb.movies;


personalArray[firstAnswer] = secAnswer;
personalArray[threeAnswer] = fourAnswer;

console.log(personalArray);
