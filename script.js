'use strict';
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const currentDayOfWeek = daysOfWeek[today.getDay()];

// updating the day
const dayOfWeekElement = document.querySelector('.dayOfTheWeek');
dayOfWeekElement.textContent = `Day: ${currentDayOfWeek}`;

// variable to hold the time
const currentTimeInMilliseconds = Date.now();

// updating the time
const utcTimeElement = document.querySelector('.utc_time');
utcTimeElement.textContent = `Time: ${currentTimeInMilliseconds}`;

