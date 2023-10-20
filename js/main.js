'use strict'

// =====Первая домашняя работа=====

// const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?'),
//   firstQuestion = prompt('Один и последних прсмотренных фильмов?'),
//   secQuestion = prompt('На сколько оцените его?'),
//   threeQuestion = prompt('Один и последних прсмотренных фильмов?'),
//   fourQuestion = prompt('На сколько оцените его?'),
// personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// },
// userFilms = personalMovieDB.movies;

// userFilms[firstQuestion] = secQuestion;
// userFilms[threeQuestion] = fourQuestion;

// if (personalMovieDB.count < 10) {
//   alert('Вы посмотрели довольно мало фильмов')
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//   alert('Вы классический зритель')
// } else if (personalMovieDB.count > 30) {
//   alert('Вы киноман!')
// } else {
//   alert('Произошла ошибка')
// }

// console.log(personalMovieDB)

// =====Вторая домашняя работа=====

// const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?'),
//   questionMovie = [
//     'Один и последних прсмотренных фильмов?',
//     'На сколько оцените его?',
//   ],
//   personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
//   },
//   userFilms = personalMovieDB.movies;

// let answers = [];

// for (let i = 0; i < 2; i++) {
//   for (let i = 0; i < questionMovie.length; i++) {
//     let answer = prompt(questionMovie[i]);

//     if (answer == null || answer == '' || answer.length > 50) {
//       i--;
//     } else {
//       answers.push(answer);
//     };
//   };
// }

// userFilms[answers[0]] = `${answers[1]} из 10`;
// userFilms[answers[2]] = `${answers[3]} из 10`;

// if (personalMovieDB.count < 10) {
//   alert('Вы посмотрели довольно мало фильмов')
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//   alert('Вы классический зритель')
// } else if (personalMovieDB.count > 30) {
//   alert('Вы киноман!')
// } else {
//   alert('Произошла ошибка')
// };

// console.log(personalMovieDB);

// =====Третья домашняя работа=====

// const questionMovie = [
//   'Один и последних прсмотренных фильмов?',
//   'На сколько оцените его?',
// ],
//   personalMovieDB = {
//     count: null,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
//   },
//   userFilms = personalMovieDB.movies,
//   answers = [];

// start();

// askQuestions();

// writeYourGenres()

// setLvlUser();

// showMyDB();

// function start() {
//   personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?');
//   while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
//     personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?');
//   }
// };
// function askQuestions() {
//   for (let i = 0; i < 2; i++) {
//     for (let i = 0; i < questionMovie.length; i++) {
//       let answer = prompt(questionMovie[i]);

//       if (answer == null || answer == '' || answer.length > 50) {
//         i--;
//       } else {
//         answers.push(answer);
//       };
//     };
//   }
//   userFilms[answers[0]] = `${answers[1]} из 10`;
//   userFilms[answers[2]] = `${answers[3]} из 10`;
// };
// function writeYourGenres() {
//   for (let i = 0; i < 3; i++) {
//     const favoriteGenres = prompt(`Ваш любимый жанр под номером ${i + 1}`);
//     if (favoriteGenres == null || favoriteGenres == '' || favoriteGenres.length > 50) {
//       i--
//     } else {
//       personalMovieDB.genres[i] = favoriteGenres;
//     }
//   }
// };
// function setLvlUser() {
//   if (personalMovieDB.count < 10) {
//     alert('Вы посмотрели довольно мало фильмов')
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     alert('Вы классический зритель')
//   } else if (personalMovieDB.count > 30) {
//     alert('Вы киноман!')
//   } else {
//     alert('Произошла ошибка')
//   };
// };
// function showMyDB() {
//   if (personalMovieDB.privat == false) {
//     console.log(personalMovieDB)
//   } else {

//   }
// };

// =====Четвертая домашняя работа=====

const questionMovie = [
  'Один и последних просмотренных фильмов?',
  'На сколько оцените его?',
],
  personalMovieDB = {
    count: null,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: () => {
      personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?');
      while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?');
      }
    },
    askQuestions: () => {
      for (let i = 0; i < 2; i++) {
        for (let i = 0; i < questionMovie.length; i++) {
          let answer = prompt(questionMovie[i]);

          if (answer == null || answer == '' || answer.length > 50) {
            i--;
          } else {
            answers.push(answer);
          };
        };
      }
      userFilms[answers[0]] = `${answers[1]} из 10`;
      userFilms[answers[2]] = `${answers[3]} из 10`;
    },
    writeYourGenres: () => {
      for (let i = 0; i < 3; i++) {
        const favoriteGenres = prompt(`Ваш любимый жанр под номером ${i + 1}`);
        if (favoriteGenres == null || favoriteGenres == '' || favoriteGenres.length > 50) {
          i--
        } else {
          personalMovieDB.genres[i] = favoriteGenres;
        }
      }
      personalMovieDB.genres.forEach((e, i) => {
        console.log(`Любимый жанр #${i + 1} - это ${e.toLowerCase()}`);
      })
    },
    setLvlUser: () => {
      if (personalMovieDB.count < 10) {
        alert('Вы посмотрели довольно мало фильмов')
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель')
      } else if (personalMovieDB.count > 30) {
        alert('Вы киноман!')
      } else {
        alert('Произошла ошибка')
      };
    },
    toggleVisibleMyDB: () => {
      if (personalMovieDB.privat === false) {
        personalMovieDB.privat = true;
      } else {
        personalMovieDB.privat = false;
      }
    },
    showMyDB: () => {
      if (personalMovieDB.privat == false) {
        console.log(personalMovieDB)
      } else {
      }
    }
  },
  userFilms = personalMovieDB.movies,
  answers = [];

personalMovieDB.start()

personalMovieDB.askQuestions()

personalMovieDB.writeYourGenres()

personalMovieDB.setLvlUser();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB();