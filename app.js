function clock() {
  var date = new Date();
  var options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true
  };
  var timeString = date.toLocaleString("en-US", options);
  document.getElementById("localTime").innerHTML = timeString;
}

setInterval(clock, 100);