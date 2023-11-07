$(function () {

  function buttonPressed(){
    console.log("Clicked!")
    var key = $(this).parent().attr("id")
    var valueToSave = $(this).siblings("textarea").val()
    console.log(typeof(key))
    console.log(typeof(valueToSave))
    localStorage.setItem(key,valueToSave)
  }
  console.log($('.btn, .saveBtn'))
  $('.btn, .saveBtn').click(buttonPressed)

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // store locally with information on what hour it is to match
  //
  // Display the current date and time
  function updateTime() {
    const now = dayjs();
    const dateElement = $('#date');
    const timeElement = $('#time');

    dateElement.text(now.format('dddd, MMMM D, YYYY'));
    timeElement.text(now.format('hh:mm:ss A'));
  }
  setInterval(updateTime, 1000);

  // Compare current hour to time block - adjusting class / highlighted color accordingly
  let currentHour = new Date().getHours();
  let timeBlocks = document.querySelectorAll(".time-block");

  function highlightCurrentTimeBlock() {
    timeBlocks.forEach((block, index) => {
      let blockHour = 9 + index;
      block.classList.remove('past', 'present', 'future');
      
      if (blockHour < currentHour) {
        block.classList.add('past');
      } else if (blockHour === currentHour) {
        block.classList.add('present');
      } else {
        block.classList.add('future');
      }
    });
  }
  highlightCurrentTimeBlock();



});