var lesson = "1-1";

// Might need to start off teaching data & attr into this lesson.

jQuery(function($) {
  question("When a tab is clicked, show the related flights and highlight the tab using bind({}).");
});

function changeTab(e) {
  console.log(lesson + " changeTab");
  e.preventDefault();
  $("#tabs li a.active").removeClass("active");
  $(e.target).addClass("active");
}

function showNumberOfFlights(e) {
  console.log(lesson + " showNumberOfFlights");
  $(e.target).append("<span class='tooltip'>"+ $(e.target).data('flights') +" flights</span>");
}

function hideNumberOfFlights(a) {
  console.log(lesson + " showNumberOfFlights");
  $(".tooltip").remove();
}

jQuery(function($) {
  $("#tabs ul li a").click(changeTab);
  $("#tabs ul li a").mouseenter(showNumberOfFlights);
  $("#tabs ul li a").mouseout(hideNumberOfFlights);

  $("#tabs ul li a.active").click();
});

// jQuery(function($) {
//   $("#tabs ul li a").bind({
//     click: changeTab,
//     mouseenter: showNumberOfFlights,
//     mouseout: hideNumberOfFlights
//   });
//   $("#tabs ul li a.active").click();
// });