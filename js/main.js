'use strict'

// =====Первая домашняя работа=====

// const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?'),
//   firstAnswer = prompt('Один из послдених просмотренных фильмов?'),
//   secAnswer = prompt('На сколько оцените его?'),
//   threeAnswer = prompt('Один из послдених просмотренных фильмов?'),
//   fourAnswer = prompt('На сколько оцените его?'),
//   personalMovieDb = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//   },
//   personalArray = personalMovieDb.movies;

//   personalArray[firstAnswer] = secAnswer;
//   personalArray[threeAnswer] = fourAnswer;

// console.log(personalArray);

// =====Вторая домашняя работа=====

const numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?')
const questionsMovie = [
  'Один из послдених просмотренных фильмов?',
  'На сколько оцените его?',
  'Один из послдених просмотренных фильмов?',
  'На сколько оцените его?'
]

// =====Способ через цикл for=====

let answers = [];

for (let i = 0; i < questionsMovie.length; i++) {
  let answer = prompt(questionsMovie[i])
  if (answer === null || answer === "" || answer.length >= 50) {
    i--
  } else {
    answers.push(answer)
  }
}

// =====Способ через цикл while=====

// let i = 0

// while (i < questionsMovie.length) {
//   let answer = prompt(questionsMovie[i]);
//   i++
//   if (answer === null || answer === "" || answer.length >= 50) {
//     break
//   } else {
//     answers.push(answer)
//   }
// }

// =====Способ через цикл do-while=====

// do {
//   let answer = prompt(questionsMovie[i]);
//   i++
//   if (answer === null || answer === "" || answer.length >= 50) {
//     break
//   } else {
//     answers.push(answer)
//   }
// } while (i < questionsMovie.length)

// =====================================

const personalMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
},
  personalArray = personalMovieDb.movies;

if (personalMovieDb.count < 10) {
  alert('Просмотрено довольно мало фильмов')
}
else if (personalMovieDb.count > 10 && personalMovieDb.count <= 30) {
  alert('Вы классический зритель')
}
else if (personalMovieDb.count > 30) {
  alert('Вы киноман!')
} else {
  alert('Произошла ошибка')
}

personalArray[answers[0]] = `${answers[1]} из 10`
personalArray[answers[2]] = `${answers[3]} из 10`

console.log(personalMovieDb);

// =====Третья домашняя работа=====
