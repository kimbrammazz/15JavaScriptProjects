const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
const weekdays = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const deadline = document.querySelector(".deadline");
const giveaway = document.querySelector(".giveaway");
const items = document.querySelectorAll(".deadline-format h4");
// console.log(items);

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDay();

// set up future day for 10 days from today
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// **** this was used in initital set up **** let futureDate = new Date(2024, 3, 24, 11, 30, 0);
// to get current date use new Date()
// for specific dates - use new Date with format (year, month, date, hours, minutes, seconds)
// console.log(futureDate);

const year = futureDate.getFullYear();
// console.log(year);
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
// *** get the number that represents the month from the months array, remember that it is zero indexed based
let month = futureDate.getMonth();
// console.log(month);
const date = futureDate.getDate();
// *** get the number that represents the day from the weekdays array, remember that it is zero indexed based
let day = futureDate.getDay();
// console.log(day);

giveaway.textContent = `giveaway ends on ${weekdays[day]}, ${date} ${months[month]} ${year} ${hours}:${minutes}am`;

// future time in milliseconds
const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime() {
	const today = new Date().getTime(); //returns milliseconds
	// console.log(today);
	const t = futureTime - today;
	// console.log(t);
	//1s = 1000ms
	//1min = 60s
	//1hr = 60 min
	//1day = 24hr

	// values in ms
	const oneDay = 24 * 60 * 60 * 1000;
	// console.log(oneDay);
	const oneHour = 60 * 60 * 1000;
	const oneMin = 60 * 1000;
	// calculate all values
	let days = Math.floor(t / oneDay);
	// console.log(days);
	let hours = Math.floor((t % oneDay) / oneHour); // get the full days divided by the hours
	// console.log(hours);
	let mins = Math.floor((t % oneHour) / oneMin);
	let seconds = Math.floor((t % oneMin) / 1000);

	// set values array
	const values = [days, hours, mins, seconds];

	function format(item) {
		if (item < 10) {
			return (item = `0${item}`);
		}
		return item;
	}
	items.forEach(function (item, index) {
		item.innerHTML = format(values[index]);
	});

	if (t < 0) {
		clearInterval(countdown);
		deadline.innerHTML = `<h4 class = "expired">Sorry, this giveaway has expired</h4>`;
	}
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
