const daysBlock = document.querySelector(".timer__days");
const hoursBlock = document.querySelector(".timer__hours");
const minutesBlock = document.querySelector(".timer__minutes");
const secondsBlock = document.querySelector(".timer__seconds");

let interval;

const secWord = (value, words) => {
  value = Math.abs(value) % 100;
  const lastNum = value % 10;

  if (value > 10 && value < 20) return words[2];
  if (lastNum > 1 && lastNum < 5) return words[1];
  if (lastNum === 1) return words[0];

  return words[2];
};

const minWord = (value, words) => {
  value = Math.abs(value) % 60;
  const lastNum = value % 10;

  if (value > 10 && value < 20) return words[2];
  if (lastNum > 1 && lastNum < 5) return words[1];
  if (lastNum === 1) return words[0];

  return words[2];
};

const daysWord = (value, words) => {
  value = Math.abs(value) % 24;
  const lastNum = value % 10;

  if (value > 10 && value < 20) return words[1];
  if (lastNum > 1 && lastNum < 5) return words[0];
  if (lastNum === 1) return words[2];

  return words[1];
};

const updateTimer = () => {
  const date = new Date();
  const dateDeadline = new Date("26 april 2022").getTime();
  const timeReamining = (dateDeadline - date) / 1000;

  const days = Math.floor(timeReamining / 60 / 60 / 24);
  const hours = Math.floor((timeReamining / 60 / 60) % 24);
  const minutes = Math.floor((timeReamining / 60) % 60);
  const seconds = Math.floor(timeReamining % 60);

  const fDays = days < 10 ? "0" + days : days;
  const fHours = hours < 10 ? "0" + hours : hours;
  const fMinutes = minutes < 10 ? "0" + minutes : minutes;
  const fSeconds = seconds < 10 ? "0" + seconds : seconds;

  daysBlock.textContent = fDays;
  hoursBlock.textContent = fHours;
  minutesBlock.textContent = fMinutes;
  secondsBlock.textContent = fSeconds;

  daysBlock.nextElementSibling.textContent = daysWord(days, [
    "дня",
    "дней",
    "день",
  ]);
  //   hoursBlock.nextElementSibling.textContent = hrsWord(minutes, [
  //     "дня",
  //     "дней",
  //     "день",
  //   ]);
  minutesBlock.nextElementSibling.textContent = minWord(minutes, [
    "минута",
    "минуты",
    "минут",
  ]);
  secondsBlock.nextElementSibling.textContent = secWord(seconds, [
    "секунда",
    "секунды",
    "секунд",
  ]);

  if (timeReamining <= 0) {
    clearInterval(interval);
    daysBlock.textContent = "00";
    daysBlock.style.color = "red";
    hoursBlock.textContent = "00";
    hoursBlock.style.color = "red";
    minutesBlock.textContent = "00";
    minutesBlock.style.color = "red";
    secondsBlock.textContent = "00";
    secondsBlock.style.color = "red";
  }
};

interval = setInterval(updateTimer, 500);
