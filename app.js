const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
const day = document.querySelector("#day");
const date = document.querySelector("#date");

let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();

let hRotation = h * 30 + m * 0.5 + s * 0.0083;
let mRotation = m * 6 + 0.1 * s;
let sRotation = s * 6;
function updateDayTime() {
  const WEEK_DAYS = [
    "Sunday",
    "Mondays",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const MONTH = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const today = WEEK_DAYS[d.getDay()];
  const todayDateMonth = d.getDate() + " " + MONTH[d.getMonth()];

  return [today, todayDateMonth];
}

day.innerHTML = updateDayTime()[0];
date.innerHTML = updateDayTime()[1];

setInterval(() => {
  hRotation = hRotation + 30 / 3600;
  mRotation = mRotation + 6 / 60;
  sRotation = sRotation + 6;

  hour.style.transform = `rotate(${hRotation}deg)`;
  minute.style.transform = `rotate(${mRotation}deg)`;
  second.style.transform = `rotate(${sRotation}deg)`;
}, 1000);
