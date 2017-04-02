'use strict';

let
	seconds = 1000,
	minutes = seconds * 60,
	hours = minutes * 60,
	days = hours * 24,
	years = days * 365,
	calMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	date = new Date(),
	janDate = new Date(2017, 0),
	millisecondsSinceJan = date - janDate;

// EXERCISE 1: Create a Date object with today's date.
// console.log(`Today's Date: ${date}`);
console.log(`Todays's Date: ${calMonths[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`);


// EXERCISE 2: Create a Date object with the date of 1 January 2017.
console.log(`${janDate.getDate()} ${calMonths[janDate.getMonth()]} ${janDate.getFullYear()}`);


// EXERCISE 3: Find the number of days between today and 1 Jan 2017.
let
	daysSinceJan = Math.floor(millisecondsSinceJan / days);

console.log(`The number of days since January 1st, 2017: ${daysSinceJan} days`);


// EXERCISE 4: Create an array of Date objects from our start date to our end date.
let
	start = date.getTime() - millisecondsSinceJan,
	end = date.getTime(),
	dayArr = [];

for(let i = start; i < end; i += days) {
  dayArr.push(i);
}

for(let j=0; j < dayArr.length; j++) {
  console.log(new Date(dayArr[j]));
}








// Exercise 5: Randomly set a boolean workout property on each date object in our array

// Exercise 6: Did you workout on the first day of the year?

// Exercise 7: Did you workout seven days ago?
