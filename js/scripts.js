$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var items = ["1", "2", "3", "4", "5", "6"]
    var userInput = []
    items.forEach(function(item) {
      userInput.push($("input#" + item).val());
    })

    userInput = userInput.sort();

    var upperCase = userInput.map(function(item) {
      return item.toUpperCase();
    });

    console.log(upperCase);

    upperCase.forEach(function(item) {
          $('ol').append("<li>"+item+"</li>");
    $("#list").show();
    $("#form").hide();
    });
    event.preventDefault();
  });
});
