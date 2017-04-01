'use strict';

let
	seconds = 1000,
	minutes = seconds * 60,
	hours = minutes * 60,
	days = hours * 24,
	years = days * 365,
	calendarMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// console.log(`milliseconds in a year: ${years}`);


// EXERCISE 1: Create a Date object with today's date.
let date = new Date();

// console.log(`Today's Date: ${date}`);
console.log(`${calendarMonths[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`);


// EXERCISE 2: Create a Date object with the date of 1 January 2017.
let janDate = new Date(2017, 0);

console.log(`${janDate.getDate()} ${calendarMonths[janDate.getMonth()]} ${janDate.getFullYear()}`);

// EXERCISE 3: Find the number of days between today and 1 Jan 2017.

console.log(`The number of days since January 1st, 2017: ${Math.floor(
	(date - janDate) / days
)} days`);
