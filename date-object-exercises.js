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
// EXERCISE 5: Randomly set a boolean workout property on each date object in our array

let
	start = date.getTime() - millisecondsSinceJan,
	end = date.getTime(),
	dayArr = [];

	function workedOut() {
		let
			result,
			randomNum = Math.round(Math.random() * 10);

		if (randomNum > 5) {
			result = true;
		} else {
			result = false;
		}

		return result;
	}

for (let i = start; i < end; i += days) {
	let dateObj = {};

  if (dateObj[i] === undefined) {
    dateObj[i] = workedOut();
  }

  dayArr.push(dateObj);
}

for(let j = 0; j < dayArr.length; j++) {
  console.log(new Date(dayArr[j]));
}

console.log(dayArr);

// for(let j = 0; j < dayArr.length; j++) {
//   let convert = Object.keys(dayArr[j]);
//   let test = new Date(parseInt(convert));

//   console.log(test);
//   // console.log(dayArr[j]);
//   // console.log(new Date(dayArr[j]));
// }







// EXERCISE 6: Did you workout on the first day of the year?

// EXERCISE 7: Did you workout seven days ago?
