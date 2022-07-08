// Get current time and display it
var currentTime = moment().format("dddd, MMMM Do")
$("#currentDay").text(currentTime);

// Function that renders saved events from local storage to page
function renderSavedEvents() {
    $("#timeblock-9am .description").val(localStorage.getItem("9AM"));
    $("#timeblock-10am .description").val(localStorage.getItem("10AM"));
    $("#timeblock-11am .description").val(localStorage.getItem("11AM"));
    $("#timeblock-12pm .description").val(localStorage.getItem("12PM"));
    $("#timeblock-1pm .description").val(localStorage.getItem("1PM"));
    $("#timeblock-2pm .description").val(localStorage.getItem("2PM"));
    $("#timeblock-3pm .description").val(localStorage.getItem("3PM"));
    $("#timeblock-4pm .description").val(localStorage.getItem("4PM"));
    $("#timeblock-5pm .description").val(localStorage.getItem("5PM"));
}

// Function that handles timeblock coloring
function colorTimeblock() {
    var currentHour = moment().hour();
    $(".container").children().each(function() {
        var timeblockHour =  $(this).children(".hour")[0].id;
        console.log(timeblockHour);

        if (currentHour < timeblockHour) {
            $(this).children(".description").addClass("future");
        }
        else if (currentHour == timeblockHour) {
            $(this).children(".description").addClass("present");
        }
        else {
            $(this).children(".description").addClass("past");
        }
    })

    
}

// Save button event handler
$(".saveBtn").on("click", function() {
    // Save text to local storage (time and event text)
    var eventDesc = $(this).siblings(".description").val();
    var eventHour = $(this).siblings(".hour").text();

    localStorage.setItem(eventHour, eventDesc);
})

renderSavedEvents()
colorTimeblock();