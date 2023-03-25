const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
const millisecond = document.querySelector("#millisecond");
const day = document.querySelector("#day");
const date = document.querySelector("#date");

function updateDayTime() {
  let d = new Date();
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
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let ms = d.getMilliseconds();

  let am = h > 12 ? false : true;
  let titleHour = h > 12 ? h - 12 : h < 10 ? "0" + h : h;

  let time = `Clock-${titleHour}:${m < 10 ? "0" + m : m}:${
    s < 10 ? "0" + s : s
  } ${am ? "AM" : "PM"}`;
  document.title = time;

  let hRotation = h * 30 + m * 0.5 + s * 0.0083 + ms * 0.0000083;
  let mRotation = m * 6 + 0.1 * s + ms * 0.0001;
  let sRotation = s * 6 + 0.006 * ms;
  // let msRotation = ms * 0.36;

  hour.style.transform = `rotate(${hRotation}deg)`;
  minute.style.transform = `rotate(${mRotation}deg)`;
  second.style.transform = `rotate(${sRotation}deg)`;
  // millisecond.style.transform = `rotate(${msRotation}deg)`;
});
