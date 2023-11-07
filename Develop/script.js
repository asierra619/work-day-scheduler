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
      var textToSave = $('textarea[]').val();
  
      // Save the text to local storage under a specific key
      localStorage.setItem('textarea[]', textToSave);
    });
  });

  $(document).ready(function() {
    // Attach a click event listener to the retrieve button
    $('.saveBtn').on('click', function() {
      // Retrieve the text from local storage under the 'savedText' key
      var retrievedText = localStorage.getItem('textarea[]');
  
      if (retrievedText !== null) {
        // Display the retrieved text in the 'displayText' div
        $('textarea[]').text(retrievedText);
      } else {
        // Notify if no text is found in local storage
        $('textarea[]').text('No text found in local storage');
      }
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