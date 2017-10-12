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
