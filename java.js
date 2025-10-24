function UpdateClock() {
const now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();


//convert to 24 hour format
let ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12;
}
UpdateClock();