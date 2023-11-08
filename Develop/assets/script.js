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

  $(document).ready(function() {
    // Attach a click event listener to the save button
    $('.saveBtn').on('click', function() {
      // Get the text from the input field
      var valueToSave = $('#textarea').val();
  
      // Save the text to local storage under a specific key
      localStorage.setItem('#textarea', valueToSave);
    });
  });

  $(document).ready(function() {
    // Attach a click event listener to the retrieve button
    $('.saveBtn').on('click', function() {
      // Retrieve the text from local storage under the 'savedText' key
      var valueToSave = localStorage.getItem('#textarea');
  
      if (valueToSave !== null) {
        // Display the retrieved text in the 'displayText' div
        $('#textarea').text(valueToSave)
      } else {
        // Notify if no text is found in local storage
        $('#textarea').text('No text found in local storage');
      }
      localStorage.getItem(valueToSave);
    });
  });
  
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
      block.children[1].value = localStorage.getItem(block.id);
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