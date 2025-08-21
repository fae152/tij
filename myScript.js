//Time and Date
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let date = today.getDate();
  // Convert the string to a Date object
  let dateObj = new Date(date);
  // Array of weekday names
  const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  // Get the day of the week (0-6) and find the corresponding day name
  let dayName = weekdays[dateObj.getDay()];
  let monthName =month[today.getMonth()];
  // convert hours to 12-hour format
  h = h % 12;
  h = h ? h : 12;
  // add am/pm suffix
  let amPm = h >= 12 ? 'pm' : 'am';
  m = checkTime(m);
  document.getElementById('time').innerHTML =  h + ":" + m + " " + amPm;
  document.getElementById('date').innerHTML = dayName + " • " + date + " " + monthName;
  document.getElementById('time2').innerHTML =  h + ":" + m + " " + amPm;
  document.getElementById('date2').innerHTML = dayName + " • " + date + " " + monthName;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

/*Show About onClick*/
function aboutPage() {
  var x = document.getElementById("About");
  var y = document.getElementById("pocketExpanded");
  var z = document.getElementById("copyright1");
  var a = document.getElementById("pocketBG1");
  if (x.style.display === "none" & y.style.display === "none" & z.style.display === "block" & a.style.display === "block") {
    x.style.display = "block";
    y.style.display = "block";
    z.style.display = "none";
    a.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
    a.style.display = "block";
  }
}
