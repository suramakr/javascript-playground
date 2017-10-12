var selector = document.getElementById("calendarmonths");
var list = document.querySelector("ul");
var monthname = document.querySelector("h1");

selector.addEventListener("change", processSelection);

function processSelection() {
  var choice = selector.value;
  var days = 31;
  if(choice === 'Feb') {
    days = 28;
  } else if(choice === 'Apr' || choice === 'Jun' || choice === 'Sep'|| choice === 'Nov') {
    days = 30;
  }
  createCalendar(days, choice);
  drawCircles();
}

function createCalendar(days, choice) {
  monthname.textContent = choice;
  list.innerHTML = '';
  for (var i =1; i<=days; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'January');
drawCircles();

function drawCircles() {
  //draw some nice circles
  var WIDTH = document.documentElement.clientWidth;
  var HEIGHT = document.documentElement.clientHeight;

  var canvas = document.querySelector("canvas");
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}


function random(number) {
  return Math.floor(Math.random()*number);
}
