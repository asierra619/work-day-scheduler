// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  function buttonPressed (){
    console.log("Clicked!")
    var key = $(this).parent().attr("id")
    var valueToSave = $(this).siblings("textarea").val()
    console.log(typeof(key))
    console.log(typeof(valueToSave))
    //dom traversal
    // parent, children -> siblings
    localStorage.setItem(key,valueToSave)
  }
  console.log($('.btn, .saveBtn'))
  $('.btn, .saveBtn').click(buttonPressed)
// iterate through all elements with class row (google with jquery)
// $(selector).each(function(index,element))
// going to use this to compare number from id - hour"whatever" - will need
// to split id into an interger and then use dayjs to log current time on header
// and compare to id interger
  // $(".row").each(function() //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // store locally with information on what hour it is to match
  //
  // TODO: Add code to display the current date in the header of the page.
});
var now = dayjs().format('dddd, MMMM M, YYYY, hh:mm:ss A');
$('header').append(now);
console.log(now);