'use strict';
document.addEventListener('DOMContentLoaded', () => {

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

  // const questionMovie = [
  //   'Один и последних просмотренных фильмов?',
  //   'На сколько оцените его?',
  // ],
  //   personalMovieDB = {
  //     count: null,
  //     movies: {},
  //     actors: {},
  //     genres: [],
  //     privat: false,
  //     start: () => {
  //       personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?');
  //       while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
  //         personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?');
  //       }
  //     },
  //     askQuestions: () => {
  //       for (let i = 0; i < 2; i++) {
  //         for (let i = 0; i < questionMovie.length; i++) {
  //           let answer = prompt(questionMovie[i]);

  //           if (answer == null || answer == '' || answer.length > 50) {
  //             i--;
  //           } else {
  //             answers.push(answer);
  //           };
  //         };
  //       }
  //       userFilms[answers[0]] = `${answers[1]} из 10`;
  //       userFilms[answers[2]] = `${answers[3]} из 10`;
  //     },
  //     writeYourGenres: () => {
  //       for (let i = 0; i < 3; i++) {
  //         const favoriteGenres = prompt(`Ваш любимый жанр под номером ${i + 1}`).toLowerCase();
  //         if (favoriteGenres == null || favoriteGenres == '' || favoriteGenres.length > 50) {
  //           i--
  //         } else {
  //           personalMovieDB.genres[i] = favoriteGenres;
  //         }
  //       }
  //       personalMovieDB.genres.forEach((e, i) => {
  //         console.log(`Любимый жанр #${i + 1} - это ${e}`);
  //       })
  //     },
  //     setLvlUser: () => {
  //       if (personalMovieDB.count < 10) {
  //         alert('Вы посмотрели довольно мало фильмов')
  //       } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  //         alert('Вы классический зритель')
  //       } else if (personalMovieDB.count > 30) {
  //         alert('Вы киноман!')
  //       } else {
  //         alert('Произошла ошибка')
  //       };
  //     },
  //     toggleVisibleMyDB: () => {
  //       if (personalMovieDB.privat) {
  //         personalMovieDB.privat = false;
  //       } else {
  //         personalMovieDB.privat = true;
  //       }
  //     },
  //     showMyDB: () => {
  //       if (personalMovieDB.privat) {

  //       } else {
  //         console.log(personalMovieDB)
  //       }
  //     }
  //   },
  //   userFilms = personalMovieDB.movies,
  //   answers = [];

  // personalMovieDB.start()

  // personalMovieDB.askQuestions()

  // personalMovieDB.writeYourGenres()

  // personalMovieDB.setLvlUser();

  // // personalMovieDB.toggleVisibleMyDB();

  // personalMovieDB.showMyDB();

  // =====Пятая домашняя работа=====

  // const adv = document.querySelectorAll('.promo__adv img'),
  //     poster = document.querySelector('.promo__bg'),
  //     genreName = poster.querySelector('.promo__genre'),
  //     films = document.querySelectorAll('.promo__interactive-item');
  //     // filmList = document.querySelector('.promo__interactive-list');

  // adv.forEach(e => {
  //     e.remove()
  // })

  // genreName.textContent = 'драма'

  // poster.style.background = 'url(../img/bg.jpg)';

  // const movieDB = {
  //     movies: [
  //         "Логан",
  //         "Лига справедливости",
  //         "Ла-ла лэнд",
  //         "Одержимость",
  //         "Скотт Пилигрим против..."
  //     ]
  // },
  //     { movies } = movieDB;

  // movies.sort();

  // films.forEach((name, i) => {
  //     name.textContent = `${i + 1} ${movies[i]}`
  // })

  // // filmList.innerHTML = null;

  // // movies.forEach((name, i) => {
  // //     filmList.innerHTML += `
  // //     <li class="promo__interactive-item">${i + 1} ${name}
  // //             <div class="delete"></div>
  // //     </li>
  // //     `
  // // });

  // =====Шестая домашняя работа=====

  const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genreName = poster.querySelector('.promo__genre'),
    form = document.querySelector('.add'),
    input = form.querySelector('.adding__input'),
    send = form.querySelector('button'),
    checkbox = form.querySelector('[type="checkbox"]'),
    filmList = document.querySelector('.promo__interactive-list'),
    updateMovies = (parent, films) => {
      sorting(films);
      parent.innerHTML = "";
      films.forEach((name, i) => {
        parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${name}
                <div class="delete"></div>
            </li>
        `;
      });

      document.querySelectorAll('.delete').forEach((e, i) => {
        e.addEventListener('click', () => {
          e.parentElement.remove();
          films.splice(i, 1);
          updateMovies(parent, films);
        })
      })
    },
    removeAdv = (trash) => {
      trash.forEach(e => {
        e.remove()
      })
    },
    addChange = (name, bg) => {
      name.textContent = 'драма';

      bg.style.background = 'url(../img/bg.jpg)';
    },
    sorting = (arr) => {
      arr.sort()
    },
    movieDB = {
      movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
      ]
    },
    { movies } = movieDB;

  form.addEventListener('submit', e => {
    e.preventDefault()
    let resultAnswer = input.value;
    if (resultAnswer > 21) {
      resultAnswer = `${resultAnswer.splice(0, 21)}...`
    }
    if (resultAnswer) {
      movies.push(resultAnswer)
      sorting(movies)
      updateMovies(filmList, movies)
    } else {
      alert('Вы ввели неверное значение')
    }
    if (checkbox.checked && resultAnswer) {
      alert(`Добавляем любимый фильм ${resultAnswer}`)
    }
    e.target.reset()
  });

  removeAdv(adv);
  addChange(genreName, poster);
  updateMovies(filmList, movies);

  // =====Седьмая домашняя работа=====

})