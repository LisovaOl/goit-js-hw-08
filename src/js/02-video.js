import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(saveTime, 1000));

// збереження часу відтворення в сховище

function saveTime({ seconds }) {
  localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, seconds);
  // console.log('Збережено');
  // console.log(seconds);
}

// сюди поклала збережений час
const currentTimeVideo = JSON.parse(
  localStorage.getItem(VIDEOPLAYER_CURRENT_TIME)
);

//console.log(currentTimeVideo);

// відтворення збереженого часу після перезавантаження
if (currentTimeVideo) {
  player.setCurrentTime(currentTimeVideo);
}

// Завдання 2 - відеоплеєр

// HTML містить <iframe> з відео для Vimeo плеєра. Напиши скрипт, який буде зберігати поточний час відтворення відео у локальне сховище і, після перезавантаження сторінки, продовжувати відтворювати відео з цього часу.
// Виконуй це завдання у файлах 02-video.html і 02-video.js. Розбий його на декілька підзавдань:

//     Ознайомся з документацією бібліотеки Vimeo плеєра.
//     Додай бібліотеку як залежність проекту через npm.
//     Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
//     Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
//     Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
//     Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
//     Додай до проекту бібілотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.

