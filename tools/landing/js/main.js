// DOM Elements
const time    = document.getElementById('time'),
  greeting    = document.getElementById('greeting'),
  name        = document.getElementById('name'),
  nowWeather  = document.getElementById('nowWeather'),
  weekWeather = document.getElementById('weekWeather');
// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Output Time
  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`
  setTimeout(showTime, 100);

}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();
  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('img/morning.jpg')";
    greeting.textContent = 'Good Morning';
    document.body.style.color = 'black';
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('img/afternoon.jpg')";
    greeting.textContent = 'Good Afternoon';
    document.body.style.color = 'black';
  } else {
    // Night
    document.body.style.backgroundImage = "url('img/night.jpg')";
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'white';
  }
  setTimeout(setBgGreet, 100);
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

showTime();
setBgGreet();
