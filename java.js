function UpdateClock() {
const now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();


//convert to 24 hour format
let ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12;

//add leading zeros
hours = hours.toString().padStart(2, '0');
minutes = minutes.toString().padStart(2, '0');
seconds = seconds.toString().padStart(2, '0');

//Date display
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const dateString = now.toLocaleDateString(undefined, options);


document.getElementById('time').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
document.getElementById('ampm').textContent = ampm;
document.getElementById('date').textContent = dateString;
}
UpdateClock();
setInterval(UpdateClock, 1000);