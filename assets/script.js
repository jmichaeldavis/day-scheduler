var timeEl = document.getElementById('currentDay');
var currentDay = dayjs();
var currentHour = dayjs().format('H');

var hour9El = document.getElementById('9');
var hour10El = document.getElementById('10');
var hour11El = document.getElementById('11');
var hour12El = document.getElementById('12');
var hour13El = document.getElementById('13');
var hour14El = document.getElementById('14');
var hour15El = document.getElementById('15');
var hour16El = document.getElementById('16');
var hour17El = document.getElementById('17');
var arrayDayHours = [hour9El, hour10El, hour11El, hour12El, hour13El,
  hour14El, hour15El, hour16El, hour17El]

var hour9 = parseInt(hour9El.id);

function saveTaskDescription() {
  var timeBlock = this.parentElement;
  var timeSlotId = timeBlock.id;
  var taskDescription = timeBlock.children[1].value;
  localStorage.setItem(timeSlotId, taskDescription);
};

$(document).ready(function () {

  timeEl.textContent = currentDay.format('dddd, MMMM D, YYYY');

  console.log(currentDay);
  console.log(currentHour);

  for (i = 0; i < arrayDayHours.length; i++) {
    var taskTimeBlock = arrayDayHours[i];
    setTaskDescriptionForTimeBlock(taskTimeBlock);
    if (taskTimeBlock.id === currentHour) {
      $(taskTimeBlock).addClass("present");
      console.log("present time works")
    } else if (parseInt(taskTimeBlock.id) < currentHour) {
      console.log('it works');
      $(taskTimeBlock).addClass("past");
    } else {
      $(taskTimeBlock).addClass("future");
    }
  }

  function setTaskDescriptionForTimeBlock(taskTimeBlock) {

    var taskDescription = localStorage.getItem(taskTimeBlock.id);
    var taskTextArea = taskTimeBlock.children[1];
    taskTextArea.textContent = taskDescription;
  }

  document.querySelectorAll('button').forEach(item => {
    item.addEventListener('click', saveTaskDescription)
  });

});